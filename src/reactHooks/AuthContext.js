import {createContext, useContext, useState} from "react";


const AuthContext = createContext(null);

export function AuthProvider({ children }) {

    const isLoggedIn = () => localStorage.getItem('loggedIn') === "true";

    const auth = {
        isLoggedIn,
    }

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}