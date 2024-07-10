import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {appConsts} from "../../appCfg/appConsts";
import {TabContext, TabList, TabPanel} from '@mui/lab';
import {Box, Button, Divider, Grid, IconButton, Paper, Tab} from '@mui/material';
import "./MainStyle.css"
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const tabSx = {fontSize: '1.40rem', textTransform: 'capitalize'}

export default function MainApp() {
    const [tab, setTab] = useState("");
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate(appConsts.routerPaths.login);
    }

    const handleTabChange = (event, newValue) => {
        setTab(newValue)
        switch (newValue){
            case ("Infos"):
                navigate(appConsts.routerPaths.home.info);
                return;
            case ("Horaire"):
                navigate(appConsts.routerPaths.home.horaire);
                return;
            case ("Costume"):
                navigate(appConsts.routerPaths.home.costume);
                return;
            case ("Messages"):
                navigate(appConsts.routerPaths.home.messages);
                return;
            default:
                return;
        }
    }

    return (
        <div className="main">
            <TabContext value={tab}>
                <Box sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    m: 0,
                    p: 0,
                }}>
                    <TabList onChange={handleTabChange} variant={'scrollable'} scrollButtons>
                        <Tab label={"Infos importantes"}
                             value={"Infos"}
                             sx={tabSx}
                        />
                        <Tab label={"Horaire"}
                             value={"Horaire"}
                             sx={tabSx}
                        />
                        <Tab label={"Costume"}
                             value={"Costume"}
                             sx={tabSx}
                        />
                        <Tab label={"Messages"}
                             value={"Messages"}
                             sx={tabSx}
                        />
                        <Divider
                            orientation='vertical'
                            style={{height: 30, alignSelf: 'center', width: 1, backgroundColor: '#808080'}}
                        />
                        <Tab value={"Params"}
                             sx={tabSx}
                             icon={<SettingsIcon/>}
                             iconPosition={'start'}
                        />

                    </TabList>
                    <Button
                        color="inherit"
                        onClick={handleLogout}
                        startIcon={<LogoutIcon sx={{marginLeft: 2}}/>}
                        sx={{ marginLeft: 'auto',
                            marginRight: 2,
                            backgroundColor: 'transparent',
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                            },
                            borderRadius: '50%',
                            width: 50,
                            height: 50,
                    }}
                    />

                </Box>

            </TabContext>
        </div>
    )

}