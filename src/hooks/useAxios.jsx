import axios from "axios";
import React from "react";

export default function useAxios() {
  const get = () => {
    return axios.get("https://hr-app-backend-api-3gc8.onrender.com/employees");
  };
  const post = (data) => {
    return axios.post(
      "https://hr-app-backend-api-3gc8.onrender.com/employees",
      { ...data }
    );
  };
  const patch = (data, id) => {
    return axios.patch(
      `https://hr-app-backend-api-3gc8.onrender.com/employees/${id}`,
      {
        ...data,
      }
    );
  };
  return { get, post, patch };
}
