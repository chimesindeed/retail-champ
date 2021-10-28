import { initializeApp } from "firebase/app"
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyAYqZx2SaYAQFgfuqsGeOoyX3TM4CvSPjs",
    authDomain: "retail-companion-e4310.firebaseapp.com",
    projectId: "retail-companion-e4310",
    storageBucket: "retail-companion-e4310.appspot.com",
    messagingSenderId: "783423928675",
    appId: "1:783423928675:web:ec558cf6cdfbb356efbb56"
};

const app = initializeApp(firebaseConfig);

export default app;

export const auth = getAuth(app);