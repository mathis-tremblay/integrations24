import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDlIi5KfqLUmeHPbkW5MCN53CTRRkrGh3k",
    authDomain: "integrations2024.firebaseapp.com",
    projectId: "integrations2024",
    storageBucket: "integrations2024.appspot.com",
    messagingSenderId: "498682783955",
    appId: "1:498682783955:web:9086283c92bf7f35390c26",
    measurementId: "G-HNBX06EFR8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;