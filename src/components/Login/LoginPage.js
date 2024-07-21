import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import { toast } from "react-toastify";
import {appConsts} from "../../appCfg/appConsts";
import {useNavigate} from "react-router-dom";
import "./AuthStyle.css"

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            localStorage.setItem("loggedIn", "true");
            console.log("User logged in Successfully");
            navigate(appConsts.routerPaths.home.base)
            toast.success("Connection réussie!", {
                position: "top-center",
                autoClose: 1000 // display for 1s
            });
        } catch (error) {
            console.log(error.message);

            toast.error(error.message, {
                position: "bottom-center",
            });
        }
    };

    return (
        <div className="auth-wrapper">
        <form onSubmit={handleSubmit} className="auth-inner">
            <h3>Se connecter</h3>

            <div className="mb-3">
                <label style={{"color": "#ffffff"}}>Email</label>
                <input
                    style={{"background": "#FBFAE57C"}}
                    type="email"
                    className="form-control"
                    placeholder="idul@ulaval.ca"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label style={{"color": "#ffffff"}}>Mot de passe</label>
                <input
                    style={{"background": "#FBFAE57C",}}
                    type="password"
                    className="form-control"
                    placeholder="Entrez votre mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}

                />
                <p className="forgot-password text-left"
                   style={{marginTop: 0, marginBottom: 30}}
                >
                    Mot de passe oublié ? <a href={appConsts.routerPaths.changePassword}>Changer mot de passse</a>
                </p>
            </div>


            <div className="d-grid">
                <button type="submit" className="btn btn-primary"
                        style={{"background": "rgba(85,136,38,0.75)",
                            "borderColor": "#ffff"}}>
                    Se connecter
                </button>
            </div>
            <p className="forgot-password text-center">
                Pas encore inscrit ? <a href={appConsts.routerPaths.register}>S'inscrire</a>
            </p>
        </form>
        </div>
    );
}

export default LoginPage;