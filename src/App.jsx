import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export function Header() {
  return (
    <>
      <header>The name of App is Hr App</header>
    </>
  );
}

export function Footer() {
  return (
    <>
      <footer>Copyright &copy; 2025. Basudev Pokharel & REACT-25K</footer>
    </>
  );
}
export function PersonComponent(props) {
  return (
    <div className="person-name">
      <p>
        <strong> Name:</strong>
        {props.name}
      </p>
      <p>
        <strong>Title:</strong>
        {props.title}
      </p>
      <p>
        <strong>Salary:</strong>
        {props.salary}
      </p>
      <p>
        <strong>Phone:</strong>
        {props.phone}
      </p>
      <p>
        <strong>Email:</strong>
        {props.email}
      </p>
      <p>
        <strong>Animal:</strong>
        {props.animal}
      </p>
    </div>
  );
}

export default Header;
