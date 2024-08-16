import "./CostumePageStyle.css";
import HobbitCostume from "./CostumeTypes/HobbitCostume";
import NainCostume from "./CostumeTypes/NainCostume";
import ElfCostume from "./CostumeTypes/ElfCostume";
import EntCostume from "./CostumeTypes/EntCostume";
import CostumeAdminPage from "./CostumeAdminPage";
import QuizzPage from "./QuizzPage";
import LoadingSpinner from "../LoadingSpinner";
import {useMain} from "../../reactHooks/MainContext";
import SecretButton from "./SecretButton";

export default function CostumePage() {
    const main = useMain();

    const admin = main.admin;
    const costume = main.costume;
    const quizzEnd = main.quizzCompleted;
    const setQuizzEnd = main.setQuizzCompleted;
    const loading = main.loading;

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
