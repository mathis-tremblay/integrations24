import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as React from "react";
import "./HorairePageStyle.css"
import {styled} from "@mui/material/styles";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
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
const ParticipatingButton = styled(Button)({
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

export default function HoraireDialog({ title, date, text, icon, participating, handleParticipatingChange, day }) {
    const [openDialog, setOpenDialog] = React.useState(false);

    const handleClick = () => {
        setOpenDialog(true);
    }

    const handleClose = () => {
        setOpenDialog(false);
    }

    const handleParticipatingClick = async () => {
        await handleParticipatingChange(!participating, day);
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
                        margin: "3vh"
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
                <DialogTitle style={{marginLeft: "1%", color: "rgb(43,69,19)",}}>{title}</DialogTitle>
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
                    <ParticipatingButton onClick={handleParticipatingClick}>
                        {participating ?
                            <StarIcon style={{marginRight: "4px", marginBottom: "4px"}}/> :
                            <StarBorderIcon style={{marginRight: "4px", marginBottom: "4px"}}/>
                        }
                        Je participe
                    </ParticipatingButton>
                    <OkButton onClick={handleClose} color="primary" variant="contained">
                        J'ai compris!
                    </OkButton>
                </DialogActions>
            </Dialog>
        </div>
    )
}