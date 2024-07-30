import List from "@mui/material/List";
import {ListItem, ListItemIcon, ListItemText} from "@mui/material";
import "../CostumePageStyle.css"
import ParkIcon from '@mui/icons-material/Park';


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
                        De l'écorce collé sur la face.
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
                        Un chandail brun, vert et/ou camo.
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
                        Un pantalon de couleur 110±1% Ω.
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
                        Le nom de votre asso étudiante écrit sur le chandail en hexadécimal.
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
                        Des brindilles collées sur votre chandail. Il doit y en avoir un nombre de 3u(t) + 3/2r(t+1) à t=3.
                    </div>
                </ListItemText>
            </ListItem>
        </List>
    )
}