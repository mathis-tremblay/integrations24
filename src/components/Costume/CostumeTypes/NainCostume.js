import HelmetIcon from "../../../images/helmet_icon.png"
import List from "@mui/material/List";
import {ListItem, ListItemIcon, ListItemText} from "@mui/material";
import "../CostumePageStyle.css"
import CircuitNain from "../../../images/circuit_nain.png";


export default function NainCostume() {

    return (
        <List>
            <ListItem disableGutters>
                <ListItemIcon>
                    <img src={HelmetIcon}
                         alt={""}
                         style={{width: '40px', height: '40px'}}
                    />
                </ListItemIcon>
                <ListItemText>
                    <div className="CostumeDialog">
                        Un casque de métal (casserole, papier d'aluminium, soyez créatifs). Sur le dessus, dessine en
                        porte logique la fonction S = A∧(B∨C).
                    </div>
                </ListItemText>
            </ListItem>
            <ListItem disableGutters>
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
            <ListItem disableGutters>
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
            <ListItem disableGutters>
                <ListItemIcon>
                    <img src={HelmetIcon}
                         alt={""}
                         style={{width: '40px', height: '40px'}}
                    />
                </ListItemIcon>
                <ListItemText>
                    <div className="CostumeDialog">
                        Une hache ou un marteau fait en canettes. Le manche en bois doit être de longueur (en cm)
                        égale au courant (en mA) qui passe dans R3 quand t -> infini (aucunes conditions initiales):
                        <br/>

                    </div>
                </ListItemText>
            </ListItem>
            <img src={CircuitNain}
                            alt={""}
                            style={{width: '50vw', height: '30vw', marginLeft: "5vw"}}
            />
            <ListItem disableGutters>
                <ListItemIcon>
                    <img src={HelmetIcon}
                         alt={""}
                         style={{width: '40px', height: '40px'}}
                    />
                </ListItemIcon>
                <ListItemText>
                    <div className="CostumeDialog">
                        Une grosse ceinture de couleur (110±1%)Ω (indice : code de couleurs des résistances)
                    </div>
                </ListItemText>
            </ListItem>
            <ListItem disableGutters>
                <ListItemIcon>
                    <img src={HelmetIcon}
                         alt={""}
                         style={{width: '40px', height: '40px'}}
                    />
                </ListItemIcon>
                <ListItemText>
                    <div className="CostumeDialog">
                        Une paire de shorts trop courts
                    </div>
                </ListItemText>
            </ListItem>
            <ListItem disableGutters>
                <ListItemIcon>
                    <img src={HelmetIcon}
                         alt={""}
                         style={{width: '40px', height: '40px'}}
                    />
                </ListItemIcon>
                <ListItemText>
                    <div className="CostumeDialog">
                        Une paire de bottes trop grandes
                    </div>
                </ListItemText>
            </ListItem>
        </List>
    )
}