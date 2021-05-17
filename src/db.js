import firebase from "firebase/app";
import "firebase/database";

const config = {
    apiKey: "AIzaSyDs6Ge3lSuNhiTpM0XvMKKRmY6Evg4wx5k",
    authDomain: "firechat-b1fc5.firebaseapp.com",
    projectId: "firechat-b1fc5",
    storageBucket: "firechat-b1fc5.appspot.com",
    messagingSenderId: "87149473143",
    appId: "1:87149473143:web:54cae294ae9c5a0c2c8572"
}

const db = firebase.initializeApp(config);
export default db;