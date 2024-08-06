import { styled } from "@mui/material/styles";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import * as React from "react";
import "./InfoDialogStyle.css";
import Divider from "@mui/material/Divider";

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

export default function InfoDialog({ title, desc, text, icon }) {
    const [openDialog, setOpenDialog] = React.useState(false);

    const handleClick = () => {
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
    };

    return (
        <div>
            <Button variant="contained"
                    size="small"
                    color="primary"
                    onClick={handleClick}
                    style={{
                        width: "80%",
                        backgroundColor: 'rgba(85,136,38,0.85)',
                        color: 'white',
                        textTransform: 'none',
                        margin: "4vh",
                        minWidth: "275px",
                    }}
            >
                <div className="grid">
                    <div className="icon">{icon}</div>
                    <div className="title">{title}</div>
                    <div className="desc">{desc}</div>
                    <div className="arrow"><ChevronRightIcon /></div>
                </div>
            </Button>
            <Dialog
                open={openDialog}
                onClose={handleClose}
                maxWidth="lg"
            >
                <DialogTitle align="center" style={{color: "rgb(43,69,19)",}}>{title}</DialogTitle>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Divider sx={{
                        backgroundColor: "rgb(43,69,19)",
                        height: 2,
                        width: "94%",
                    }}/>
                </div>
                <DialogContent style={{paddingLeft: "3%", paddingRight: "3%",}}>
                    <DialogContentText style={{color: "rgb(43,69,19)"}}>
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
    );
}
