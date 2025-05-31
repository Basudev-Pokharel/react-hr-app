import { useEffect, useState } from "react";
import Header from "./Header_Footers/Header";
import Footer from "./Header_Footers/Footer";
import { Outlet } from "react-router";
import useAxios from "./hooks/useAxios";

function App() {
  const { get, post, patch } = useAxios();
  const [employeeAll, setEmployees] = useState([]);

  useEffect(() => {
    get().then((response) => {
      setEmployees(response.data);
    });
  }, []);
  function onAddEmployee(newEmployee) {
    post({ ...newEmployee });
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
