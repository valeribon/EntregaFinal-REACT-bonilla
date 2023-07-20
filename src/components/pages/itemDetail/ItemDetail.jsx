// import { Box, Grid, Typography } from "@mui/material";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import CounterContainer from "../../common/counter/CounterContainer";
// import ItemCardContainer from "../../common/itemCard/ItemCardContainer";
// import { Link } from "react-router-dom";

const ItemDetail = ({ producto, onAdd }) => {
  return (
    <Grid container sx={{ justifyContent: "center" }}>
      <Card key={producto.id} sx={{ width: "300px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={producto.img}
            alt="Cable con tela celeste"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {producto.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {producto.description}
            </Typography>
          </CardContent>
          <CardActions>
            <CounterContainer stock={producto.stock} onAdd={onAdd} />
          </CardActions>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default ItemDetail;
