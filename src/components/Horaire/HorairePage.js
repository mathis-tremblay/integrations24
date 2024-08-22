import HoraireDialog from "./HoraireDialog";
import ChestIcon from "../../images/chest_icon.png";
import PotionIcon from "../../images/potion_icon.png";
import HelmetIcon from "../../images/helmet_icon.png";
import HammerIcon from "../../images/hammer_icon.png";
import DaggersIcon from "../../images/daggers_icon.png";
import CrownIcon from "../../images/crown_icon.png"
import { setParticipating } from "../../utils/user";
import "./HorairePageStyle.css";
import {texts} from "../../appCfg/texts";
import {useMain} from "../../reactHooks/MainContext";

const days = [
    { id: 1, title: "Activités et Ptite Gre", text: texts.day.one, date: "Lundi 2 septembre", icon: HelmetIcon },
    { id: 2, title: "Rally appart", text: texts.day.two, date: "Mardi 3 septembre", icon: DaggersIcon },
    { id: 3, title: "Jeux malades", text: texts.day.three , date: "Mercredi 4 septembre", icon: HammerIcon },
    { id: 4, title: "Festin du roi", text: texts.day.four, date: "Jeudi 5 septembre", icon: CrownIcon },
];

// Day 5 events
const day5_0 = { id: 5, title: "GROSSE surprise...", text: texts.day.fiveSurprise, date: "Vendredi 6 septembre", icon: ChestIcon };
const day5_1 = { id: 5, title: "GROS PARTY !!!", text: texts.day.fiveComplete, date: "Vendredi 6 septembre", icon: PotionIcon };

// Get current date and compare it with 4th of September 2024 to reveal the surprise
const currentDate = new Date();
const limitDate = new Date('09/05/2024');

if (currentDate >= limitDate) {
    days.push(day5_1);
} else {
    days.push(day5_0);
}

export default function HorairePage() {
    const main = useMain();

    const participation = main.participation;
    const setParticipation = main.setParticipation;

    async function handleParticipatingChange(newParticipationStatus, dayId) {
        const updatedParticipation = [...participation];
        const dayIndex = days.findIndex(day => day.id === dayId);
        updatedParticipation[dayIndex] = newParticipationStatus;
        setParticipation(updatedParticipation);

        await setParticipating(newParticipationStatus ? dayId : -dayId);
    }

    return (
        // Loop to add the 5 days
        <div style={{ marginTop: "3svh" }}>
            {days.map((day, index) => (
                <HoraireDialog
                    key={day.id}
                    title={day.title}
                    date={day.date}
                    icon={<img src={day.icon} alt="" style={{ width: '60px', height: '60px' }} />}
                    text={day.text}
                    participating={participation[index]}
                    handleParticipatingChange={handleParticipatingChange}
                    day={day.id}
                />
            ))}
        </div>
    );
}
