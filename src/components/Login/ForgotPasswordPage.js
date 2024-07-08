import React from "react";
import {appConsts} from "../../appCfg/appConsts";
import {auth} from '../firebase/firebase';
import {sendPasswordResetEmail} from "firebase/auth";
import {toast} from "react-toastify";
import "./AuthStyle.css"


export default function ForgotPasswordPage() {
    const [email, setEmail] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success("Vérifiez vos emails pour changer votre mot de passe. Il se peut le courriel soit dans vos indésirables.", {
                    position: "top-center",
                    autoClose: 3000 // display for 1s
                });
            })
            .catch((error) => {
                toast.error("Oh oh. Il y a eu une erreur. Confirmez que le bon email est inscrit.", {
                    position: "top-center",
                    autoClose: 3000 // display for 1s
                });
            });
    }

    return (
        <div className="auth-wrapper">
            <form onSubmit={handleSubmit} className="auth-inner">
                <h3>Changer mot de passe</h3>

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
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary" style={{marginTop: 10}}>
                        Réinitialiser le mot de passe
                    </button>
                    <p className="forgot-password text-center">
                        Mot de passe retrouvé ? <a href={appConsts.routerPaths.login}>Se connecter</a>
                    </p>
                </div>
            </form>
        </div>
    )

}