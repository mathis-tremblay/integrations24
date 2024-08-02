import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {appConsts} from "../appCfg/appConsts";
import {useMain} from "../reactHooks/MainContext";


export default function AdminRoute({ children }){
    const navigate = useNavigate();

    const main = useMain();
    const admin = main.admin;

    // verify if the user is an admin
    useEffect(() => {
        if (!admin) navigate(appConsts.routerPaths.login)
    }, [admin, navigate]);

    return admin ? children : null;
}