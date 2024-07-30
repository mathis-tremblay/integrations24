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
            navigate(appConsts.routerPaths.home.info)
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
                <label>Email</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="idul@ulaval.ca"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label>Mot de passe</label>
                <input
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
                <button type="submit" className="btn btn-primary">
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