import React from "react";
import Layout from "../components/Layout";
import Input from "../components/Input";
import { option_year, option_branch } from "../components/Data";
import Select from "../components/Select";

const Profile = () => {
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
              type={"name"}
              label="Enter your name"
              placeholder={"Enter your name"}
            />
            <Input
              type={"number"}
              label="Enter your roll number"
              placeholder={"Enter your roll number"}
            />
            <Input
              type={"mail"}
              label="Your Mail"
              placeholder={"Enter your Mail"}
            />
            <Select label="Branch" options={option_branch}></Select>
            <Select label="Year" options={option_year}></Select>

            <button className="bg-purple-500 text-center text-xl text-white rounded-lg p-1 hover:bg-purple-400 shadow hover:shadow-lg hover:scale-105 duration-200">
              Submit
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Profile;
