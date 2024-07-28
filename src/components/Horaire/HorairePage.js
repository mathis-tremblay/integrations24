import HoraireDialog from "./HoraireDialog";
import ChestIcon from "../../images/chest_icon.png"
import PotionIcon from "../../images/potion_icon.png"
import HelmetIcon from "../../images/helmet_icon.png"
import BookIcon from "../../images/book_icon.png"
import DaggersIcon from "../../images/daggers_icon.png"


export default function HorairePage () {

    return (
        <div style={{
            display: 'inline',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
            boxSizing: 'border-box',

        }}>
            <HoraireDialog
                title={"Activités et Ptite Gre"}
                date={"02/09/2024"}
                icon={<img src={HelmetIcon}
                           alt={""}
                           style={{ width: '60px', height: '60px'}}
                />}
                text={"Test"}
            />
            <HoraireDialog
                title={"Rally appart"}
                date={"03/09/2024"}
                icon={<img src={DaggersIcon}
                           alt={""}
                           style={{ width: '60px', height: '60px'}}
                />}
                text={"Test"}
            />
            <HoraireDialog
                title={"Ptite soirée relax"}
                date={"04/09/2024"}
                icon={<img src={BookIcon}
                           alt={""}
                           style={{ width: '60px', height: '60px'}}
                />}
                text={"Test"}
            />
            <HoraireDialog
                title={"Festin"}
                date={"05/09/2024"}
                icon={<img src={ChestIcon}
                           alt={""}
                           style={{ width: '60px', height: '60px'}}
                />}
                text={"Test"}
            />
            <HoraireDialog
                title={"GROS PARTY !!!"}
                date={"06/09/2024"}
                icon={<img src={PotionIcon}
                           alt={""}
                           style={{ width: '60px', height: '60px'}}
                />}
                text={"Test"}
            />
        </div>

    )
}