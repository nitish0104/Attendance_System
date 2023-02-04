import React from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Layout from "../components/Layout";

const signup = () => {
  return (
    <>
      <Layout className="flex items-center justify-center ">
        <div className="flex justify-center items-center">
          <div className="w-[50%] h-[80%] bg-white m-auto rounded-md flex flex-col justify-center items-center gap-2	p-6">
            <h1 className="text-black text-3xl font-semibold text-center">
              Create Student Account
            </h1>
            <Input
              label={"Mail"}
              type={"mail"}
              placeholder={"Enter Your Mail"}
            />
            <Input
              label={"Password"}
              type={"passwor"}
              placeholder={"Enter Your password"}
            />
            <Input
              label={"Confirm Password"}
              type={"passwor"}
              placeholder={"Confirm Your password"}
            />
            <div className="flex gap-8">
              <span>Already have a account?</span>
              <Link to="/Login" className="text-blue-900">
                Login Here
              </Link>
            </div>
            <button className="bg-purple-500 text-center text-xl text-white rounded-lg p-1 hover:bg-purple-400">
              Create Account
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default signup;
