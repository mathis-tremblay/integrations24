import {v4} from 'uuid';
import {auth, db} from "../components/firebase/firebase";
import {arrayUnion, doc, getDoc, serverTimestamp, setDoc, updateDoc} from "firebase/firestore";


// Writes the answer to the Messages collection.
// [{text: "blablabla", date: AAAA-MM-JJ_HH-MM-SS, type: "answer", id: xxxxxx}, {...}]
// Also writes the id of the answer in the User's collection.
export async function WriteAnswer(text, userId) {
    const id = v4();

    const userDoc = doc(db, "Users", userId);
    const messagesDoc = doc(db, "Messages", id);

    await setDoc(messagesDoc,
        {
            answer: true,
            date: serverTimestamp(),
            id: id,
            text: text
        })

    await updateDoc(userDoc, {messages: arrayUnion(id)})
}

// Writes the message to the Messages collection.
// [{text: "blablabla", date: AAAA-MM-JJ_HH-MM-SS, type: "message", id: xxxxxx}, {...}]
// Also writes the id of the message in the User's collection.
export async function WriteMessage(text) {
    const id = v4();

    const user = auth.currentUser;
    if (!user) {
        throw new Error("User is not authenticated");
    }
    const userDoc = doc(db, "Users", user.uid);
    const messagesDoc = doc(db, "Messages", id);

    await setDoc(messagesDoc,
        {
            answer: false,
            date: serverTimestamp(),
            id: id,
            text: text
        })

    await updateDoc(userDoc, {messages: arrayUnion(id)})
}

// Gets the message from Messages collection using the ids in the user's collection
// Returns an array of message sorted from the oldest date to the most recent. [old, ..., recent]
export async function ReadMessages() {

    const user = auth.currentUser;
    if (!user) {
        throw new Error("User is not authenticated");
    }
    const userDoc = doc(db, "Users", user.uid);
    const userDocSnap = await getDoc(userDoc);
    if (!userDocSnap.exists()) {
        throw new Error("No such document!");
    }

    const userData = userDocSnap.data();
    const promises = userData.messages.map(async messageId => {
        const messageDoc = doc(db, "Messages", messageId);
        return await getDoc(messageDoc);
    })
    // List of messages object: [{text: "blablabla", date: AAAA-MM-JJ_HH-MM-SS, type: "message", id: xxxxxx}, {...}]
    const messages = await Promise.all(promises);
    const messagesData = messages.map(doc => ({ id: doc.id, ...doc.data() }));

    // Returns an array of message sorted from the oldest date to the most recent. [old, ..., recent]
    return messagesData.sort(
        (a, b) => a.date?.toDate().getTime() - b.date?.toDate().getTime()
    )
}