import {Button} from "@mui/material";
import "./InfoDialogStyle.css"
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import * as React from "react";
import {useConfirm} from 'material-ui-confirm';

export default function InfoDialog({ title, desc, text, icon }) {
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
                    backgroundColor: 'rgba(255,196,152,0.69)',
                    color: 'black',
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
    )
}