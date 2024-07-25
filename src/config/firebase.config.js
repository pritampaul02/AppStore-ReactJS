import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdSqOtfvz473kJbIsHW7oo-kJtUfg9sh0",
    authDomain: "full-stack-app-store-daf9d.firebaseapp.com",
    projectId: "full-stack-app-store-daf9d",
    storageBucket: "full-stack-app-store-daf9d.appspot.com",
    messagingSenderId: "843869291443",
    appId: "1:843869291443:web:7b85fd3af5dfb51dac01c6",
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
