import React from "react";
import "../styles/Navbar.css";
import harshalogo from "../assets/freepikavatar.svg";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <img
            src={harshalogo}
            className="logoclass"
            alt="bitmoji"
            height="50px"
            width="50px"
          />
          Harsha
        </div>
        <div className="navbar-right">
          <a href="#skills" className="Skills">
            Skills
          </a>
          <a href="#Projects" className="Projects">
            Projects
          </a>
          <a href="#Contact" className="contact">
            Contact
          </a>
          <a href="/resume26.pdf" download="resume26.pdf" className="resume">
            Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
