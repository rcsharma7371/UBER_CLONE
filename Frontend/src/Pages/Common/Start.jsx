import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="bg-[#1976D2] h-[100dvh] w-full flex flex-col items-center justify-center relative">
      <div className="flex flex-col items-center relative w-full">
        <div className="flex items-center justify-center relative -ml-[50px]">
          <div className="h-[53px] w-[150px] overflow-hidden flex items-center justify-start">
            <img src="/arrow.png" alt="arrow image" className="w-full h-full" />
          </div>

          <div
            className="bg-[#1976D2] h-[181px] w-[181px] flex items-center justify-center rounded-[20px] -ml-[100px]"
            style={{
            boxShadow: `
          rgba(255, 255, 255, 0.2) -4px -4px 6px 0px, rgba(50, 50, 93, 0.2) 5px 4px 10px 5px, rgba(0, 0, 0, 0.3) 3px 3px 7px -3px`
          }}
          >
            <img
              src="/Uber.png"
              alt="App Logo"
              className="w-[120px] h-[50px]"
            />
          </div>
        </div>

        <div className="mt-4 w-[171px] h-[40px] flex flex-col items-center justify-start">
          <img src="/safety.png" alt="move with safety image" />
        </div>
      </div>

      <div className="absolute bottom-8 w-[80%] flex justify-between">
        <Link
          to="/user-login"
          className="text-white text-center px-6 py-3 rounded-md font-semibold w-[100%]
             bg-[linear-gradient(90deg,_#1976D2_0%,_#535AFF_100%)]
             hover:from-[#1565C0] hover:to-[#3F51B5]
             shadow-md transition-all duration-300"
             style={{
              boxShadow: `
              rgba(0, 0, 0, 0.2) 4px 4px 10px, rgba(0, 0, 0, 0.2) -4px 4px 10px, rgba(0, 0, 0, 0) 4px -4px 0px, rgba(0, 0, 0, 0) -4px -4px 0px, rgba(0, 0, 0, 0.2) 0px 4px 6px
            `,
            }}
        >
          Get Started  &nbsp;&nbsp;&nbsp;<i className="fa-solid fa-arrow-right-long top-5"></i>
        </Link>
      </div>
    </div>
  );
};

export default Start;
