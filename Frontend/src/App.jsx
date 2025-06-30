import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import UserLogin from "./Pages/UserLogin";
import SplashScreen from "./Pages/splashScreen";

const App = () => {
  return (
    <div>
      <div className="container mx-auto h-[100vh] w-[100%]">
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/home" element={<Home />} />
          <Route path="/user/login" element={<UserLogin />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
