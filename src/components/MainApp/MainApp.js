import {appConsts} from "../../appCfg/appConsts";
import {Box, Button} from '@mui/material';
import "./MainStyle.css"
import React from "react";
import {Outlet, useNavigate} from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import SideBar from "./SideBar";

export default function MainApp() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate(appConsts.routerPaths.login);
    }

    return (
        <Box sx={{display: "flex"}}>
            <SideBar/>
            <Box
                component="main"
                sx={{flexGrow: 1, px: 6.5, py: 3}}
            >

                <div style={{flex: 1,}}>
                    <Outlet/>
                </div>

                <Button
                    color="inherit"
                    onClick={handleLogout}
                    startIcon={<LogoutIcon sx={{marginLeft: 2}}/>}
                    sx={{
                        marginLeft: 'auto',
                        marginRight: 0.5,
                        marginTop: 0.5,
                        backgroundColor: 'transparent',
                        '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.04)',
                        },
                        borderRadius: '50%',
                        width: 45,
                        height: 55,
                        position: 'fixed',
                        top: 0,
                        right: 0,
                    }}
                />
            </Box>
        </Box>
    );
}