import { Box, Button } from "@mui/material";
import { Link } from "react-router";
const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Link to={"/"}>
        <Button
          sx={{ backgroundColor: "#e6d021", color: "white", boxShadow: 1 }}
        >
          Inicio
        </Button>
      </Link>
      <Link to={"/IniciarSesion"}>
        <Button
          sx={{ backgroundColor: "#646199", color: "white", boxShadow: 1 }}
        >
          Iniciar sesión
        </Button>
      </Link>
      <Link to={"/Productos"}>
        <Button
          sx={{ backgroundColor: "#73a5a8", color: "white", boxShadow: 1 }}
        >
          Productos
        </Button>
      </Link>
      <Link to={"/Pedidos"}>
        <Button
          sx={{ backgroundColor: "#d7573b", color: "white", boxShadow: 1 }}
        >
          Tus pedidos
        </Button>
      </Link>
    </Box>
  );
};
export default Navbar;
