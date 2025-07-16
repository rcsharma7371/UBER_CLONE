import React from "react";
import { Link } from "react-router-dom";

const CaptainSignUp = () => {
  return (
    <div className="bg-[#1A1A1A] min-h-[100dvh] flex flex-col p-5">
      <div className="text-lg text-white flex justify-start w-full">
        <Link to="/user-login">
          <i className="fa-solid fa-arrow-left-long top-5"></i>
        </Link>
      </div>
      <div className="flex flex-col w-full p-3 flex-grow text-white">
        <h3 className="text-m mb-4">What's your name?</h3>
        <form className="form flex flex-row gap-4 w-full">
          <input
            type="text"
            placeholder="First"
            name="firstName"
            className="w-[50%] mb-4 bg-transparent border-b border-b-[#EDF6FF] placeholder:text-m focus:outline-none text-white"
          />
          <input
            type="text"
            placeholder="Last"
            name="lastName"
            className="w-[50%] mb-4 bg-transparent border-b border-b-[#EDF6FF] placeholder:text-m focus:outline-none text-white"
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

export default CaptainSignUp;
