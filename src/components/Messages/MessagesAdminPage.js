import {InputBase, Paper} from "@mui/material";
import LoadingSpinner from "../LoadingSpinner";
import {useEffect, useRef, useState} from "react";
import "./MessagesPageStyle.css"
import IconButton from "@mui/material/IconButton";
import SendIcon from '@mui/icons-material/Send';
import {ReadMessages, WriteAnswer} from "../../utils/messages";
import MessageObject from "./MessageObject";


//TODO: Rethink db so that there is chats with each person.
//      I need to see the whole convo with the person.
//      Also, need to put something to change chat/person
export default function MessagesAdminPage () {
    const [loading, setLoading] = useState(true);
    const [inputText, setInputText] = useState("");
    const [messages, setMessages] = useState([])
    const [sentMessage, setSentMessage] = useState(false);

    // Create a reference to the last message
    const messagesEndRef = useRef(null);

    useEffect(() => {
        async function getMessages() {
            const messages = await ReadMessages();
            messages.forEach(message => {message.answer = !message.answer});
            setMessages(messages);
            setLoading(false);
        }
        getMessages().then();
    },[sentMessage])

    useEffect(() => {
        // Scroll to the last message when a new message gets sent
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    },[messages])

    const handleChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSendMessage = async () => {
        if (inputText !== "") await WriteAnswer(inputText, "73E27DgNxbcYXvbW2G6x5690DWt1");
        setInputText("");
        setSentMessage(!sentMessage);
        // Scroll to the last message when a new message is sent
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div>
            <LoadingSpinner loading={loading}/>
            <div className="messagesContainer">
                <p className="header">
                    Vous êtes un admin. Répondez aux questions des ptits jeunes!
                </p>
                <div className="messages">
                    <div className="contentWrapper">
                        <div className="content">
                            {
                                messages.map((message, index) => (
                                    <div key={message.id}
                                        // Add the ref to the last message in the list
                                         ref={messages.length - 1 === index ? messagesEndRef : null}>
                                        <MessageObject
                                            message={message}
                                            // Check if this is the first message or if the date has changed since the last message
                                            showDate={index === 0 || message.date.toDate().toLocaleDateString() !== messages[index - 1].date.toDate().toLocaleDateString()}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <Paper
                    component="form"
                    style={{
                        justifyContent: "flex-end",
                        display: "flex",
                        flexDirection: "column",
                        width: "99%",
                        backgroundColor: "rgba(165, 86, 45, 0.7)",
                        color: "white",
                        border: "solid 2px #ffffff",
                        position: "relative",
                        marginTop: "1vh",
                        maxHeight: "40%",
                    }}
                >
                    <InputBase
                        placeholder="Réponse..."
                        multiline
                        value={inputText}
                        onChange={handleChange}
                        onKeyDown={event => {
                            if (event.key === 'Enter' && !event.shiftKey) {
                                event.preventDefault();
                                handleSendMessage().then();
                            }}}
                        className="textInput"
                        style={{ color: "white", flex: 1}}
                    />
                    <IconButton color="primary"
                                sx={{position: "absolute", right: 0}}
                                onClick={handleSendMessage}
                    >
                        <SendIcon />
                    </IconButton>
                </Paper>
            </div>
        </div>
    )
}