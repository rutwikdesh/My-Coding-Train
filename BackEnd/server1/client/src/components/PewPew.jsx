import React, { createContext, useState } from "react";
import Suii from "./Suii";

const UserContext = createContext();

const PewPew = () => {
  const [user] = useState("RD");
  return (
    <UserContext.Provider value={user}>
      <h1>Heyy!</h1>
      <Suii />
    </UserContext.Provider>
  );
};

export { PewPew, UserContext };
