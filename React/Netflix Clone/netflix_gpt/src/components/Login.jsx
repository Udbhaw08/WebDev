import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_medium.jpg"
          alt="logo"
        />
      </div>

      <form className="w-3/12 absolute p-12 bg-black my-20 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85">
        <h1 className="font-bold texty-3xl py-4 ">Sign In</h1>

        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />

        <input 
        type="text" 
        placeholder="Password"
         className="p-4 my-4 w-full  bg-gray-700" />

        <button 
        className="p-4 my-6 bg-red-700 w-full rounded-lg">
          Sign-in
        </button>
      </form>
    </div>
  );
};

export default Login;
