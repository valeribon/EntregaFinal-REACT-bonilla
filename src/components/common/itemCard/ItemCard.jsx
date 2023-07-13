import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ItemCard = ({ elemento }) => {
  return (
    <>
      <Card key={elemento.id} sx={{ width: "300px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={elemento.img}
            alt="Cable con tela celeste"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {elemento.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {elemento.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={`/itemDetail/${elemento.id}`}>
              <Button>Ver detalle</Button>
            </Link>
          </CardActions>
        </CardActionArea>
      </Card>
    </>
  );
};

export default ItemCard;
