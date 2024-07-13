import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import * as React from 'react';
import {styled} from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import {appConsts} from "../../appCfg/appConsts";
import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import MenuIcon from '@mui/icons-material/Menu';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import ChatIcon from '@mui/icons-material/Chat';

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        height: '100vh',
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: 230,
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
    const [tab, setTab] = useState("")
    const navigate = useNavigate();
    const [open, setOpen] = useState(true);

    const toggleDrawer = () => {
        setOpen(!open);
    };

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
                navigate(appConsts.routerPaths.home.messages);
                return;
            default:
                return;
        }
    }

    return (
        <Drawer variant='permanent' open={open}>
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
                        <ChevronLeftIcon />
                    </IconButton>
                    :
                    <IconButton onClick={() => toggleDrawer()} sx={{ justifyContent: { xs: 'center', sm: 'flex-end' }}}>
                        <MenuIcon sx={{ fontSize: '1.8rem' }} />
                    </IconButton>
                }
            </Toolbar>
            <Divider />

            <List component='nav' sx={{ py: 0 }} value={tab}>
                <ListItemButton
                    onClick={(event) => handleTabChange(event, appConsts.menus.infos)}
                >
                    <ListItemIcon>
                        <InfoIcon />
                    </ListItemIcon>
                    <ListItemText primary={appConsts.menus.infos} primaryTypographyProps={{ sx: { fontSize: '1.4rem' } }} />
                </ListItemButton>

                <ListItemButton
                    onClick={(event) => handleTabChange(event, appConsts.menus.horaire)}
                >
                    <ListItemIcon>
                        <DateRangeIcon/>
                    </ListItemIcon>
                    <ListItemText primary={appConsts.menus.horaire} primaryTypographyProps={{ sx: { fontSize: '1.4rem' } }}/>
                </ListItemButton>

                <ListItemButton
                    onClick={(event) => handleTabChange(event, appConsts.menus.costume)}
                >
                    <ListItemIcon>
                        <CheckroomIcon/>
                    </ListItemIcon>
                    <ListItemText primary={appConsts.menus.costume} primaryTypographyProps={{ sx: { fontSize: '1.4rem' } }}/>
                </ListItemButton>

                <ListItemButton
                    onClick={(event) => handleTabChange(event, appConsts.menus.messages)}
                >
                    <ListItemIcon>
                        <ChatIcon/>
                    </ListItemIcon>
                    <ListItemText primary={appConsts.menus.messages} primaryTypographyProps={{ sx: { fontSize: '1.4rem' } }}/>
                </ListItemButton>

                <Divider/>
            </List>
        </Drawer>
    );
};

export default SideBar;