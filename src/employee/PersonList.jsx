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
            We are having trouble fetching data from the server. The server
            might be waking up or temporarily unavailable. Please wait a moment
            and try again.
            <br />
            If the issue continues, check your internet connection or the server
            status at:
            <code>https://hr-app-backend-api-3gc8.onrender.com/employees</code>
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
