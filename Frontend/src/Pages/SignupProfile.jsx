import React from "react";
import { Link } from "react-router-dom";

const SignupProfile = () => {
  return (
    <div className="bg-[#1A1A1A] min-h-screen flex flex-col p-5">
      <div className="text-lg text-white flex justify-start w-full">
        <Link to="/user-signup">
          <i className="fa-solid fa-arrow-left-long top-5"></i>
        </Link>
      </div>
      <div className="flex flex-col w-full p-3 flex-grow text-white justify-center items-center relative">
        <div className="w-[138px] h-[138px] bg-[#C4C4C4] rounded-[50%] absolute top-[100px] justify-center items-center flex">
          <img src="/profile.png" alt="dummy profile" />
        </div>
        <p className="mt-[30px] text-start text-[15px]">
          By tapping the arrow below, you agree to Uber’s Terms of Use and
          acknowledge that you have read the Privacy Policy
        </p>
      </div>
      <div className="w-full p-3">
        <div className="flex flex-row items-center ">
          <input type="checkbox" className="mr-2" />
          <p className="text-start text-white text-[12px] mb-3 text-center">
            Check the box to indicate that you are atleast 18 years of age,
            agree to the{" "}
            <span className="text-blue-700">Terms & Conditions</span> and
            acknowledge the{" "}
            <span className="text-blue-700">Privacy Policy</span>.
          </p>
        </div>
        <Link
          to="/registration-done"
          className="rounded-lg px-4 py-2 mb-2 bg-[#000000] text-center text-white w-full block"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default SignupProfile;
