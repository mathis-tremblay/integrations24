import {appConsts} from "../../appCfg/appConsts";
import {Button} from '@mui/material';
import "./MainStyle.css"
import React from "react";
import {useNavigate} from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import SideBar from "./SideBar";


export default function MainApp() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate(appConsts.routerPaths.login);
    }

    return (
        <div className="main">


            <SideBar/>

            <Button
                color="inherit"
                onClick={handleLogout}
                startIcon={<LogoutIcon sx={{marginLeft: 2}}/>}
                sx={{ marginLeft: 'auto',
                    marginRight: 0.5,
                    marginTop: 0.5,
                    backgroundColor: 'transparent',
                    '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    },
                    borderRadius: '50%',
                    width: 45,
                    height: 55,
                    position: 'fixed', // Add this
                    top: 0, // And this
                    right: 0,
                }}
            />
        </div>
    )

}