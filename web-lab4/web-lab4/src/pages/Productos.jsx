import { Box, Grid, Typography } from "@mui/material";
import ProductCard from "../components/Cards";
import Data from "../Data/Data";
import Navbar from "../components/Navbar";
const Productos = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        backgroundColor: "#73a5a8",
        width: "100vw",
        height: "auto",
        paddingTop: "2rem",
        paddingBottom: "1rem",
        gap: 5
      }}
    >
      <Box>
        <Typography variant={"h3"}>Windvibes Products</Typography>
      </Box>
      <Grid container spacing={2} sx={{width: "80%"}}>
        {Data.map((producto) => {
          return (
            <Grid item lg={3}>
              <ProductCard
                imgurl={producto.imgurl}
                nombre={producto.nombre}
                precio={producto.precio}
              ></ProductCard>
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
