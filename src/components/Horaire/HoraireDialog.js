import {useConfirm} from "material-ui-confirm";
import {Button} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as React from "react";
import "./HoraireDialogStyle.css"

export default function HoraireDialog({ title, date, text, icon }) {
    const confirm = useConfirm();

    const handleClick = () => {
        confirm({
            title: title,
            description: text,
            confirmationText: "J'ai compris!",
            hideCancelButton: true,
            dialogProps: {
                maxWidth: "lg",
                fullWidth: true,
                sx: {
                    '& .MuiDialog-paper': {
                        width: '70%',
                        maxHeight: '80vh',
                    }},
            }
        })
            .then(() => {
                //Do nothing
            })
            .catch(() => {
                //Do nothing
            })
    }

    return (
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
    )
}