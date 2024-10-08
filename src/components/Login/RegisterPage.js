import {createUserWithEmailAndPassword} from "firebase/auth";
import React, {useState} from "react";
import {auth, db} from "../firebase/firebase.js";
import {setDoc, doc, updateDoc, increment} from "firebase/firestore";
import {toast} from "react-toastify";
import {appConsts} from "../../appCfg/appConsts";
import {useNavigate} from "react-router-dom";
import "./AuthStyle.css"
import {getLeastUsedCostume} from "../../utils/costumes"


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
                const leastUsedCostume = await getLeastUsedCostume();
                let currentDate = new Date();
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    firstName: fname,
                    lastName: lname,
                    admin: false,
                    costume: leastUsedCostume,
                    quizzCompleted: false,
                    participatingDays: [],
                    questionsAnswered: 0,
                    messages: [{
                        text: "Salut jeune GelGifois! Si jamais tu nous poses une question, " +
                            "vérifie tes messages ici régulièrement, tu n'auras pas de notif quand on va te répondre.",
                        date: currentDate,
                        answer: true
                    }]
                });
                // Updating analytics
                await updateDoc(doc(db, "Analytics", "Users"), {
                    UserCount: increment(1)
                })
                await updateDoc(doc(db, "Analytics", "Costumes"), {
                    [leastUsedCostume]: increment(1)
                })
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
        <div className="auth-wrapper">
            <form onSubmit={handleRegister} className="auth-inner">
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
                    <label>Email</label>
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
                <div className="mb-3">
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
                    <button type="submit" className="btn btn-primary" style={{marginTop: 10}}>
                        S'inscrire
                    </button>
                </div>
                <p className="forgot-password text-center">
                    Déjà inscrit ? <a href="/login">Se connecter</a>
                </p>
            </form>
        </div>
    );
}

export default RegisterPage;