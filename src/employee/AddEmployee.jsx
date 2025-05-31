import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router";
import style from "./AddEmployee.module.css";

const AddEmployee = () => {
  const [formData, setFormData] = useState({});
  const { onAddEmployee } = useOutletContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name == "skills") {
      value = value.split(",");
    }
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ["id"]: String(Date.now()),
    }));
  };
  // Now the form submitted here
  const submitAdd = (e) => {
    e.preventDefault();
    handleUnInputtedValues();
    onAddEmployee(formData);
    navigate("/");
  };
  return (
    <div className={style.addComponent}>
      <form action="" onSubmit={submitAdd}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your Name"
          onChange={handleChange}
          required
        />
        <br></br>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter your title"
          onChange={handleChange}
          required
        />
        <br></br>
        <input
          type="text"
          name="salary"
          id="salary"
          placeholder="Enter your salary"
          onChange={handleChange}
          required
        />
        <br></br>

        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Enter your phone"
          onChange={handleChange}
          required
        />
        <br></br>

        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter your email"
          onChange={handleChange}
          required
        />
        <br></br>

        <input
          type="text"
          name="animal"
          id="animal"
          placeholder="Enter your animal"
          onChange={handleChange}
          required
        />
        <br></br>

        <input
          type="date"
          name="startDate"
          id="startDate"
          placeholder="Enter your startDate"
          onChange={handleChange}
          required
        />
        <br></br>

        <input
          type="text"
          name="location"
          id="location"
          placeholder="Enter your location"
          onChange={handleChange}
          required
        />
        <br></br>
        <input
          type="text"
          name="department"
          id="department"
          placeholder="Enter your Department"
          onChange={handleChange}
          required
        />
        <br></br>

        <input
          type="text"
          name="skills"
          id="skills"
          placeholder="Enter your Skills"
          onChange={handleChange}
          required
        />
        <br></br>
        <input type="submit" value="Submit" className={style.button} />
      </form>
    </div>
  );
};

export default AddEmployee;
