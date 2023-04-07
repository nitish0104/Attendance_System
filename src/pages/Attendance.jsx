import { doc, onSnapshot } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { db } from '../Firebase_config';
import Layout from '../components/Layout';
import { UserAuth } from '../context/Auth_context';

const Attendance = () => {
	const {user} =UserAuth()
	useEffect(() => {
		const unsub = onSnapshot(doc(db, "AI-1-EC-I", user.uid), (doc) => {
			console.log("Current data: ", doc.data());
			unsub()
		});
	
	
	}, [])
	
  return (
	<Layout>

	<div>Attendance</div>
	</Layout>
  )
}

export default Attendance