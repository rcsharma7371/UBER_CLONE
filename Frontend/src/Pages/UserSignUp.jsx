import React from "react";
import { Link } from "react-router-dom";

const UserSignUp = () => {
  return (
    <div className="bg-[#1A1A1A] min-h-screen flex flex-col p-5">
      <div className="text-lg text-white flex justify-start w-full">
        <Link to="/user-login">
          <i className="fa-solid fa-arrow-left-long top-5"></i>
        </Link>
      </div>
      <div className="flex flex-col w-full p-3 flex-grow text-white">
        <h3 className="text-m mb-4">What's your name?</h3>
        <form className="form">
          <input
            type="text"
            placeholder="First"
            name="firstName"
            className="rounded px-4 py-2 mb-4 bg-[#414141] placeholder:text-m focus:outline-none focus:border-blue-500 text-white"
          />
          <input
            type="text"
            placeholder="Last"
            name="lastName"
            className="rounded px-4 py-2 mb-4 bg-[#414141] placeholder:text-m focus:outline-none focus:border-blue-500 text-white"
          />
        </form>
      </div>
      <div className="w-full p-3">
        <Link
          to="/signup-profile"
          className="rounded-lg px-4 py-2 mb-2 bg-[#000000] text-center text-white w-full block"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default UserSignUp;
