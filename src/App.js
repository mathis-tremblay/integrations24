import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useState} from 'react';
import {auth} from './components/firebase/firebase';
import InfoPage from './components/Info/InfoPage';
import RegisterPage from './components/Login/RegisterPage';
import LoginPage from './components/Login/LoginPage';
import {appConsts} from './appCfg/appConsts';
import ProtectedRoute from './router/ProtectedRoute';
import MainApp from './components/MainApp/MainApp';
import ErrorPage from './router/ErrorPage';
import HorairePage from './components/Horaire/HorairePage';
import CostumePage from './components/Costume/CostumePage';
import MessagesPage from './components/Messages/MessagesPage';
import {AuthProvider} from './reactHooks/AuthContext';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ForgotPasswordPage from "./components/Login/ForgotPasswordPage";
import {ConfirmProvider} from "material-ui-confirm";
import AdminRoute from "./router/AdminRoute";
import {MainProvider} from "./reactHooks/MainContext";
import MessagesAdminPage from "./components/Messages/MessagesAdminPage";

function App() {
    const [user, setUser] = useState();
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user);
        });
    });
    return (
        <ConfirmProvider>
            <Router>
                <div className="App">
                    <Routes>
                        <Route
                            path="*"
                            element={<ErrorPage/>}
                        />
                        <Route
                            path="/"
                            element={user ? <Navigate to={appConsts.routerPaths.home.info}/> : <LoginPage/>}
                        />
                        <Route path={appConsts.routerPaths.login} element={<LoginPage/>}/>
                        <Route path={appConsts.routerPaths.changePassword} element={<ForgotPasswordPage/>}/>
                        <Route path={appConsts.routerPaths.register} element={<RegisterPage/>}/>
                        <Route
                            path={appConsts.routerPaths.home.base}
                            element={user ? (
                                    <AuthProvider>
                                        <ProtectedRoute>
                                            <MainProvider>
                                                <MainApp/>
                                            </MainProvider>
                                        </ProtectedRoute>
                                    </AuthProvider>)
                                : (<Navigate to={appConsts.routerPaths.login}/>)}
                        >
                            <Route path={appConsts.routerPaths.home.info} element={<InfoPage/>}/>
                            <Route path={appConsts.routerPaths.home.horaire} element={<HorairePage/>}/>
                            <Route path={appConsts.routerPaths.home.costume} element={<CostumePage/>}/>
                            <Route path={appConsts.routerPaths.home.messages} element={<MessagesPage/>}/>
                            <Route path={appConsts.routerPaths.home.messagesAdmin}
                                   element={ <AdminRoute> <MessagesAdminPage/> </AdminRoute> }/>
                        </Route>
                    </Routes>
                    <ToastContainer/>
                </div>
            </Router>
        </ConfirmProvider>
    );
}

export default App;