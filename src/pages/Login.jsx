import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Layout from "../components/Layout";
import { UserAuth } from "../context/Auth_context";
import { auth } from "../Firebase_config";

const Login = () => {
  const { user, setUser } = UserAuth();
  const initialState = {
    email: "",
    password: "",
  };
  const [formState, setFormState] = useState(initialState);

  const handleFormChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, formState.email, formState.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <Layout>
      <div className="w-[50%] h-[80%] bg-white rounded-md  flex flex-col items-center gap-2	p-6">
        <form action="">
          <h1 className="text-black text-3xl font-semibold text-center">
            Login Here
          </h1>
          <Input
            onChange={handleFormChange}
            id="email"
            label={"Mail"}
            type={"email"}
            placeholder={"Enter Your Mail"}
          />
          <Input
            onChange={handleFormChange}
            id="password"
            label={"Password"}
            type={"password"}
            placeholder={"Enter Your password"}
          />
          <div className="flex gap-8">
            <span>Dosen't have a account?</span>
            <Link to="/Signup" className="text-blue-900">
              Create Here
            </Link>
          </div>
          <button
            type="button"
            onClick={() => {
              handleSubmit();
            }}
            className="bg-purple-500 text-center text-xl text-white rounded-lg p-1 hover:bg-purple-400"
          >
            Login
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
