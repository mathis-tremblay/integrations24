import {getUserCostume} from "../../utils/costumes";
import {useEffect, useState} from "react";
import "./CostumePageStyle.css"
import HobbitCostume from "./HobbitCostume";
import NainCostume from "./NainCostume";
import ElfCostume from "./ElfCostume";
import EntCostume from "./EntCostume";


export default function CostumePage () {
    const [costume, setCostume] = useState("");

    useEffect(() => {
        async function fetchCostume() {
            const costume = await getUserCostume();
            setCostume(costume);
            console.log(costume)
        }

        fetchCostume().then();
    }, []);

    return (
        <div className="CenterContainer">
            <div className="CostumeHeader">
                Vous êtes un <b>{costume.toUpperCase()}</b>
            </div>
            <div className="CostumeDialog">
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
    )
}