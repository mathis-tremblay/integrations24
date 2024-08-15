import DaggersIcon from "../../../images/daggers_icon.png"
import List from "@mui/material/List";
import {ListItem, ListItemIcon, ListItemText} from "@mui/material";
import "../CostumePageStyle.css"


export default function HobbitCostume() {

    return (
        <List>
            <ListItem disableGutters>
                <ListItemIcon>
                    <img src={DaggersIcon}
                         alt={""}
                         style={{width: '40px', height: '40px'}}
                    />
                </ListItemIcon>
                <ListItemText>
                    <div className="CostumeDialog">
                        Une chemise (elle doit être rentré dans les pantalons) de couleur (99±1%)GΩ (indice : code de
                        couleurs des résistances).
                    </div>
                </ListItemText>
            </ListItem>
            <ListItem disableGutters>
                <ListItemIcon>
                    <img src={DaggersIcon}
                         alt={""}
                         style={{width: '40px', height: '40px'}}
                    />
                </ListItemIcon>
                <ListItemText>
                    <div className="CostumeDialog">
                        Des pantalons  ¾ : la longueur entre le pantalon et la cheville doit être de 3u(t) +3/2r(t+1) à
                        t = 4, en cm (indice : échellon, rampe).
                    </div>
                </ListItemText>
            </ListItem>
            <ListItem disableGutters>
                <ListItemIcon>
                    <img src={DaggersIcon}
                         alt={""}
                         style={{width: '40px', height: '40px'}}
                    />
                </ListItemIcon>
                <ListItemText>
                    <div className="CostumeDialog">
                        Une veste pour pas avoir froid en traversant le mordor. Affiche les symboles d’une résistance,
                        d’un condensateur, d’un inducteur, et d’un transistor Mosfet PNP.
                    </div>
                </ListItemText>
            </ListItem>
            <ListItem disableGutters>
                <ListItemIcon>
                    <img src={DaggersIcon}
                         alt={""}
                         style={{width: '40px', height: '40px'}}
                    />
                </ListItemIcon>
                <ListItemText>
                    <div className="CostumeDialog">
                        Des sandales avec du poil sur les pieds de 8cm.
                    </div>
                </ListItemText>
            </ListItem>
            <ListItem disableGutters>
                <ListItemIcon>
                    <img src={DaggersIcon}
                         alt={""}
                         style={{width: '40px', height: '40px'}}
                    />
                </ListItemIcon>
                <ListItemText>
                    <div className="CostumeDialog">
                        Une pipe pour fumer comme ton grand-père.
                    </div>
                </ListItemText>
            </ListItem>
            <ListItem disableGutters>
                <ListItemIcon>
                    <img src={DaggersIcon}
                         alt={""}
                         style={{width: '40px', height: '40px'}}
                    />
                </ListItemIcon>
                <ListItemText>
                    <div className="CostumeDialog">
                        Une sacoche avec à l’intérieur une tranche de pain, une lampe de poche, 30 goupilles de
                        cannettes et l’incroyable quote : “<em>Je n’en dirai pas plus, il faut quand même que ceux qui ont
                        A+ méritent leur note!</em>”.
                    </div>
                </ListItemText>
            </ListItem>
        </List>
    )
}