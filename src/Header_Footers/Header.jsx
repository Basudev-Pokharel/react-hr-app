import React from "react";
import style from "./style.module.css";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className={style.header}>
      <Link to="/">
        HR<span>APP</span>
      </Link>
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
