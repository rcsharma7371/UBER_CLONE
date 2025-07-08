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

const App = () => {
  return (
    <div>
      {/* <div className="container mx-auto h-[100vh] w-[100%]"> */}
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/home" element={<Home />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/user-signup" element={<UserSignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/signup-profile" element={<SignupProfile />} />
          <Route path="/registration-done" element={<RegistrationDone />} />

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
