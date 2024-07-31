import React from "react";
import BlindIcon from '@mui/icons-material/Blind';
import InfoDialog from "./InfoDialog";
import {texts} from "../../appCfg/texts";
import EmailIcon from '@mui/icons-material/Email';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

export default function InfoPage () {
    return (
        <div style={{
            display: 'inline',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
            boxSizing: 'border-box',
        }}>
            <div className={"Header"}>
                MERCI DE LIRE ATTENTIVEMENT LES INFORMATIONS CI-DESSOUS AVANT LES INTÉGRATIONS
            </div>
            <InfoDialog
                title={"Nos bienvenues !"}
                desc={"Usanda kuchitha isikhathi sakho."}
                text={texts.bienvenue}
                icon={<EmailIcon sx={{fontSize: "2.5rem"}}/>}
            />
            <InfoDialog
                title={"Informations générales"}
                desc={"Lis sinon on t'aime un peu moins."}
                text={texts.infoGenerales}
                icon={<BlindIcon sx={{fontSize: "2.5rem"}}/>}
            />
            <InfoDialog
                title={"Informations importantes"}
                desc={"Crois moi, ça vaut la peine de lire."}
                text={texts.infoImportantes}
                icon={<ReportProblemIcon sx={{fontSize: "2.5rem"}}/>}
            />
            <InfoDialog
                title={"Frais"}
                desc={"Pour qu'on s'achète une vie."}
                text={texts.frais}
                icon={<LocalAtmIcon sx={{fontSize: "2.5rem"}}/>}
            />
        </div>
    );
}