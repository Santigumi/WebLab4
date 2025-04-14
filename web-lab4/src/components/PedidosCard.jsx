import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
const PedidosCard = ({ imgurl, nombre, precio, fecha }) => {
  return (
    <Card
      sx={{
        width: "15vw",
        height: "60vh",
        borderRadius: 5,
        boxShadow: 5,
        cursor: "pointer",
      }}
    >
      <CardMedia sx={{ height: "60%" }}>
        <img style={{ width: "100%", height: "100%" }} src={imgurl} />
      </CardMedia>
      <CardContent sx={{ height: "40%", color: "black" }}>
        <Typography variant={"body1"}>{nombre}</Typography>
        <Typography variant={"h6"}>${precio}</Typography>
        <Typography variant={"body1"}>Fecha de entrega: {fecha}</Typography>
      </CardContent>
    </Card>
  );
};
export default PedidosCard;
