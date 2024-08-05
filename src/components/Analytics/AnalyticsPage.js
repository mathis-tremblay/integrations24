import LoadingSpinner from "../LoadingSpinner";
import {useState} from "react";
import "./AnalyticsPageStyle.css"

// TODO: faire autre collection firebase pour les analytics.
export default function AnalyticsPage() {
    const [loading, setLoading] = useState(false);

    return (
        <div>
            <LoadingSpinner loading={loading}/>
            <div className="analyticsContainer">
                <p>Nombre d'utilisateurs: </p>
                {/*Nb 1er annee et vieux ?*/}
                <br/>
                <p>Nombre d'ents: </p>
                <p>Nombre de hobbits: </p>
                <p>Nombre de nains: </p>
                <p>Nombre d'elfs: </p>
                <br/>
                <p>Nombre de participants aux journées</p>
                <p>1: </p>
                <p>2: </p>
                <p>3: </p>
                <p>4: </p>
                <p>5: </p>
            </div>
        </div>
    )
}