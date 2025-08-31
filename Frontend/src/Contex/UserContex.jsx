import React, { createContext, useState } from "react";

export const UserDataContex = createContext();

const UserContex = ({ children }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  return (
    <div>
      <UserDataContex.Provider value={{ user, setUser }}>
        {children}
      </UserDataContex.Provider>
    </div>
  );
};

export default UserContex;
