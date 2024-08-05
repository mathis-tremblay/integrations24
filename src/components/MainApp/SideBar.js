import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import * as React from 'react';
import {styled} from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import {appConsts} from "../../appCfg/appConsts";
import {ListItemButton, ListItemIcon, ListItemText, useMediaQuery} from "@mui/material";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import MenuIcon from '@mui/icons-material/Menu';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import ChatIcon from '@mui/icons-material/Chat';
import LogoutIcon from "@mui/icons-material/Logout";
import {useMain} from "../../reactHooks/MainContext";

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        height: '100vh',
        '& .MuiDrawer-paper': {
            color: "white",
            backgroundColor: 'rgba(62,99,27,0.95)',
            position: 'relative',
            whiteSpace: 'nowrap',
            width: 240,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9)
                }
            })
        }
    })
);

const SideBar = () => {
    // Define the breakpoint below which the Toolbar will be hidden
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    const main = useMain();

    const admin = main.admin;
    const [open, setOpen] = useState(false);
    const [tab, setTab] = useState("")

    const navigate = useNavigate();

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const handleLogout = () => {
        navigate(appConsts.routerPaths.login);
    }

    const handleTabChange = (event, newValue) => {
        setTab(newValue)
        switch (newValue){
            case (appConsts.menus.infos):
                navigate(appConsts.routerPaths.home.info);
                return;
            case (appConsts.menus.horaire):
                navigate(appConsts.routerPaths.home.horaire);
                return;
            case (appConsts.menus.costume):
                navigate(appConsts.routerPaths.home.costume);
                return;
            case (appConsts.menus.messages):
                admin ?
                    navigate(appConsts.routerPaths.home.messagesAdmin)
                    :
                    navigate(appConsts.routerPaths.home.messages);
                return;
            default:
                return;
        }
    }

    return (
        <Drawer variant='permanent' open={open}>
            {!isSmallScreen ?
                <>
                    <Toolbar
                        variant={"dense"}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            flex: '0 0 auto',
                            ml: {xs: 4.35, sm: 3.35}
                        }}
                    >
                        {open ?
                            <IconButton onClick={() => toggleDrawer()} sx={{mr:-2.5}}>
                                <ChevronLeftIcon sx={{"color": "white"}}/>
                            </IconButton>
                            :
                            <IconButton onClick={() => toggleDrawer()} sx={{ justifyContent: { xs: 'center', sm: 'flex-end' }}}>
                                <MenuIcon sx={{ fontSize: '1.8rem', "color": "white" }} />
                            </IconButton>
                        }
                    </Toolbar>
                    <Divider sx={{"backgroundColor": "white", "height": 3}}/>
                </>
                :
                null
            }


            <List component='nav' sx={{ py: 0 }} value={tab}>
                <ListItemButton
                    onClick={(event) => handleTabChange(event, appConsts.menus.infos)}
                >
                    <ListItemIcon>
                        <InfoIcon sx={{"color": "white"}}/>
                    </ListItemIcon>
                    <ListItemText primary={appConsts.menus.infos} primaryTypographyProps={{ sx: { fontSize: '1.3rem' } }} />
                </ListItemButton>

                <ListItemButton
                    onClick={(event) => handleTabChange(event, appConsts.menus.horaire)}
                >
                    <ListItemIcon>
                        <DateRangeIcon sx={{"color": "white"}}/>
                    </ListItemIcon>
                    <ListItemText primary={appConsts.menus.horaire} primaryTypographyProps={{ sx: { fontSize: '1.3rem' } }}/>
                </ListItemButton>

                <ListItemButton
                    onClick={(event) => handleTabChange(event, appConsts.menus.costume)}
                >
                    <ListItemIcon>
                        <CheckroomIcon sx={{"color": "white"}}/>
                    </ListItemIcon>
                    <ListItemText primary={appConsts.menus.costume} primaryTypographyProps={{ sx: { fontSize: '1.3rem' } }}/>
                </ListItemButton>

                <ListItemButton
                    onClick={(event) => handleTabChange(event, appConsts.menus.messages)}
                >
                    <ListItemIcon>
                        <ChatIcon sx={{"color": "white"}}/>
                    </ListItemIcon>
                    <ListItemText primary={appConsts.menus.messages} primaryTypographyProps={{ sx: { fontSize: '1.3rem' } }}/>
                </ListItemButton>
                <Divider  sx={{"backgroundColor": "white", "height": 3}}/>
                <ListItemButton
                    onClick={handleLogout}
                >
                    <ListItemIcon>
                        <LogoutIcon sx={{"marginLeft": 0.2, "color": "white"}}/>
                    </ListItemIcon>
                    <ListItemText primary={"Se déconnecter"} primaryTypographyProps={{ sx: { fontSize: '1.3rem' } }}/>

                </ListItemButton>

                <Divider  sx={{"backgroundColor": "white", "height": 3}}/>
            </List>
        </Drawer>
    );
};

export default SideBar;