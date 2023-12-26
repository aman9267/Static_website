import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <>
      <nav className="nav">
        <div className="nav_logo">Logo</div>
        <ul className="nav_list">
          <li className="list">Home</li>
          <li className="list">About</li>
          <li className="list">Blog</li>
          
          <button className="button">Contact Us</button>
        </ul>
          
          
      </nav>
    </>
  );
};

export default Header;
