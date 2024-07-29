import {getUserCostume} from "../../utils/costumes";
import {useEffect, useState} from "react";
import "./CostumePageStyle.css"
import HobbitCostume from "./HobbitCostume";
import NainCostume from "./NainCostume";
import ElfCostume from "./ElfCostume";
import EntCostume from "./EntCostume";
import {isAdmin} from "../../utils/roles";
import CostumeAdminPage from "./CostumeAdminPage";


export default function CostumePage () {
    //TODO: Quizz
    const [costume, setCostume] = useState("");

    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        const fetchAdmin = async () => {
            const result = await isAdmin();
            setAdmin(result);
        }

        fetchAdmin().then();
    }, []);

    useEffect(() => {
        async function fetchCostume() {
            const costume = await getUserCostume();
            setCostume(costume);
            console.log(costume)
        }

        fetchCostume().then();
    }, []);

    return (
        <div>
            {admin ?
                <CostumeAdminPage/> :
                <div className="CenterContainer">
                    <div className="CostumeHeader">
                        Vous êtes un <b>{costume.toUpperCase()}</b>
                    </div>
                    <div className="CostumeDialog" style={{"marginTop": 3}}>
                        Il est indespensable pour tout {costume} d'avoir...

                    </div>
                    <div className="CostumeDialog">
                        {costume === "hobbit" ?
                            <HobbitCostume/>
                            : null
                        }
                        {costume === "nain" ?
                            <NainCostume/>
                            : null
                        }
                        {costume === "elf" ?
                            <ElfCostume/>
                            : null
                        }
                        {costume === "ent" ?
                            <EntCostume/>
                            : null
                        }

                    </div>
                </div>
            }
        </div>
    )
}