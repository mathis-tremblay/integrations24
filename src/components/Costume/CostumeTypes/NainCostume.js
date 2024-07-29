import HelmetIcon from "../../../images/helmet_icon.png"
import List from "@mui/material/List";
import {ListItem, ListItemIcon, ListItemText} from "@mui/material";
import "../CostumePageStyle.css"


export default function NainCostume() {

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
                    <div className="CostumeDialog">
                        Une casserole comme casque. Sur le dessus, dessine en porte logique la fonction S=A∧(B∨C).
                    </div>
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
                    <div className="CostumeDialog">
                        Une longue barbe de 30cm.
                    </div>
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
                    <div className="CostumeDialog">
                        Des mitaines de four.
                    </div>
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
                    <div className="CostumeDialog">
                        Une hache ou un marteau fait en canette. Le manche doit être de longueur 1x10^12 picomètre.
                    </div>
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
                    <div className="CostumeDialog">
                        Une grosse ceinture de couleur 110±1% Ω
                    </div>
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
                    <div className="CostumeDialog">
                        Une paire de short trop courte.
                    </div>
                </ListItemText>
            </ListItem><ListItem>
            <ListItemIcon>
                <img src={HelmetIcon}
                     alt={""}
                     style={{width: '40px', height: '40px'}}
                />
            </ListItemIcon>
            <ListItemText>
                <div className="CostumeDialog">
                    Des grosses bottes.
                </div>
            </ListItemText>
        </ListItem>
        </List>
    )
}