import {appConsts} from "../appCfg/appConsts";
import {db} from "../components/firebase/firebase";
import {collection, doc, getDocs, getDoc} from "firebase/firestore";
import {auth} from '../components/firebase/firebase';


async function countCostumes() {
    const costumes = appConsts.costumes;
    const costumeCounts = {
        nain: 0,
        elf: 0,
        hobbit: 0,
        ent: 0
    };

    const usersCollection = collection(db, "Users");
    const querySnapshot = await getDocs(usersCollection);

    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const costume = data.costume;

        if (costumes.includes(costume)) {
            costumeCounts[costume]++;
        }
    });

    return costumeCounts;
}

export async function getLeastUsedCostume() {
    const costumeCounts = await countCostumes();
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