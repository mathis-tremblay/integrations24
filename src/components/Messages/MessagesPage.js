import {InputBase, Paper} from "@mui/material";
import LoadingSpinner from "../LoadingSpinner";
import {useEffect, useState} from "react";
import "./MessagesPageStyle.css"
import IconButton from "@mui/material/IconButton";
import SendIcon from '@mui/icons-material/Send';
import {ReadMessages, WriteMessage} from "../../utils/messages";
import MessageObject from "./MessageObject";


export default function MessagesPage () {
    const [loading, setLoading] = useState(true);
    const [inputText, setInputText] = useState("");
    const [messages, setMessages] = useState([])

    /* BRAINSTORM
    * - Envoyer messages vers firebase.
    * - Trier messages et réponses (par admin) en fonction de la date qui est en clé.
    *   Donc on sait l'ordre d'affichage.
    *   Extraire les données de firebase dans une liste d'objet:
    *       [{text: "blablabla", date: AAAA-MM-JJ_HH-MM-SS, type: "message" ou "answer"}, {...}]
    *
    *
    * - Faire une autre collection dans firebase pour les messages.
    *   Mettre les message (ou leur id) dans la collection de chaque utilisateurs.
    *   Il y aurait l'id de l'utilisateur avec chaque message en plus des autres infos (date, type...).
    *   Donc, la page MessagesAdmin écrirerait directement dans les données des autre utilisateurs.
    *
    * - Ecrire reponses directement dans firebase (derniere option)
    * */

    useEffect(() => {
        async function getMessages() {
            const messages = await ReadMessages();
            setMessages(messages);
            setLoading(false);
        }
        getMessages().then();
    },[])

    const handleChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSendMessage = async () => {
        if (inputText !== "") await WriteMessage(inputText);
        setInputText("");
    }

    return (
        <div>
            <LoadingSpinner loading={loading}/>
            <div className="messagesContainer">
                <p className="header">
                    Des questions? Écrivez un message à votre comité organisateur!
                </p>
                    <div className="messages">
                        {
                        messages.map((message) => (
                            <div key={message.id}>
                                <MessageObject message={message}/>
                            </div>
                        ))
                        }
                    </div>

                <Paper
                    component="form"
                    style={{
                        justifyContent: "flex-end",
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        backgroundColor: "rgba(165, 86, 45, 0.7)",
                        color: "white",
                        border: "solid 2px #ffffff",
                        position: "relative"
                    }}
                >
                    <InputBase
                        placeholder="Message..."
                        multiline
                        value={inputText}
                        onChange={handleChange}
                        sx={{
                            color: "white",
                            fontSize: "18px",
                            width: "93%",
                            marginTop: "0.5%",
                            marginLeft: "1.5%",
                            marginRight: "5%",
                    }}
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