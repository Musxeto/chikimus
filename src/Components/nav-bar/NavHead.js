// NavHead.js
import React from "react";
import "./NavHead.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container logo">
        <a className="navbar-brand mx-auto" href="#">
          <img src="/chikimus-logo.png" alt="Chikimus Logo" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
