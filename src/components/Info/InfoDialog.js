import { styled } from "@mui/material/styles";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import * as React from "react";
import "./InfoDialogStyle.css";
import Divider from "@mui/material/Divider";
import Bienvenue from "../../images/bienvenue.png";

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

export default function InfoDialog({ title, desc, text, icon, bienvenue }) {
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

                {bienvenue ?
                    <Dialog
                        open={openDialog}
                        onClose={handleClose}
                        maxWidth="lg"
                        style={{color: "rgb(0,0,0)"}}
                        scroll={"body"}
                    >
                        <DialogContent
                            style={{maxHeight: '80vh', overflowY: "auto", backgroundColor: "rgb(0,0,0)", padding: 0}}
                            className="scrollbar-style-1"
                        >
                                <img src={Bienvenue}
                                     alt={""}
                                     style={{
                                         width: '100%', height: '100%', p: 0
                                     }}
                                />
                        </DialogContent>
                        <DialogActions sx={{backgroundColor: "black"}}>
                            <OkButton onClick={handleClose} variant="contained"
                                      sx={{backgroundColor: "black", color: "rgb(189,150,51)"}}
                            >
                                J'ai compris!
                            </OkButton>
                        </DialogActions>
                    </Dialog>
                    :
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
                        <DialogContent style={{paddingLeft: "3%", paddingRight: "3%",maxHeight: '72vh', overflowY: "auto"}} className="scrollbar-style-2">
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
                }
        </div>
    );
}
