import React, { useState, useEffect } from "react";
import "./Nav.css";
import account_01 from "./assets/Account-01.jpg";

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://www.techdaily.com.au/b2/wp-content/uploads/2015/03/Netflix_Logo_Print_FourColorCMYK.png"
          alt="Netflix"
        />
        <img className="nav__avatar" src={account_01} alt="Account" />
      </div>
    </div>
  );
}

export default Nav;
