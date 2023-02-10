import React, { createContext, useContext, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase_config';
import { useNavigate } from 'react-router-dom';


const AuthContext = createContext()

const AuthenticationContext = ({ children }) => {
	const [user ,setUser] = useState("")
	const naviGate = useNavigate()
	const handleSignup = (formState) => {

		if(formState.password===formState.confirmpassword)
		{

			console.log(formState)
			createUserWithEmailAndPassword(auth, formState.email, formState.password)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log(user)
				naviGate("/Profile")
				})
		}
		else alert("password not match")



	}
	 const handleLogin = (formState) =>{
		console.log(formState)
		signInWithEmailAndPassword(auth, formState.email, formState.password)
  .then((userCredential) => {

    const user = userCredential.user;
	console.log(user);
	naviGate("/Profile")

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

	 } 

	return (
		<>
			<AuthContext.Provider value={{ handleSignup, handleLogin }}>
				{children}
			</AuthContext.Provider>
		</>
	)
}

const UserAuth = () => {
	return useContext(AuthContext)
}
export { AuthenticationContext, UserAuth }
