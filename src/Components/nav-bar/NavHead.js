import React from "react";
import "./NavHead.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container logo">
          <Link to="/">
            <a className="navbar-brand mx-auto">
              <img
                src="/chikimus-logo.png"
                alt="Chikimus Logo"
                className="logo"
              />
            </a>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
