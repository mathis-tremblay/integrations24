import {createContext, useContext, useState} from "react";


const AuthContext = createContext(null);

export function AuthProvider({ children }) {

    const [loggedIn, setLoggedIn] = useState(false);

    const isLoggedIn = () => loggedIn;

    async function loginUser(credentials) {
        return fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
            .then(data => data.json())
    }

    const auth = {
        isLoggedIn,
        loginUser,
        setLoggedIn
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