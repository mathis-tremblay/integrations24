import List from "@mui/material/List";
import {ListItem, ListItemIcon, ListItemText} from "@mui/material";
import "../CostumePageStyle.css"
import ParkIcon from '@mui/icons-material/Park';
import ScriptEnt from "../../../images/script_ent.png"


export default function EntCostume() {

    return (
        <List>
            <ListItem disableGutters>
                <ListItemIcon>
                    <ParkIcon
                        style={{width: '40px', height: '40px', color: 'white'}}
                    />
                </ListItemIcon>
                <ListItemText>
                    <div className="CostumeDialog">
                        Une branche d'arbre dans une main.
                    </div>
                </ListItemText>
            </ListItem>
            <ListItem disableGutters>
                <ListItemIcon>
                    <ParkIcon
                        style={{width: '40px', height: '40px', color: 'white'}}
                    />
                </ListItemIcon>
                <ListItemText>
                    <div className="CostumeDialog">
                        Des feuilles d'arbre collées sur un chapeau sur la tête.
                    </div>
                </ListItemText>
            </ListItem>
            <ListItem disableGutters>
                <ListItemIcon>
                    <ParkIcon
                        style={{width: '40px', height: '40px', color: 'white'}}
                    />
                </ListItemIcon>
                <ListItemText>
                    <div className="CostumeDialog">
                        De l'écorce sur la face.
                    </div>
                </ListItemText>
            </ListItem>
            <ListItem disableGutters>
                <ListItemIcon>
                    <ParkIcon
                        style={{width: '40px', height: '40px', color: 'white'}}
                    />
                </ListItemIcon>
                <ListItemText>
                    <div className="CostumeDialog">
                        Un chandail brun/vert/camo avec le nom (abréviation) de votre association étudiante traduit en
                        ASCII hexadécimal écrit à l’avant.
                    </div>
                </ListItemText>
            </ListItem>
            <ListItem disableGutters>
                <ListItemIcon>
                    <ParkIcon
                        style={{width: '40px', height: '40px', color: 'white'}}
                    />
                </ListItemIcon>
                <ListItemText>
                    <div className="CostumeDialog">
                        Le motif affiché par ce programme C++ dessiné dans le dos du chandail:
                    </div>
                </ListItemText>
            </ListItem>
            <img src={ScriptEnt}
                 alt={""}
                 style={{width: '40vw', height: '40vw', marginLeft: "5vw"}}
            />
            <ListItem disableGutters>
                <ListItemIcon>
                    <ParkIcon
                        style={{width: '40px', height: '40px', color: 'white'}}
                    />
                </ListItemIcon>
                <ListItemText>
                    <div className="CostumeDialog">
                        Pantalon long de couleur (110±1%)Ω  (indice : code de couleurs des résistances).
                    </div>
                </ListItemText>
            </ListItem>
            <ListItem disableGutters>
                <ListItemIcon>
                    <ParkIcon
                        style={{width: '40px', height: '40px', color: 'white'}}
                    />
                </ListItemIcon>
                <ListItemText>
                    <div className="CostumeDialog">
                        Des brindilles collées sur votre chandail. Il doit y en avoir un nombre de 3u(t) + 3/2r(t+1) à
                        t=3 (indice : échellon, rampe).
                    </div>
                </ListItemText>
            </ListItem>
        </List>
    )
}