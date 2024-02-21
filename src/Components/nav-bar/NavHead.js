import React from "react";
import "./NavHead.css";
import ThemeSelector from "../theme-selector/ThemeSelector";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container logo">
          <a className="navbar-brand mx-auto" href="#">
            <img
              src="/chikimus-logo.png"
              alt="Chikimus Logo"
              className="logo"
            />
          </a>
        </div>
      </nav>
      <ThemeSelector />
    </>
  );
};

export default Navbar;
