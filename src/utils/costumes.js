import {db} from "../components/firebase/firebase";
import {arrayUnion, doc, getDoc, updateDoc} from "firebase/firestore";
import {auth} from '../components/firebase/firebase';

export async function addSecretFound() {
    const user = auth.currentUser;
    if (!user) {
        throw new Error("User is not authenticated");
    }

    const analyticsDoc = doc(db, "Analytics", "Costumes")

    await updateDoc(analyticsDoc, {secretFound: arrayUnion(user.uid)})
}

export async function getSecretFound() {
    const userDoc = doc(db, "Analytics", "Costumes");
    const docSnap = await getDoc(userDoc);

    if (docSnap.exists()) {
        const data = docSnap.data();
        return data.secretFound.length;
    } else {
        throw new Error("No such document!");
    }
}

async function countCostumes() {
    const costumesDoc = doc(db, "Analytics", "Costumes");
    const costumesSnapshot = await getDoc(costumesDoc);

    if (costumesSnapshot.exists()) {
        return costumesSnapshot.data(); // returns the data in the document as an object
    } else {
        console.log(`No such document "Costumes" in "Analytics"!`);
        return null;
    }
}

export async function getLeastUsedCostume() {
    const costumeCounts = await countCostumes();

    if (costumeCounts == null) {
        return null;
    }

    let leastUsedCostume = null;
    let minCount = Infinity;

    for (const [costume, count] of Object.entries(costumeCounts)) {
        if (count < minCount) {
            minCount = count;
            leastUsedCostume = costume;
        }
    }

    return leastUsedCostume;
}

export async function getUserCostume(){
    const user = auth.currentUser;

    if (!user) {
        throw new Error("User is not authenticated");
    }

    const userDoc = doc(db, "Users", user.uid);
    const docSnap = await getDoc(userDoc);

    if (docSnap.exists()) {
        const data = docSnap.data();
        return data.costume;
    } else {
        throw new Error("No such document!");
    }
}