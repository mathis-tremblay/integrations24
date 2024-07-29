import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import "./InfoDialogStyle.css"
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import * as React from "react";

export default function InfoDialog({ title, desc, text, icon }) {
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
                    <div className="desc">{desc}</div>
                    <div className="arrow"><ChevronRightIcon/></div>
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
                    <Button onClick={handleClose} color={"primary"} variant="contained"
                            className="OkButton"
                            >
                        J'ai compris!
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}