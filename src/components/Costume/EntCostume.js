import HelmetIcon from "../../images/helmet_icon.png"
import List from "@mui/material/List";
import {ListItem, ListItemIcon, ListItemText} from "@mui/material";


export default function EntCostume() {

    return (
        <List>
            <ListItem>
                <ListItemIcon>
                    <img src={HelmetIcon}
                         alt={""}
                         style={{width: '40px', height: '40px'}}
                    />
                </ListItemIcon>
                <ListItemText>
                    Une chemise rentré dans les pantalons de couleur 99±1% GΩ.
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <img src={HelmetIcon}
                         alt={""}
                         style={{width: '40px', height: '40px'}}
                    />
                </ListItemIcon>
                <ListItemText>
                    Une veste pour pas avoir froid en traversant le Mordor.
                </ListItemText>
            </ListItem>
        </List>
    )
}