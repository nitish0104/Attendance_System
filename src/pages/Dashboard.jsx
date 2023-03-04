import { signOut } from 'firebase/auth';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout'
import { UserAuth } from '../context/Auth_context';
import { auth } from '../Firebase_config';


const Dashboard = () => {
const { user, userdata } = UserAuth();
	const naviGate = useNavigate();
	const logOut = async () => {
		await signOut(auth).then(() => {
		  naviGate("/Login");
		});
	  };
	
  return (
	<>
	<Layout>
    {
      userdata ?(<h1 className="font-bold text-xl absolute top-2">Account:{userdata.name}</h1>)
      :
  (
    <h1 className="font-bold text-xl absolute top-2">Account</h1>
  )
    }
  
	<div className="h-[50vh] p-2 w-[90vw] md:w-[20vw] bg-white absolute rounded-lg flex flex-col  ">
          

          <div className="grid grid-cols-1 gap-5 text-center py-6 ">
            <Link to='/Profile' className="mx-auto w-fit h-[100%] cursor-pointer p-2 rounded-md font-semibold hover:scale-105 shadow hover:shadow-lg duration-200 bg-black text-white">
              Profile
            </Link>
            <div className="mx-auto w-fit h-[100%] cursor-pointer p-2 rounded-md font-semibold hover:scale-105 shadow hover:shadow-lg duration-200 bg-black text-white">
              Notification
            </div>
            <div className="mx-auto w-fit h-[100%] cursor-pointer p-2 rounded-md font-semibold hover:scale-105 shadow hover:shadow-lg duration-200 bg-black text-white">
              Your Attendance
            </div>
            <button
              onClick={logOut}
              className="mx-auto w-fit h-[100%] cursor-pointer p-2 rounded-md font-semibold hover:scale-105 shadow hover:shadow-lg duration-200 bg-red-600 text-white"
            >
              Log Out
            </button>
          </div>
        </div>


	</Layout>
	</>
  )
}

export default Dashboard