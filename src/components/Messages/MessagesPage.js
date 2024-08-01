import {InputBase, Paper, TextField} from "@mui/material";
import LoadingSpinner from "../LoadingSpinner";
import {useState} from "react";
import "./MessagesPageStyle.css"
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SendIcon from '@mui/icons-material/Send';
import {WriteMessage} from "../../utils/messages";


export default function MessagesPage () {
    const [loading, setLoading] = useState(false);
    const [inputText, setInputText] = useState("");

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

    const handleChange = (event) => {
        setInputText(event.target.value);
    };


    const handleSendMessage = async () => {
        if (inputText !== "") await WriteMessage(inputText);

    }

    return (
        <div>
            <LoadingSpinner loading={loading}/>
            <div className="messagesContainer">
                <Paper
                    component="form"
                    style={{
                        position: "absolute",
                        alignItems: "center",
                        bottom: "5%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "95%",
                        backgroundColor: "rgba(165, 86, 45, 0.7)",
                        color: "white",
                        border: "solid 2px #ffffff"
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
                            width: "95%",
                            marginTop: "0.5%",
                            marginLeft: "1.5%",
                            marginRight: "5%",
                    }}
                    />
                    <IconButton color="primary"
                                sx={{position: "absolute", right: "0", bottom: "1%"}}
                                onClick={handleSendMessage}
                    >
                        <SendIcon />
                    </IconButton>
                </Paper>
            </div>
        </div>
    )
}