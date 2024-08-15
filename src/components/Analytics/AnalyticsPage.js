import LoadingSpinner from "../LoadingSpinner";
import {useEffect, useState} from "react";
import "./AnalyticsPageStyle.css";
import {doc, getDoc} from "firebase/firestore";
import {db} from "../firebase/firebase";
import Divider from "@mui/material/Divider";
import * as React from "react";
import {getSecretFound} from "../../utils/costumes"


export default function AnalyticsPage() {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState(0);
    const [ents, setEnts] = useState(0);
    const [elfs, setElfs] = useState(0);
    const [hobbits, setHobbits] = useState(0);
    const [nains, setNains] = useState(0);
    const [secret, setSecret] = useState(0)
    const [day1 , setDay1] = useState(0);
    const [day2, setDay2] = useState(0);
    const [day3, setDay3] = useState(0);
    const [day4, setDay4] = useState(0);
    const [day5, setDay5] = useState(0);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const usersDoc = await getDoc(doc(db, "Analytics", "Users"));
            const costumesDoc = await getDoc(doc(db, "Analytics", "Costumes"));
            const participationDoc = await getDoc(doc(db, "Analytics", "Participation"));
            
            setUsers(usersDoc.data().UserCount);
            setEnts(costumesDoc.data().ent);
            setElfs(costumesDoc.data().elf);
            setHobbits(costumesDoc.data().hobbit);
            setNains(costumesDoc.data().nain);
            setSecret(await getSecretFound());
            setDay1(participationDoc.data()["1"]);
            setDay2(participationDoc.data()["2"]);
            setDay3(participationDoc.data()["3"]);
            setDay4(participationDoc.data()["4"]);
            setDay5(participationDoc.data()["5"]);
            
            setLoading(false);
        }
        fetchData().then();
    }, []);

    return (
        <div>
            <LoadingSpinner loading={loading}/>
            <div className="analyticsContainer">
                <div className="innerContainer">
                    <p>Nombre d'<b>utilisateurs</b> : {users}</p>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Divider sx={{
                            backgroundColor: "white",
                            height: 3,
                            width: "80%",
                            marginTop: "1%",
                            marginBottom: "-1%"
                        }}/>
                    </div>
                    <br/>
                    <p>Nombre d'utilisateurs ayant trouvé le <b>secret</b> : {secret}</p>
                    <br/>
                    <p>Nombre de chaque <b>costume</b></p>
                    <p><b>Ents</b> : {ents} </p>
                    <p><b>Hobbits</b> : {hobbits}</p>
                    <p><b>Nains</b> :  {nains}</p>
                    <p><b>Elfs</b> :  {elfs}</p>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Divider sx={{
                            backgroundColor: "white",
                            height: 3,
                            width: "80%",
                            marginTop: "1%",
                            marginBottom: "-1%"
                        }}/>
                    </div>
                    <br/>
                    <p>Nombre de <b>participants</b> aux journées</p>
                    <p><b>1er</b> jour : {day1}</p>
                    <p><b>2ième</b> jour : {day2}</p>
                    <p><b>3ième</b> jour : {day3}</p>
                    <p><b>4ième</b> jour : {day4}</p>
                    <p><b>5ième</b> jour : {day5}</p>
                </div>
            </div>
        </div>
    )
}