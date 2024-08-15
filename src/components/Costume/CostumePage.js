import { getUserCostume } from "../../utils/costumes";
import { useEffect, useState } from "react";
import "./CostumePageStyle.css";
import HobbitCostume from "./CostumeTypes/HobbitCostume";
import NainCostume from "./CostumeTypes/NainCostume";
import ElfCostume from "./CostumeTypes/ElfCostume";
import EntCostume from "./CostumeTypes/EntCostume";
import { isQuizzCompleted } from "../../utils/user";
import CostumeAdminPage from "./CostumeAdminPage";
import QuizzPage from "./QuizzPage";
import LoadingSpinner from "../LoadingSpinner";
import {useMain} from "../../reactHooks/MainContext";
import SecretButton from "./SecretButton";

export default function CostumePage() {
    const main = useMain();

    const admin = main.admin;
    const [costume, setCostume] = useState("");
    const [quizzEnd, setQuizzEnd] = useState(false);
    const [loading, setLoading] = useState(true); // New loading state

    useEffect(() => {
        async function fetchData() {
            try {
                const [costumeResult, quizzCompleted] = await Promise.all([
                    getUserCostume(),
                    isQuizzCompleted(),
                ]);
                setCostume(costumeResult);
                setQuizzEnd(quizzCompleted);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData().then();
    }, []);

    if (loading) {
        return <LoadingSpinner loading={loading}/>;
    }

    return (
        <div>
            <LoadingSpinner loading={loading}/>
            {admin ? (
                <CostumeAdminPage />
            ) : !quizzEnd ? (
                <QuizzPage setQuizzEnd={setQuizzEnd} />
            ) : (
                <div>
                    <div className="CenterContainer">
                        <div className="CostumeHeader">
                            Vous êtes un <b>{costume.toUpperCase()}</b>
                        </div>
                        <div className="CostumeHeader" style={{ marginTop: 3, textAlign: "left" }}>
                            Il est indispensable pour tout {costume} d'avoir...
                        </div>
                        <div className="CostumeDialog">
                            {costume === "hobbit" && <HobbitCostume />}
                            {costume === "nain" && <NainCostume />}
                            {costume === "elf" && <ElfCostume />}
                            {costume === "ent" && <EntCostume />}
                        </div>
                    </div>
                    <SecretButton/>
                </div>
                )
            }

        </div>

    );
}
