import {auth, db} from "../components/firebase/firebase";
import {doc, getDoc, updateDoc} from "firebase/firestore";


// Returns a bool that tells if the user is an admin
export async function isAdmin(){
    const user = auth.currentUser;
    let admin = false

    if (!user) {
        throw new Error("User is not authenticated");
    }

    const userDoc = doc(db, "Users", user.uid);
    const docSnap = await getDoc(userDoc);

    if (docSnap.exists()) {
        const data = docSnap.data();
        admin = data.admin;
    } else {
        throw new Error("No such document!");
    }
    return admin;
}

// Returns a boolean that tells if the user has completed the quizz.
export async function isQuizzCompleted() {
    const user = auth.currentUser;
    let quizzCompleted = false;
    if (!user) {
        throw new Error("User is not authenticated");
    }
    const userDoc = doc(db, "Users", user.uid);
    const docSnap = await getDoc(userDoc);

    if (docSnap.exists()) {
        const data = docSnap.data();
        quizzCompleted = data.quizzCompleted;
    } else {
        throw new Error("No such document!");
    }
    return quizzCompleted;
}

export async function setQuizzCompleted(quizzCompleted) {
    const user = auth.currentUser;

    const userDoc = doc(db, "Users", user.uid);

    await updateDoc(userDoc, { quizzCompleted: quizzCompleted });
}