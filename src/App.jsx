import { useEffect, useState } from "react";
import PersonList from "./employee/PersonList";
import Header from "./Header_Footers/Header";
import Footer from "./Header_Footers/Footer";
import { Outlet } from "react-router";
import employees from "./employee/employee_object";
import axios from "axios";

function App() {
  const [employeeAll, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/employees").then((response) => {
      setEmployees(response.data);
    });
  }, []);

  function onAddEmployee(newEmployee) {
    axios.post("http://localhost:3001/employees", { ...newEmployee });
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
