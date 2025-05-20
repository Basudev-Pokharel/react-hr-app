import { useState } from "react";
import PersonList from "./employee/PersonList";
import Header from "./Header_Footers/Header";
import Footer from "./Header_Footers/Footer";
import { Outlet } from "react-router";
import employees from "./employee/employee_object";

function App() {
  const [employeeAll, setEmployees] = useState(employees);

  function onAddEmployee(newEmployee) {
    setEmployees((prev) => [...prev, newEmployee]);
  }

  return (
    <>
      <Header />
      <Outlet context={{ employeeAll, onAddEmployee }} />
      <Footer />
    </>
  );
}

export default App;
