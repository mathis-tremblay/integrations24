import {InputBase, Paper} from "@mui/material";
import LoadingSpinner from "../LoadingSpinner";
import {useEffect, useRef, useState} from "react";
import "./MessagesPageStyle.css"
import IconButton from "@mui/material/IconButton";
import SendIcon from '@mui/icons-material/Send';
import {readMessages, writeMessage} from "../../utils/messages";
import MessageObject from "./MessageObject";


export default function MessagesPage () {
    const [loading, setLoading] = useState(true);
    const [inputText, setInputText] = useState("");
    const [messages, setMessages] = useState([])
    const [sentMessage, setSentMessage] = useState(false);

    // Create a reference to the last message
    const messagesEndRef = useRef(null);

    // Fetching data here vs in MainContext so that it reloads when messages are sent
    useEffect(() => {
        async function getMessages() {
            const messages = await readMessages();
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
        if (inputText !== "") await writeMessage(inputText);
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
                    Des questions? Écrivez un message à votre comité organisateur!
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
                        placeholder="Message..."
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
                                sx={{position: "absolute", right: 0, top: -3}}
                                onClick={handleSendMessage}
                    >
                        <SendIcon />
                    </IconButton>
                </Paper>
            </div>
        </div>
    )
}