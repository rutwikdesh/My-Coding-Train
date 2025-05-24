import React from "react";
import Home from "./Home";
import About from "./About";

const TogglePage = ({ currPage }) => {
  return (
    <div>
      {currPage === "home" && <Home />}
      {currPage === "about" && <About />}
    </div>
  );
};

export default TogglePage;
