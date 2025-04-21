import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import Inicio from "../pages/Inicio";
import IniciarSesion from "../pages/IniciarSesion";
import Productos from "../pages/Productos";
import Pedidos from "../pages/Pedidos";
import { useEffect, useState } from "react";
import Protect from "./Protect";
const AppRouter = () => {
  const location = useLocation();
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("auth")) || false
  );
  useEffect(() => {
    setAuth(JSON.parse(localStorage.getItem("auth")) || false);
  }, [location]);
  return (
    <Routes>
      <Route path="/" element={<Inicio />}></Route>
      <Route path="/Productos" element={<Productos />}></Route>
      <Route path="/IniciarSesion" element={<IniciarSesion />}></Route>
      <Route element={<Protect Autorized={auth}></Protect>}>
        <Route path="/Pedidos" element={<Pedidos />}></Route>
      </Route>
    </Routes>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default Router;
