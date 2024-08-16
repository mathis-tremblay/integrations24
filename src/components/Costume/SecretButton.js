import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {useState} from "react";
import Divider from "@mui/material/Divider";
import * as React from "react";
import {styled} from "@mui/material/styles";
import "../Info/InfoDialogStyle.css"
import {addSecretFound} from "../../utils/costumes";

const OkButton = styled(Button)({
    backgroundColor: "white",
    color: "rgba(85,136,38,0.85)",
    fontSize: 16,
    boxShadow: "none",
    transition: "box-shadow 0.3s ease, background-color 0.3s ease",
    "&:hover": {
        boxShadow: "0 0 0 0 #ffffff",
        backgroundColor: "rgba(85,136,38,0.05)",
    },
});

export default function SecretButton() {
    const [open, setOpen] = useState(false);

    const handleOpen = async () => {
        setOpen(true);
        await addSecretFound();
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="lg"
            >
                <DialogTitle align="center" style={{color: "rgb(43,69,19)",}}>TU AS ÉTÉ CHOISI 🍗</DialogTitle>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Divider sx={{
                        backgroundColor: "rgb(43,69,19)",
                        height: 2,
                        width: "94%",
                    }}/>
                </div>
                <DialogContent style={{paddingLeft: "3%", paddingRight: "3%",maxHeight: '72vh', overflowY: "auto"}}
                               className="scrollbar-style-2">
                    <DialogContentText style={{color: "rgb(43,69,19)"}}>
                        Bravo, cher GelGifois. Tu as retrouvé ma cuisse de poulet que je cherchais ! Pourrais-tu me la
                        rapporter, s'il te plaît ? Pour ce faire, <b>arrive lundi matin avec une cuisse de poulet DANS
                        TA MAIN</b>. Tu auras peut-être droit à une <b>récompense</b> si tu réussis à me la rapporter.
                        Si tu as trouvé cette cuisse de poulet pendant les intégrations, apporte-la-moi quand même.
                        Combattre des Nazgûls donne faim...
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <OkButton onClick={handleClose} color="primary" variant="contained">
                        J'ai compris!
                    </OkButton>
                </DialogActions>
            </Dialog>
            <Button sx={{fontSize: {md: 20, xs: 15}, p: 0, marginTop: "2vh", marginRight: "75vw"}}
                onClick={handleOpen}
                    open={open}
            >
                🍗
            </Button>
        </div>
    )
}