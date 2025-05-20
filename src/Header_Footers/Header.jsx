import React from "react";
import "./style.css";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="header">
      <p>
        HR<span>APP</span>
      </p>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/add">AddEmployee</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
