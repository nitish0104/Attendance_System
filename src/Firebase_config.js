import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
	apiKey: "AIzaSyCPi9kV75eDapBAnyk6xPpZjQuhqU3O4Jc",
	authDomain: "student-attendance-syste-591a1.firebaseapp.com",
	projectId: "student-attendance-syste-591a1",
	storageBucket: "student-attendance-syste-591a1.appspot.com",
	messagingSenderId: "775347421974",
	appId: "1:775347421974:web:7280617b03466f221d4637"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);