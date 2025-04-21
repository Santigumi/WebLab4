import { Grid, Box, Typography, Button } from "@mui/material";
import Navbar from "../components/Navbar";
const Inicio = () => {
  return (
    <Grid container spacing={0} sx={{ height: "100vh", width: "100vw" }}>
      <Grid
        item
        xl={6}
        lg={6}
        md={6}
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "Column",
          justifyContent: "end",
          backgroundColor: "#e6d021",
          height: "100%",
          width: "50%",
          padding: "1rem",
          gap: 3,
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Typography variant="h2">Windvibes store</Typography>
          <Typography variant="h4">Sé libre como el viento</Typography>
        </Box>
        <Box>
          <Typography variant="body1" sx={{ width: "90%" }}>
            Bienvenido a Windvibes, una tienda colombiana enfocada en vender
            productos hippies: desde ropa, accesorios y algunas articulos para
            el hogar, expresa tu libertad y creatividad con este estilo lleno de
            color y cómodidad, rechaza el minimalismo sobrio y los grises
            aburridos.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              backgroundColor: "#73a5a8",
              padding: "0.5rem",
              borderRadius: 10,
              boxShadow: 1,
            }}
            variant="subtitle1"
          >
            Prendas 100% algodón
          </Typography>
          <Typography
            sx={{
              backgroundColor: "#73a5a8",
              padding: "0.5rem",
              borderRadius: 10,
              boxShadow: 1,
            }}
            variant="subtitle1"
          >
            Empresa por y para Colombianos
          </Typography>
          <Typography
            sx={{
              backgroundColor: "#73a5a8",
              padding: "0.5rem",
              borderRadius: 10,
              boxShadow: 1,
            }}
            variant="subtitle1"
          >
            Asesoría de imágen
          </Typography>
        </Box>
        <Navbar></Navbar>
      </Grid>
      <Grid
        item
        xl={6}
        lg={6}
        md={6}
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#e6d021",
          width: "50%",
        }}
      >
        <img
          style={{ height: "99vh", width: "50vw", margin: 0, borderRadius: 10 }}
          src="https://i.pinimg.com/1200x/e2/fe/d8/e2fed8f80bc59aa19ca5c63789111513.jpg"
          alt="Imagen promocional de una tienda hippie"
        ></img>
      </Grid>
    </Grid>
  );
};

export default Inicio;
