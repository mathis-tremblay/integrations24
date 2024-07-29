import {auth, db} from "../components/firebase/firebase";
import {doc, getDoc} from "firebase/firestore";


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