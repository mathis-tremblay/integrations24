import './App.css';
import LoginPage from "./components/Login/LoginPage";
import {AuthProvider} from "./reactHooks/AuthContext";
import {useState} from "react";

function App() {
    const [token, setToken] = useState(null);

    return (
        <AuthProvider>
            <LoginPage setToken={setToken}/>
        </AuthProvider>
    )
}

export default App;
