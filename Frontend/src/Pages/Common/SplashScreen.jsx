import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 2000);
    return () => clearTimeout(timer); // Cleanup
  }, [navigate]);

  return (
    <div className="splash-screen bg-[#1976D2] h-[100dvh] flex flex-col items-center justify-center">
      <div
        className="h-[181px] w-[181px] flex justify-center align-center rounded-[20px]"
        style={{
          boxShadow: `rgba(255, 255, 255, 0.2) -4px -4px 6px 0px, rgba(50, 50, 93, 0.2) 5px 4px 10px 5px, rgba(0, 0, 0, 0.3) 3px 3px 7px -3px`,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="/Uber.png"
          alt="App Logo"
          className="logo w-[120px] h-[50px]"
        />
      </div>
    </div>
  );
};

export default SplashScreen;
