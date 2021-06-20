import React from "react";

import "./Navbar.css";
import img from "./logoad.png";
import CartWidget from "./CartWidget";

function Navbar() {
  return (
    <div className="header-container">
      <div>
        <CartWidget />
      </div>
      <nav className="nav-container">
        <div className="cont-logo">
          <img src={img} alt="logo arrow design"></img>
        </div>
        <div className="cont-menu">
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
