import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [hide, setHide] = useState(false);
  return (
    <div className="bg-[#1A1A1A] min-h-[100dvh] flex flex-col p-5">
      <div className="text-lg text-white flex justify-start w-full">
        <Link to="/home">
          <i className="fa-solid fa-arrow-left-long top-5"></i>
        </Link>
      </div>

      <div className="flex flex-col w-full p-3 flex-grow">
        <form className="flex flex-col w-full relative">
          <h3 className="mb-2 semi-bold text-lg text-white">
            What's your email
          </h3>
          <input
            type="text"
            placeholder="example@gmail.com"
            className="mb-4 bg-transparent border-b border-b-[#EDF6FF] placeholder:text-m focus:outline-none text-white"
          />
          <h3 className="mb-2 semi-bold text-lg text-white">Enter Password</h3>
          <input
            type={!hide ? "password" : "text"}
            placeholder="Password"
            className="mb-4 bg-transparent border-b border-b-[#EDF6FF] placeholder:text-m focus:outline-none text-white"
          />
          {hide ? (
            <i
              className="fa-solid fa-eye-slash text-white absolute top-[112px] right-[20px]"
              onClick={() => setHide(!hide)}
            ></i>
          ) : (
            <i
              className="fa-solid fa-eye absolute text-white top-[112px] right-[20px]"
              onClick={() => setHide(!hide)}
            ></i>
          )}
          <div className="w-full text-right mb-4">
            <Link to="/forgot-password" className="text-white underline">
              forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="rounded-lg px-4 py-2 mb-2 bg-[#000000] text-white"
          >
            Login
          </button>
          <div>
            <p className="text-white text-sm">
              Don't have an account?{" "}
              <Link to="/user-signup" className="text-blue-500 underline">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>

      {/* Bottom Button */}
      <div className="w-full p-3">
        <Link
          to="/captain-login"
          className="rounded-lg px-4 py-2 mb-2 bg-[#000000] text-center text-white w-full block"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
