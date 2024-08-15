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
                text={texts.info.bienvenue} // The text isnt used, the image bienvenue.png is since bienvenue={true}
                icon={<EmailIcon sx={{fontSize: "2.5rem"}}/>}
                bienvenue={true}
            />
            <InfoDialog
                title={"Informations générales"}
                desc={"Lis-moi sinon on t'aime un peu moins."}
                text={texts.info.infoGenerales}
                icon={<BlindIcon sx={{fontSize: "2.5rem"}}/>}
                bienvenue={false}
            />
            <InfoDialog
                title={"Informations importantes"}
                desc={"On va appeller tes parents si tu me lis pas"}
                text={texts.info.infoImportantes}
                icon={<ReportProblemIcon sx={{fontSize: "2.5rem"}}/>}
                bienvenue={false}
            />
            <InfoDialog
                title={"Frais"}
                desc={"Pour qu'on s'achète une vie."}
                text={texts.info.frais}
                icon={<LocalAtmIcon sx={{fontSize: "2.5rem"}}/>}
                bienvenue={false}
            />
        </div>
    );
}