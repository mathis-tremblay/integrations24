import {createContext, useContext, useEffect, useState} from "react";
import {isAdmin} from "../utils/user";


const MainContext = createContext(null);

export function MainProvider({ children }) {
    const [admin, setAdmin] = useState(false);

    // verify if the user is an admin
    useEffect(() => {
        async function fetchUserRole() {
            const userRole = await isAdmin();
            setAdmin(userRole);
        }
        fetchUserRole().then()
    }, [admin]);

    const auth = {
        admin,
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