import React, { useState } from "react";
import { Link } from "react-router-dom";

const NewPassword = () => {
  const [hide, setHide] = useState(false);
  const [cpHide, setCpHide] = useState(false);
  const [password, setPassword] = useState("");
  const [cpPassword, setCpPassword] = useState("");
  return (
    <div className="bg-[#1A1A1A] min-h-[100dvh] flex flex-col p-5">
      {/* Back arrow */}
      <div className="text-lg text-white flex justify-start w-full">
        <Link to="/forgot-password">
          <i className="fa-solid fa-arrow-left-long top-5"></i>
        </Link>
      </div>

      {/* OTP Section */}
      <div className="flex flex-col w-full p-3 flex-grow text-white">
        <h3 className="text-m mb-4">Change Password</h3>
        <form className="flex flex-col w-full relative">
          {/* <h3 className="mb-2 semi-bold text-lg text-white">
            Set new passwrod
          </h3> */}
          {/* <h3 className="mb-2 semi-bold text-lg text-white">Enter Password</h3> */}
          <input
            type={!hide ? "password" : "text"}
            placeholder="New Passwrod"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 bg-transparent border-b border-b-[#EDF6FF] placeholder:text-m focus:outline-none text-white"
          />
          {hide ? (
            <i
              className="fa-solid fa-eye-slash text-white absolute  right-[20px] text-white"
              onClick={() => setHide(!hide)}
            ></i>
          ) : (
            <i
              className="fa-solid fa-eye absolute text-white  right-[20px] text-white"
              onClick={() => setHide(!hide)}
            ></i>
          )}
          <input
            type={!cpHide ? "password" : "text"}
            placeholder="Confirm Password"
            value={cpPassword}
            onChange={(e) => {
              setCpPassword(e.target.value);
            }}
            className="mb-4 bg-transparent border-b border-b-[#EDF6FF] placeholder:text-m focus:outline-none text-white mb-10"
          />
          {cpHide ? (
            <i
              className="fa-solid fa-eye-slash text-white absolute top-[40px] right-[20px] text-white"
              onClick={() => setCpHide(!cpHide)}
            ></i>
          ) : (
            <i
              className="fa-solid fa-eye absolute text-white top-[40px] right-[20px] text-white"
              onClick={() => setCpHide(!cpHide)}
            ></i>
          )}
          {(password != cpPassword) & (cpPassword != "") ? (
            <p className="text-red-700 mb-4">
              Password and Confirm password should be same
            </p>
          ) : null}
          <button
            type="submit"
            className="rounded-lg px-4 py-2 mb-2 bg-[#000000] text-white"
          >
            Change Password
          </button>
        </form>
      </div>

      {/* Fallback button (in case auto-submit fails) */}
      {/* <div className="w-full p-3">
        <button
          className="rounded-lg px-4 py-2 mb-2 bg-[#000000] text-center text-white w-full block"
        >
          Send OTP
        </button>
      </div> */}
    </div>
  );
};

export default NewPassword;
