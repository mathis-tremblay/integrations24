import {useNavigate} from "react-router-dom";
import {useAuth} from "../reactHooks/AuthContext";
import {useEffect} from "react";
import {appConsts} from "../appCfg/appConsts";


export default function ProtectedRoute({ children }){
    const navigate = useNavigate();
    const auth = useAuth();

    // verify if the user is not logged in and trying to bypass login
    useEffect(() => {
        if (!auth.isLoggedIn()){
            navigate(appConsts.routerPaths.login)
        }
    }, [auth, navigate]);

    return auth.isLoggedIn() ? children : null;
}