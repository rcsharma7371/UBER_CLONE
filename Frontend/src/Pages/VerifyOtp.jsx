import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useRef } from "react";

const VerifyOtp = () => {
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Only digits
    if (value.length === 1) {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);

      // Move to next input
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  // Handle backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const updatedOtp = [...otp];
      if (otp[index] === "" && index > 0) {
        inputRefs.current[index - 1].focus();
      }
      updatedOtp[index] = "";
      setOtp(updatedOtp);
    }
  };

  // Auto-submit when all OTP digits are filled
  useEffect(() => {
    if (otp.every((digit) => digit !== "")) {
      handleSubmit();
    }
  }, [otp]);

  // Simulated submit function
  const handleSubmit = () => {
    const enteredOtp = otp.join("");
    console.log("OTP submitted:", enteredOtp);
    // Here you could send OTP to backend instead
    // Redirect after success
    navigate("/new-password");
  };

  return (
    <div className="bg-[#1A1A1A] min-h-[100dvh] flex flex-col p-5">
      {/* Back arrow */}
      <div className="text-lg text-white flex justify-start w-full">
        <Link to="/user-login">
          <i className="fa-solid fa-arrow-left-long top-5"></i>
        </Link>
      </div>

      {/* OTP Section */}
      <div className="flex flex-col w-full p-3 flex-grow text-white">
        <h3 className="text-m mb-4">Verify OTP</h3>
        <p>OTP sent to your registered email r*****@gmail.com</p>

        <form className="form w-full flex flex-row justify-start items-center gap-[25px]" onSubmit={(e) => e.preventDefault()}>
          {[...Array(4)].map((_, index) => (
            <input
              key={index}
              type="text"
              inputMode="numeric"
              maxLength={1}
              ref={(el) => (inputRefs.current[index] = el)}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              value={otp[index]}
              className="w-[10%] mt-4 mr-4 text-[35px] text-center mb-4 bg-transparent border-b border-b-[#EDF6FF] placeholder:text-m focus:outline-none text-white"
              placeholder="0"
            />
          ))}
        </form>
          <h4 className="text-blue-500">Resend Code</h4>
      </div>

      {/* Fallback button (in case auto-submit fails) */}
      <div className="w-full p-3">
        <button
          onClick={handleSubmit}
          className="rounded-lg px-4 py-2 mb-2 bg-[#000000] text-center text-white w-full block"
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default VerifyOtp;


