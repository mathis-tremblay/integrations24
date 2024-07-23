import HoraireDialog from "./HoraireDialog";
import ChestIcon from "../../images/chest_icon.png"


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
                icon={<img src={ChestIcon}
                           alt={""}
                           style={{ width: '60px', height: '60px', color: "white" }}
                />}
                text={"Test"}
            />
            <HoraireDialog
                title={"Rally appart"}
                date={"03/09/2024"}
                icon={<img src={ChestIcon}
                           alt={""}
                           style={{ width: '60px', height: '60px', color: "white" }}
                />}
                text={"Test"}
            />
            <HoraireDialog
                title={"Ptite soirée relax"}
                date={"04/09/2024"}
                icon={<img src={ChestIcon}
                           alt={""}
                           style={{ width: '60px', height: '60px', color: "white" }}
                />}
                text={"Test"}
            />
            <HoraireDialog
                title={"Festin"}
                date={"05/09/2024"}
                icon={<img src={ChestIcon}
                           alt={""}
                           style={{ width: '60px', height: '60px', color: "white" }}
                />}
                text={"Test"}
            />
            <HoraireDialog
                title={"GROS PARTY !!!"}
                date={"06/09/2024"}
                icon={<img src={ChestIcon}
                           alt={""}
                           style={{ width: '60px', height: '60px', color: "white" }}
                />}
                text={"Test"}
            />
        </div>

    )
}