import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import UserLogin from "./Pages/UserLogin";
import SplashScreen from "./Pages/splashScreen";
import ForgotPassword from "./Pages/ForgotPassword";
import CaptainLogin from "./Pages/CaptainLogin";
import UserSignUp from "./Pages/UserSignUp";
import SignupProfile from "./Pages/SignupProfile";
import RegistrationDone from "./Pages/RegistrationDone";
import VerifyOtp from "./Pages/VerifyOtp";
import NewPassword from "./Pages/NewPassword";

const App = () => {
  return (
    <div className="h-[100dvh]">
      {/* <div className="container mx-auto h-[100dvh] w-[100%]"> */}
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/home" element={<Home />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/user-signup" element={<UserSignUp />} />
          <Route path="/signup-profile" element={<SignupProfile />} />
          <Route path="/registration-done" element={<RegistrationDone />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
          <Route path="/new-password" element={<NewPassword />} />

        </Routes>
        <Routes>
          {/* <Route path="/captain-signup" element={<UserLogin />} /> */}
          <Route path="/captain-login" element={<CaptainLogin />} />
        </Routes>
      {/* </div> */}
    </div>
  );
};

export default App;
