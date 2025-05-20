import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import PersonList from "./employee/PersonList.jsx";
import About from "./About.jsx";
import AddEmployee from "./employee/AddEmployee.jsx";

let route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <PersonList />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/add",
        element: <AddEmployee />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={route} />
);
