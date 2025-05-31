import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./About.jsx";
import AddEmployee from "./employee/AddEmployee.jsx";
import PersonList from "./employee/PersonList.jsx";

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
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
