import React from "react";

const Navbar = ({ setCurrPage }) => {
  return (
    <div className="w-full">
      <ul className="flex w-full bg-white text-black justify-around h-10 align-middle items-center">
        <li className="cursor-pointer" onClick={() => setCurrPage("home")}>
          Home
        </li>
        <li className="cursor-pointer" onClick={() => setCurrPage("shop")}>
          Shop
        </li>
        <li className="cursor-pointer" onClick={() => setCurrPage("about")}>
          About
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
