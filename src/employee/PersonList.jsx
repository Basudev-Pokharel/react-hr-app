import React from "react";
import style from "./PersonList.module.css";
import PersonCard from "./PersonCard.jsx";
import { useOutletContext } from "react-router";

const PersonList = () => {
  const { employeeAll } = useOutletContext();
  return (
    <div className={style.Container}>
      {employeeAll.length == 0 ? (
        <>
          <h1>
            We are having trouble while fethching data from server. You might
            have no runned the:<code>npm run server</code> Command. try running
            it and check
          </h1>
        </>
      ) : (
        employeeAll.map((employee, index) => (
          <PersonCard key={index} {...employee} />
        ))
      )}
    </div>
  );
};

export default PersonList;
