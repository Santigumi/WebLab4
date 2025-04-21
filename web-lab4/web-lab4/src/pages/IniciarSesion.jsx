import { Box, Typography, Button, TextField } from "@mui/material";
import { Link, Navigate } from "react-router";
import { useState, useEffect } from "react";
const IniciarSesion = () => {
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("auth")) | false
  );
  function HandleAuth() {
    localStorage.setItem("auth", "true");
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#646199",
        margin: 0,
        padding: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          width: "50vw",
          height: "75vh",
          backgroundColor: "#dddddd",
          borderRadius: 10,
          boxShadow: 10,
        }}
      >
        <Box>
          <Typography variant="h3">Iniciar Sesión</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
            height: "70%",
          }}
        >
          <TextField
            sx={{ width: "70%", height: "20%" }}
            variant="outlined"
            label="Usuario"
          ></TextField>
          <TextField
            sx={{ width: "70%", height: "20%" }}
            variant="outlined"
            label="Contraseña"
          ></TextField>
          <Link to={"/Pedidos"}>
            <Button
              onClick={HandleAuth}
              sx={{ backgroundColor: "#646199", color: "white", boxShadow: 1 }}
            >
              Iniciar Sesión
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
export default IniciarSesion;