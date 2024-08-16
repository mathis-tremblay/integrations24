import {createContext, useContext, useEffect, useState} from "react";
import {isAdmin, isParticipating, isQuizzCompleted} from "../utils/user";
import {getUserCostume} from "../utils/costumes";


const MainContext = createContext(null);

export function MainProvider({ children }) {
    
    const [admin, setAdmin] = useState(false);
    const [costume, setCostume] = useState("");
    const [quizzCompleted, setQuizzCompleted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [participation, setParticipation] = useState(Array(5).fill(false));

    // verify if the user is an admin
    useEffect(() => {
        async function fetchUserRole() {
            const userRole = await isAdmin();
            setAdmin(userRole);
        }
        async function fetchUserCostume() {
            const userCostume = await getUserCostume();
            setCostume(userCostume);
        }
        async function fetchQuizzCompleted() {
            const quizzCompleted = await isQuizzCompleted();
            setQuizzCompleted(quizzCompleted);
        }
        async function fetchParticipatingDays() {
            const participatingDays = await isParticipating();
            setParticipation(participatingDays);
        }
        try {
            setLoading(true);
            fetchUserRole().then();
            fetchUserCostume().then();
            fetchQuizzCompleted().then();
            fetchParticipatingDays().then();
        } catch (err) {
            console.log("Error fetching data: ", err);
        } finally {
            setLoading(false);
        }
    }, []);

    const auth = {
        admin,
        costume,
        quizzCompleted,
        setQuizzCompleted,
        loading,
        participation,
        setParticipation
    }

    return (
        <MainContext.Provider value={auth}>
            {children}
        </MainContext.Provider>
    );
}

export function useMain() {
    return useContext(MainContext);
}