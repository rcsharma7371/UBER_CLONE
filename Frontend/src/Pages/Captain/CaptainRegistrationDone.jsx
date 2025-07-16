import React from "react";
import { Link } from "react-router-dom";

const CaptainRegistrationDone = () => {
  return (
    <div className="bg-[#13C448] min-h-[100dvh] flex flex-col p-5">
      <div className="text-lg text-white flex justify-start w-full">
        <Link to="/signup-profile">
          <i className="fa-solid fa-arrow-left-long top-5"></i>
        </Link>
      </div>
      <div className="flex flex-col w-full p-3 flex-grow text-white justify-center items-center relative">
        <div className="w-[100px] h-[100px] bg-[#00a130] rounded-full absolute top-[100px] flex justify-center items-center">
          <i className="fa-solid fa-check text-white text-[40px]"></i>
        </div>
        <h2 className="text-lg">Congratulations</h2>
        <p className="text-center text-[15px]">
          Your Uber account has been successfully created. You can now start
          using the app to book rides, order food, and more.
        </p>
      </div>
      <div className="w-full p-3">
        <Link
          to="/"
          className="rounded-lg px-4 py-2 mb-2 bg-[#000000] text-center text-white w-full block"
        >
          Book ride
        </Link>
      </div>
    </div>
  );
};

export default CaptainRegistrationDone;
