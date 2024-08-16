import {auth, db} from "../components/firebase/firebase";
import {arrayUnion, collection, doc, getDoc, getDocs, setDoc, updateDoc} from "firebase/firestore";


// Writes the answer to the User's collection.
// [{text: "blablabla", date: AAAA-MM-JJ_HH-MM-SS, answer: true}, {...}]
export async function writeAnswer(text, userId) {
    const userDoc = doc(db, "Users", userId);

    let currentDate = new Date();
    await updateDoc(userDoc, {messages: arrayUnion({
            answer: true,
            date: currentDate,
            text: text
        })})
}

// Adds the user to the Convos collection
// Also writes the message in the User's collection.
// [{text: "blablabla", date: AAAA-MM-JJ_HH-MM-SS, answer: flase}, {...}]
export async function writeMessage(text) {

    const user = auth.currentUser;
    if (!user) {
        throw new Error("User is not authenticated");
    }
    const userDoc = doc(db, "Users", user.uid);
    const messagesDoc = doc(db, "Convos", user.uid);

    await setDoc(messagesDoc, {})

    let currentDate = new Date();
    await updateDoc(userDoc, {messages: arrayUnion({
            answer: false,
            date: currentDate,
            text: text,
        })})
}

// Gets the message from User's collection using the userId argument
// If the function is called with no argument, it takes the current user's messages
// Returns an array of message sorted from the oldest date to the most recent. [old, ..., recent]
export async function readMessages(userId) {

    if (!userId) {
        const user = auth.currentUser;
        if (!user) {
            throw new Error("User is not authenticated");
        }
        userId = user.uid;
    }
    const userDoc = doc(db, "Users", userId);
    const userDocSnap = await getDoc(userDoc);
    if (!userDocSnap.exists()) {
        throw new Error("No such document!");
    }

    const userData = userDocSnap.data();

    // Checks if userData.messages exists before sorting
    if ('messages' in userData && Array.isArray(userData.messages)) {
        // Returns an array of message sorted from the oldest date to the most recent. [old, ..., recent]
        return userData.messages.sort(
            (a, b) => a.date?.toDate().getTime() - b.date?.toDate().getTime()
        )
    } else {
        throw new Error("No messages found!");
    }
}

// Returns an array of the ids of all the users who sent messages
export async function getUsersWhoSentMessages() {
    const convosCollection = collection(db, "Convos");
    const querySnapshot = await getDocs(convosCollection);
    const users = [];
    querySnapshot.forEach((doc) => {
        users.push(doc.id);
    });
    return users;
}
