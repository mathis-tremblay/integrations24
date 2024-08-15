import BowIcon from "../../../images/bow_icon.png"
import List from "@mui/material/List";
import {ListItem, ListItemIcon, ListItemText} from "@mui/material";
import "../CostumePageStyle.css"
import ScriptElf from "../../../images/script_elf.png";


export default function ElfCostume() {

    return (
        <List>
            <ListItem disableGutters>
                <ListItemIcon>
                    <img src={BowIcon}
                         alt={""}
                         style={{width: '40px', height: '40px'}}
                    />
                </ListItemIcon>
                <ListItemText>
                    <div className="CostumeDialog">
                        Des longs cheveux (perruque ou pas).
                    </div>
                </ListItemText>
            </ListItem>
            <ListItem disableGutters>
                <ListItemIcon>
                    <img src={BowIcon}
                         alt={""}
                         style={{width: '40px', height: '40px'}}
                    />
                </ListItemIcon>
                <ListItemText>
                    <div className="CostumeDialog">
                        Un arc de la forme y = cos(x)+1 {'(-4<x<4)'}
                    </div>
                </ListItemText>
            </ListItem>
            <ListItem disableGutters>
                <ListItemIcon>
                    <img src={BowIcon}
                         alt={""}
                         style={{width: '40px', height: '40px'}}
                    />
                </ListItemIcon>
                <ListItemText>
                    <div className="CostumeDialog">
                        Des oreilles pointues.
                    </div>
                </ListItemText>
            </ListItem>
            <ListItem disableGutters>
                <ListItemIcon>
                    <img src={BowIcon}
                         alt={""}
                         style={{width: '40px', height: '40px'}}
                    />
                </ListItemIcon>
                <ListItemText>
                    <div className="CostumeDialog">
                        Un collier magique fait avec 30 goupilles de canettes minimum.
                    </div>
                </ListItemText>
            </ListItem>
            <ListItem disableGutters>
                <ListItemIcon>
                    <img src={BowIcon}
                         alt={""}
                         style={{width: '40px', height: '40px'}}
                    />
                </ListItemIcon>
                <ListItemText>
                    <div className="CostumeDialog">
                        Une cape de couleur 5.5±0.5% MΩ (indice : regarde les couleurs...) avec le motif produit par ce
                        script python:
                    </div>
                </ListItemText>
            </ListItem>
            <img src={ScriptElf}
                 alt={""}
                 style={{width: '50vw', height: '20vw', marginLeft: "5vw"}}
            />
            <ListItem disableGutters>
                <ListItemIcon>
                    <img src={BowIcon}
                         alt={""}
                         style={{width: '40px', height: '40px'}}
                    />
                </ListItemIcon>
                <ListItemText>
                    <div className="CostumeDialog">
                        Une pièce de vêtement en cuir brun ou noir.
                    </div>
                </ListItemText>
            </ListItem>
        </List>
    )
}