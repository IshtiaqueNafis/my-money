import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDKzeNhT4p8Ire6Bss6K1EN74gKplWziLY",
    authDomain: "moneytracker-82dac.firebaseapp.com",
    projectId: "moneytracker-82dac",
    storageBucket: "moneytracker-82dac.appspot.com",
    messagingSenderId: "253502247684",
    appId: "1:253502247684:web:631ed1ddffb58e6c56b651"
};

firebase.initializeApp(firebaseConfig);

// inital service
const projectFireStore = firebase.firestore();
const projectAuth = firebase.auth();

export {projectFireStore, projectAuth};