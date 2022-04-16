import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCCZxFnGjeAiBfgRhc_pym_n4RMrQxM_1Y",
    authDomain: "foodie-945a3.firebaseapp.com",
    databaseURL: "https://foodie-945a3-default-rtdb.firebaseio.com",
    projectId: "foodie-945a3",
    storageBucket: "foodie-945a3.appspot.com",
    messagingSenderId: "883982278808",
    appId: "1:883982278808:web:9bc4734470d74cf8aaf0ed"
};

const app = getApps.length >0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };