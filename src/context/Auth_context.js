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
			await createUserWithEmailAndPassword(auth, formState.email, formState.password)
				.then((userCredential) => {
					const user = userCredential.user;
					setUser(user);
					setDoc(doc(db, "Student_attendance", user.uid), {
						email: user.email,
						uid: user.uid
					}).then(() => {
						sendEmailVerification(auth.currentUser).then(() => {
							naviGate("/Profile")
						})
					})
				})

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
