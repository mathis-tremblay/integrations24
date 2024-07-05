import './App.css';
import LoginPage from "./components/Login/LoginPage";
import {AuthProvider} from "./reactHooks/AuthContext";
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <div>
            <AuthProvider>
                <LoginPage/>
            </AuthProvider>
            <ToastContainer/>
        </div>
    )
}

export default App;
