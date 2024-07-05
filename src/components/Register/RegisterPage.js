import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../firebase/firebase.js";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import {appConsts} from "../../appCfg/appConsts";
import {useNavigate} from "react-router-dom";

function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) { // add password check
            toast.error("Les mots de passe ne sont pas identiques !", {position: "top-center"});
            return;
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            console.log(user);
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    firstName: fname,
                    lastName: lname,
                    photo:""
                });
            }
            console.log("Inscription réussie!!");
            toast.success("Inscription réussie!!", {
                position: "top-center",
            });
            navigate(appConsts.routerPaths.login)
        } catch (error) {
            console.log(error.message);
            toast.error(error.message, {
                position: "bottom-center",
            });
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <h3>S'inscire</h3>

            <div className="mb-3">
                <label>Prénom</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Prénom"
                    onChange={(e) => setFname(e.target.value)}
                    required
                />
            </div>

            <div className="mb-3">
                <label>Nom</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nom"
                    onChange={(e) => setLname(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label>IDUL</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="idul@ulaval.ca"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            <div className="mb-3">
                <label>Mot de passe</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Entrez votre mot de passe"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3" >
                <label>Confirmation</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Confirmez votre mot de passe"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </div>

            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    S'inscrire
                </button>
            </div>
            <p className="forgot-password text-right">
                Déjà inscrit ? <a href="/login">Se connecter</a>
            </p>
        </form>
    );
}

export default RegisterPage;