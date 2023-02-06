import React, { createContext, useContext, useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase_config';


const AuthContext = createContext()

const AuthenticationContext = ({ children }) => {
	const [user, setUser] = useState();
	const handleSignup = ((formState) => {
		createUserWithEmailAndPassword(auth, formState.email, formState.password)
			.then((userCredential) => {
				const user = userCredential.user;
				setUser(user);


			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;

			});
	})

	return (
		<>
			<AuthContext.Provider value={{ handleSignup }}>
				{children}
			</AuthContext.Provider>
		</>
	)
}

const UserAuth = () => {
	return useContext(AuthContext)
}
export { AuthenticationContext, UserAuth }
