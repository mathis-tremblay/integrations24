import DaggersIcon from "../../images/daggers_icon.png"
import List from "@mui/material/List";
import {ListItem, ListItemIcon, ListItemText} from "@mui/material";
import "./CostumePageStyle.css"


export default function HobbitCostume() {

    return (
        <List>
            <ListItem>
                <ListItemIcon>
                    <img src={DaggersIcon}
                         alt={""}
                         style={{width: '40px', height: '40px'}}
                    />
                </ListItemIcon>
                <ListItemText>
                    <div className="CostumeDialog">
                        Une chemise rentré dans les pantalons de couleur 99±1% GΩ.
                    </div>
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <img src={DaggersIcon}
                         alt={""}
                         style={{width: '40px', height: '40px'}}
                    />
                </ListItemIcon>
                <ListItemText>
                    <div className="CostumeDialog">
                        Des pantalons ¾. La longueur entre le pantalon et le soulier doit être, en cm, de
                        3u(t)+3/2r(t+1) à t=4.
                    </div>
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <img src={DaggersIcon}
                         alt={""}
                         style={{width: '40px', height: '40px'}}
                    />
                </ListItemIcon>
                <ListItemText>
                    <div className="CostumeDialog">
                        Une veste pour pas avoir froid en traversant le Mordor.
                    </div>
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <img src={DaggersIcon}
                         alt={""}
                         style={{width: '40px', height: '40px'}}
                    />
                </ListItemIcon>
                <ListItemText>
                    <div className="CostumeDialog">
                        Des sandales avec du poil sur les pieds de 5cm.
                    </div>
                </ListItemText>
            </ListItem>
            <ListItem>
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
            <ListItem>
                <ListItemIcon>
                    <img src={DaggersIcon}
                         alt={""}
                         style={{width: '40px', height: '40px'}}
                    />
                </ListItemIcon>
                <ListItemText>
                    <div className="CostumeDialog">
                        Une sacoche. Elle doit contenir une tranche de pain, une lampe de poche, et une quote
                        d'Innoncent en HEX :
                        <em> Je n'en dirai pas plus, il faut quand même que ceux qui ont A+ méritent leur note!</em>
                    </div>
                </ListItemText>
            </ListItem>
        </List>
    )
}