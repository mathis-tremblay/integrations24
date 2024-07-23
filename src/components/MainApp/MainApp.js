import {Box} from '@mui/material';
import "./MainStyle.css"
import React from "react";
import {Outlet} from "react-router-dom";
import SideBar from "./SideBar";

export default function MainApp() {
    return (
        <Box sx={{display: "flex"}}>
            <SideBar/>
            <Box
                component="main"
                sx={{flexGrow: 1, px: 2, py: 3}}
            >

                <div style={{flex: 1,}}>
                    <Outlet/>
                </div>
            </Box>
        </Box>
    );
}