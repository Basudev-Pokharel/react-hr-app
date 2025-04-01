import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Footer, PersonComponent } from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <Footer></Footer>
    <PersonComponent
      name="Basu"
      title="Coder"
      salary="3000"
      phone="0909868674"
      email="basu123@gmail.com"
      animal="Fox"
    ></PersonComponent>
    <PersonComponent
      name="Hei"
      title="manager"
      salary="3000"
      phone="0909868674"
      email="hei@gakigo@gmail.com"
      animal="Cow"
    ></PersonComponent>
    <PersonComponent
      name="Moi"
      title="Codedsfdsr"
      salary="30sdf00"
      phone="sdfsdfd"
      email="basu123@gmail.786879"
      animal="Dog"
    ></PersonComponent>
    <PersonComponent
      name="Shyam"
      title="djkhgf"
      salary="3000"
      phone="867789"
      email="jhbjk@gmail.com"
      animal="Cat"
    ></PersonComponent>
    <PersonComponent
      name="Nimuo"
      title="jdsgfjk"
      salary="3000"
      phone="0909868674"
      email="sdfds@gmail.com"
      animal="Rat"
    ></PersonComponent>
    <Footer />
  </>
);
