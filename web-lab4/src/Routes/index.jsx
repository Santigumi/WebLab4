import { BrowserRouter, Routes, Route } from "react-router";
import Inicio from "../pages/Inicio";
import IniciarSesion from "../pages/IniciarSesion";
import Productos from "../pages/Productos";
import Pedidos from "../pages/Pedidos";
import { useState } from "react";
import Protect from "./Protect";
const Router = () => {
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("auth")) | false
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/Productos" element={<Productos />}></Route>
        <Route path="/IniciarSesion" element={<IniciarSesion />}></Route>
        <Route element={<Protect Autorized={auth}></Protect>}>
          <Route path="/Pedidos" element={<Pedidos />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
