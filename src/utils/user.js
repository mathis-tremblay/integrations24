import {auth, db} from "../components/firebase/firebase";
import {doc, getDoc, updateDoc, arrayUnion, arrayRemove, increment} from "firebase/firestore";


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
    if (!user) {
        throw new Error("User is not authenticated");
    }

    let quizzCompleted = false;
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
    if (!user) {
        throw new Error("User is not authenticated");
    }
    const userDoc = doc(db, "Users", user.uid);

    await updateDoc(userDoc, { quizzCompleted: quizzCompleted });
}

export async function getQuestionsAnswered(){
    const user = auth.currentUser;
    if (!user) {
        throw new Error("User is not authenticated");
    }

    let questionsAnswered = 0;
    const userDoc = doc(db, "Users", user.uid);
    const docSnap = await getDoc(userDoc);
    if (docSnap.exists()) {
        const data = docSnap.data();
        questionsAnswered = data.questionsAnswered;
    } else {
        throw new Error("No such document!");
    }
    return questionsAnswered;
}

export async function setQuestionsAnswered(questionsAnswered) {
    const user = auth.currentUser;
    if (!user) {
        throw new Error("User is not authenticated");
    }
    const userDoc = doc(db, "Users", user.uid);

    await updateDoc(userDoc, { questionsAnswered: questionsAnswered });
}

// Returns a boolean that tells if the user is participating on the day from the argument
export async function isParticipating(day){
    const user = auth.currentUser;
    if (!user) {
        throw new Error("User is not authenticated");
    }
    const userDoc = doc(db, "Users", user.uid);
    const docSnap = await getDoc(userDoc);

    if (docSnap.exists()) {
        const data = docSnap.data();
        return data.participatingDays.includes(day);
    } else {
        throw new Error("No such document!");
    }
}

// add a day to the participatingDays array. If the day argument is negative, removes this said day from the list
export async function setParticipating(day) {
    const user = auth.currentUser;

    const analyticsDoc = doc(db, "Analytics", "Participation")
    const userDoc = doc(db, "Users", user.uid);

    if (day > 0) {
        await updateDoc(userDoc, {participatingDays: arrayUnion(day)});
        await updateDoc(analyticsDoc, {[day.toString()]: increment(1)})
    }
    else {
        await updateDoc(userDoc, {participatingDays: arrayRemove(-day)});
        await updateDoc(analyticsDoc, {[(day*(-1)).toString()]: increment(-1)})
    }
}