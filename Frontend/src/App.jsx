import React from "react";
import { Route, Routes } from "react-router-dom";
import user_router_links from "./js-file/user_router_links.jsx";
import captain_router_links from "./js-file/captain_router_links.jsx";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="h-[100dvh]">
      <div><Toaster/></div>
      <Routes>
        {user_router_links?.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        {captain_router_links?.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        {/* <Route path="/captain-login" element={<CaptainLogin />} /> */}
      </Routes>
    </div>
  );
};

export default App;
