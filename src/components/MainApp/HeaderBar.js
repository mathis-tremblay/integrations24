import {Box, Tab} from "@mui/material";
import {TabContext, TabList} from "@mui/lab";
import {appConsts} from "../../appCfg/appConsts";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";


export default function HeaderBar() {
    const tabSx = {fontSize: '1.40rem', textTransform: 'capitalize'}
    const [tab, setTab] = useState("");
    const navigate = useNavigate();

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
                    <Tab label={"Infos"}
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

                </TabList>


            </Box>

        </TabContext>
    )
}