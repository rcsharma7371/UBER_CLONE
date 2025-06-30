import React from "react";

const Home = () => {
  return (
    <div className="bg-[#1976D2] h-[100vh] w-[100%] flex items-center justify-center">
      {/* Column wrapper */}
      <div className="flex flex-col items-center relative w-[100%]">
        {/* Row with arrow and logo */}
        <div className="flex items-center justify-center relative">
          {/* Arrow image container */}
          <div className="h-[53px] w-[120px] overflow-hidden flex items-center justify-start -ml-[20px]">
            <img
              src="/arrow.png"
              alt="arrow image"
              className="w-[237.5px] h-auto -ml-[50px]"
            />
          </div>

          {/* App logo container */}
          <div
            className="bg-[#1976D2] h-[181px] w-[181px] flex items-center justify-center rounded-[20px] -ml-[100px]"
            style={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 6px 15px 10px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
            }}
          >
            <img
              src="/Uber.png"
              alt="App Logo"
              className="w-[120px] h-[50px]"
            />
          </div>
        </div>

        {/* Bottom image under logo */}
        <div className="mt-4 w-[251px] h-[54px]">
          <img src="/safety.png" alt="move with safety image" />
        </div>

        {/* Bottom text */}
        {/* <div className="text-white text-center mt-4">
          <Link to='/login'>Get Started</Link>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
