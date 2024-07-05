import {createBrowserRouter, Navigate} from "react-router-dom";
import {appConsts} from "../appCfg/appConsts";
import ErrorPage from "./ErrorPage";
import App from "../App";
import ProtectedRoute from "./ProtectedRoute";
import MainApp from "../components/MainApp/MainApp";
import MessagesPage from "../components/Messages/MessagesPage";
import InfoPage from "../components/Info/InfoPage";
import HorairePage from "../components/Horaire/HorairePage";
import CostumePage from "../components/Costume/CostumePage";
import RegisterPage from "../components/Register/RegisterPage";

export const router = createBrowserRouter([
    {
        path: "*",
        element: <Navigate to={appConsts.routerPaths.login}/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: appConsts.routerPaths.login,
        element: <App/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: appConsts.routerPaths.register,
        element: <RegisterPage/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: appConsts.routerPaths.home.base,
        element: <ProtectedRoute> <MainApp/> </ProtectedRoute>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: appConsts.routerPaths.home.info,
                element: <InfoPage/>,
            },
            {
                path: appConsts.routerPaths.home.horaire,
                element: <HorairePage/>,
            },
            {
                path: appConsts.routerPaths.home.costume,
                element: <CostumePage/>,
            },
            {
                path: appConsts.routerPaths.home.messages,
                element: <MessagesPage/>,
            }
        ]
    }

])