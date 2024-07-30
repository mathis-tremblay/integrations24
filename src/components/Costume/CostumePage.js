import {getUserCostume} from "../../utils/costumes";
import {useEffect, useState} from "react";
import "./CostumePageStyle.css"
import HobbitCostume from "./CostumeTypes/HobbitCostume";
import NainCostume from "./CostumeTypes/NainCostume";
import ElfCostume from "./CostumeTypes/ElfCostume";
import EntCostume from "./CostumeTypes/EntCostume";
import {isAdmin, isQuizzCompleted} from "../../utils/user";
import CostumeAdminPage from "./CostumeAdminPage";
import QuizzPage from "./QuizzPage";


export default function CostumePage () {
    const [costume, setCostume] = useState("");
    const [admin, setAdmin] = useState(false);
    const [quizzEnd, setQuizzEnd] = useState(false)

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
        }
        fetchCostume().then();
    }, []);

    useEffect(() => {
        async function fetchQuizzEnd() {
            const quizzCompleted = await isQuizzCompleted();
            setQuizzEnd(quizzCompleted);
        }
        fetchQuizzEnd().then();
    })

    return (
        <div>
            {admin ?
                <CostumeAdminPage/> :
                !quizzEnd ?
                    <QuizzPage setQuizzEnd={setQuizzEnd}/> :
                <div className="CenterContainer">
                    <div className="CostumeHeader">
                        Vous êtes un <b>{costume.toUpperCase()}</b>
                    </div>
                    <div className="CostumeHeader" style={{"marginTop": 3, "textAlign": "left"}}>
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