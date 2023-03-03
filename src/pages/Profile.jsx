import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Input from "../components/Input";
import { option_year, option_branch } from "../components/Data";
import Select from "../components/Select";
import { UserAuth } from "../context/Auth_context";
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../Firebase_config";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const Profile = () => {
  const { user, userdata } = UserAuth();
  const naviGate = useNavigate();
  const initialState = {
    name: "",
    number: "",
    email: "",
    branch: "",
    year: "",
  };
  const [formState, setFormState] = useState(initialState);
  const handleFormChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  useEffect(() => {
    setFormState(userdata);
  }, [userdata]);

  const handleUpdateProfile = async () => {
    const updateRef = doc(db, "Student_attendance", `${user.uid}`);
    await updateDoc(updateRef, formState).then(() => {
      console.log(user.uid);
      alert("document updated");
    });
  };
  const logOut = async () => {
    await signOut(auth).then(() => {
      naviGate("/Login");
    });
  };

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
            <button
              onClick={logOut}
              className="mx-auto w-[10vw] h-[100%] cursor-pointer p-2 rounded-md font-semibold hover:scale-105 shadow hover:shadow-lg duration-200 bg-red-600 text-white"
            >
              Log Out
            </button>
          </div>
        </div>

        <div className="absolute w-[70vw] h-[90vh] bg-white flex flex-col items-center justify-center right-5 rounded-lg gap-y-5">
          <form action="" className="contents w-[100vw]">
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
              id="email"
              type={"mail"}
              label="Your Mail"
              placeholder={"Enter your Mail"}
              onChange={handleFormChange}
            />
            <Select
              id="branch"
              label="Branch"
              options={option_branch}
              onChange={handleFormChange}
            ></Select>
            <Select
              id="year"
              label="Year"
              options={option_year}
              onChange={handleFormChange}
            ></Select>

            <button
              onClick={handleUpdateProfile}
              type="button"
              className="bg-purple-500 text-center text-xl text-white rounded-lg p-1 hover:bg-purple-400 shadow hover:shadow-lg hover:scale-105 duration-200"
            >
              Update
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Profile;
