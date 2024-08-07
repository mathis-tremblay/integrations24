import {FormControl, FormHelperText, InputBase, MenuItem, Paper, Select} from "@mui/material";
import LoadingSpinner from "../LoadingSpinner";
import {useEffect, useRef, useState} from "react";
import "./MessagesPageStyle.css"
import IconButton from "@mui/material/IconButton";
import SendIcon from '@mui/icons-material/Send';
import {GetUsersWhoSentMessages, ReadMessages, WriteAnswer} from "../../utils/messages";
import MessageObject from "./MessageObject";
import {styled} from "@mui/material/styles";


// Create a styled Select component
const StyledSelect = styled(Select)({
    color: "white",
    // Border color
    "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "white"
    },
    // Border color on hover
    "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "white"
    },
    // Border color when focused
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "white"
    },
    // Arrow color
    "&.MuiSelect-select:focus": {
        "&.MuiSelect-icon": {
            color: "white"
        }
    },
    // Arrow color
    "& .MuiSelect-icon": {
        color: "white",
    },
    // Custom scrollbar styles
    "& .MuiSelect-root": {
        "&::-webkit-scrollbar": {
            width: '10px',
        },
        "&::-webkit-scrollbar-track": {
            background: 'rgba(241, 241, 241, 0.3)',
            borderRadius: '20px',
        },
        "&::-webkit-scrollbar-thumb": {
            background: '#e4e4e4',
            borderRadius: '20px',
            transition: 'background 0.3s',
        },
        "&::-webkit-scrollbar-thumb:hover": {
            background: '#c5c5c5',
            transition: 'background 0.15s',
        },
    },
});

const MenuProps = {
    PaperProps: {
        sx: {
            color: "rgba(85, 136, 38)",
            maxHeight: '30vh',
            '&::-webkit-scrollbar': {
                width: '10px',
            },
            '&::-webkit-scrollbar-track': {
                background: 'rgba(241, 241, 241, 0.3)',
                borderRadius: '20px',
            },
            '&::-webkit-scrollbar-thumb': {
                background: '#e4e4e4',
                borderRadius: '20px',
                transition: 'background 0.3s',
            },
            '&::-webkit-scrollbar-thumb:hover': {
                background: '#c5c5c5',
                transition: 'background 0.15s',
            },
        },
    },
};


export default function MessagesAdminPage () {
    const [loading, setLoading] = useState(true);
    const [inputText, setInputText] = useState("");
    const [messages, setMessages] = useState([])
    const [sentMessage, setSentMessage] = useState(false);
    const [selectedUser, setSelectedUser] = useState('');
    const [userIds, setUserIds] = useState([]);

    // Create a reference to the last message
    const messagesEndRef = useRef(null);

    useEffect(() => {
        async function getUserIds() {
            const ids = await GetUsersWhoSentMessages();
            setUserIds(ids);
        }
        getUserIds().then();
    }, [])

    useEffect(() => {
        async function getMessages() {
            const messages = await ReadMessages(selectedUser);
            messages.forEach(message => {message.answer = !message.answer});
            setMessages(messages);
            setLoading(false);
        }
        getMessages().then();
    },[sentMessage, selectedUser])

    useEffect(() => {
        // Scroll to the last message when a new message gets sent
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    },[messages])

    const handleChange = (event) => {
        setInputText(event.target.value);
    };

    const handleUserChange = (event) => {
        setSelectedUser(event.target.value);
    };

    const handleSendMessage = async () => {
        if (inputText) await WriteAnswer(inputText, selectedUser);
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

                <FormControl>
                    <FormHelperText sx={{color: "white"}}>
                        Vous êtes présentement en discussion avec l'utilisateur suivant
                    </FormHelperText>
                    <StyledSelect
                        displayEmpty
                        value={selectedUser}
                        onChange={handleUserChange}
                        MenuProps={MenuProps}
                    >
                        <MenuItem disabled value="">
                            <em>Aucune personne</em>
                        </MenuItem>
                        {userIds.map((userId) => (
                            <MenuItem key={userId} value={userId}>
                                {userId}
                            </MenuItem>
                        ))}
                    </StyledSelect>
                </FormControl>
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