import React, { createContext, useContext, useState } from 'react'
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth, db } from '../Firebase_config';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';


const AuthContext = createContext()

const AuthenticationContext = ({ children }) => {
	const [user, setUser] = useState();
	const naviGate = useNavigate()
	const handleSignup = async (formState) => {

		if (formState.password === formState.confirmpassword) {

			console.log(formState)
			await createUserWithEmailAndPassword(auth, formState.email, formState.password)
				.then((userCredential) => {
					const user = userCredential.user;
					setUser(user);
					console.log(user)
					console.log(user.email)
					console.log(user.uid)
					setDoc(doc(db, "Student_attendance", user.uid), {
						email: user.email,
						uid: user.uid
					})
				})
			await sendEmailVerification(auth.currentUser)
			naviGate("/Profile")
		}
		else alert("password not match")
	}
	// const handleLogin = async ({ formState }) => {
	// 	console.log(formState)
	// 	await setDoc(doc(db, "Attendance",), formState);

	// }

	return (
		<>
			<AuthContext.Provider value={{ user, setUser, handleSignup }}>
				{children}
			</AuthContext.Provider>
		</>
	)
}

const UserAuth = () => {
	return useContext(AuthContext)
}
export { AuthenticationContext, UserAuth }
