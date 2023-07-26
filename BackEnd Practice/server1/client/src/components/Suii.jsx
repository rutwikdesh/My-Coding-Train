import React, { useContext } from "react";
import { UserContext } from "./PewPew";

const Suii = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>Hi {user}</h1>
    </div>
  );
};

export default Suii;
