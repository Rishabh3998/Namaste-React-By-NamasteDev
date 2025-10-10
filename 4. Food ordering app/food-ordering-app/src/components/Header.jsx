import React from "react";
import "../App.css";

const Header = () => {
  return (
    <div className="header">
      <img
        src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        alt="logo"
      />
      <ul className="header-links">
        <li>Home</li>
        <li>About</li>
        <li>Cart</li>
        <li>Sign in</li>
      </ul>
    </div>
  );
};

export default Header;
