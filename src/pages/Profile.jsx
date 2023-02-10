import React, { useState } from "react";
import Layout from "../components/Layout";
import Input from "../components/Input";
import { option_year, option_branch } from "../components/Data";
import Select from "../components/Select";
import { UserAuth } from "../context/Auth_context";
import { collection, query,  onSnapshot, addDoc } from "firebase/firestore";
import { db } from "../Firebase_config";




const Profile = () => {
  const initialState = {
    name:"",
    number:"",
    email: "",
    branch:"",
    year:""
    
    
  };
  const [formState, setFormState] = useState(initialState);

  const handleFormChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  }

  const handleSubmit = () => {
		addDoc(collection(db, "Attendance"), formState)
			.then(() => {
				setFormState(initialState)
				alert("Todo Created")
			})
	}

  
  return (
    <>
      <Layout>
        <div className="w-[23vw] h-[30vh] bg-white absolute left-5 rounded-lg">
          <h1 className="font-bold text-xl flex justify-center">Account</h1>

          <div className="grid grid-cols-2 gap-5 text-center py-6 ">
            <div className="mx-auto w-[10vw] h-[100%] cursor-pointer p-2 rounded-md font-semibold hover:scale-105 shadow hover:shadow-lg duration-200 bg-black text-white">
              Profile
            </div>
            <div className="mx-auto w-[10vw] h-[100%] cursor-pointer p-2 rounded-md font-semibold hover:scale-105 shadow hover:shadow-lg duration-200 bg-black text-white">
              Notification
            </div>
            <div className="mx-auto w-[10vw] h-[100%] cursor-pointer p-2 rounded-md font-semibold hover:scale-105 shadow hover:shadow-lg duration-200 bg-black text-white">
              Your Attendance
            </div>
            <div className="mx-auto w-[10vw] h-[100%] cursor-pointer p-2 rounded-md font-semibold hover:scale-105 shadow hover:shadow-lg duration-200 bg-red-600 text-white">
              Log Out
            </div>
          </div>
        </div>

        <div className="absolute w-[70vw] h-[90vh] bg-white flex flex-col items-center justify-center right-5 rounded-lg gap-y-5">
          <form action="">
            <h1 className="text-4xl font-bold text-center ">Profile</h1>
            <Input
            id="name"
              type={"name"}
              label="Enter your name"
              placeholder={"Enter your name"} 
              onChange={handleFormChange}
            />
            <Input
            id="number"
              type={"number"}
              label="Enter your roll number"
              placeholder={"Enter your roll number"} 
              onChange={handleFormChange}
            />
            <Input
            id ="email"
              type={"mail"}
              label="Your Mail"
              placeholder={"Enter your Mail"} 
              onChange={handleFormChange}
              value = {UserAuth.email}
            />
            <Select id="branch" label="Branch" options={option_branch} 
            onChange={handleFormChange}></Select>
            <Select id="year" label="Year" options={option_year} 
            onChange={handleFormChange}></Select>

            <button type="button" onClick={handleSubmit} className="bg-purple-500 text-center text-xl text-white rounded-lg p-1 hover:bg-purple-400 shadow hover:shadow-lg hover:scale-105 duration-200">
              Submit
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Profile;
