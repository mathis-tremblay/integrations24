import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as React from "react";
import "./HoraireDialogStyle.css"
import {styled} from "@mui/material/styles";

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

export default function HoraireDialog({ title, date, text, icon }) {
    //TODO: Boutons 'Je participe' et 'Quoi apporter'
    const [openDialog, setOpenDialog] = React.useState(false);

    const handleClick = () => {
        setOpenDialog(true);
    }

    const handleClose = () => {
        setOpenDialog(false);
    }

    return (
        <div>
            <Button variant={'contained'}
                    size={'small'}
                    color={'primary'}
                    onClick={handleClick}
                    style={{
                        width: "80%",
                        backgroundColor: 'rgba(85,136,38,0.85)',
                        color: 'white',
                        textTransform: 'none',
                        margin: 30
                    }}
            >
                <div className="grid">
                    <div className="icon">{icon}</div>
                    <div className="title">{title}</div>
                    <div className="date">{date}</div>
                    <div className="arrow"><ExpandMoreIcon/></div>
                </div>
            </Button>
            <Dialog
                open={openDialog}
                onClose={handleClose}
                maxWidth="lg"
                fullWidth
                style={{
                    '& .MuiDialog-paper': {
                        width: '70%',
                        maxHeight: '80vh',
                    }
                }}
            >
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {text}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <OkButton onClick={handleClose} color="primary" variant="contained">
                        J'ai compris!
                    </OkButton>
                </DialogActions>
            </Dialog>
        </div>
    )
}