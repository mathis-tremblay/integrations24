import {getUserCostume} from "../../utils/costumes";
import {useEffect, useState} from "react";
import "./CostumePageStyle.css"
import HobbitCostume from "./HobbitCostume";
import NainCostume from "./NainCostume";
import ElfCostume from "./ElfCostume";
import EntCostume from "./EntCostume";
import {isAdmin} from "../../utils/roles";


export default function CostumeAdminPage () {

    return (
        <div className="CenterContainer">
            <div className="CostumeHeader">
                Vous êtes un <b>admin</b>. Voici les 4 costumes.
            </div>
            <div className="CostumeDialog"
                 style={{marginTop: 3, overflowY: "auto", height: "90%"}}
            >

                Costume de Hobbit :
                <HobbitCostume/>

                Costume de Nain :
                <NainCostume/>

                Costume d'Elf :
                <ElfCostume/>

                Costume d'Ent :
                <EntCostume/>
            </div>
        </div>
    )
}