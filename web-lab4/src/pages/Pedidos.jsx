import { Box, Grid, Typography } from "@mui/material";
import PedidosCard from "../components/PedidosCard";
import Data from "../Data/Data2";
import Navbar from "../components/Navbar";
const Productos = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#d7573b",
        width: "100vw",
        height: "100vh",
        gap: 5
      }}
    >
      <Box>
        <Typography variant={"h3"}>Tus pedidos</Typography>
      </Box>
      <Grid container spacing={2} sx={{width: "80%"}}>
        {Data.map((producto) => {
          return (
            <Grid item lg={3}>
              <PedidosCard
                imgurl={producto.imgurl}
                nombre={producto.nombre}
                precio={producto.precio}
                fecha={producto.fecha}
              ></PedidosCard>
            </Grid>
          );
        })}
      </Grid>
      <Box sx={{ width:"100vh"}}>
      <Navbar></Navbar>
      </Box>
    </Box>
  );
};
export default Productos;
