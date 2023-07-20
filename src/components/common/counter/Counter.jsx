import { Button, Grid, Paper, Typography } from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Counter = ({ contador, sumar, restar, onAdd }) => {
  return (
    <div style={{ width: "400px" }}>
      <Grid sx={{ display: "flex" }}>
        <Button variant="text" onClick={restar}>
          <RemoveCircleIcon />
        </Button>
        <Paper
          elevation={1}
          sx={{
            width: "auto",
            p: 2,
            alignSelf: "center",
            // justifyContent: "center",
          }}
        >
          <Typography
            variant="h6"
            color="initial"
            // align="center"
            align-items="center"
            sx={{ display: "flex" }}
          >
            {contador}
          </Typography>
        </Paper>
        <Button variant="text" onClick={sumar}>
          <AddCircleIcon />
        </Button>

        <Button
          variant="contained"
          style={{ fontSize: "12px" }}
          // sx={{
          //   maxWidth: "100px",
          //   maxHeight: "50px",
          //   minWidth: "50px",
          //   minHeight: "50px",
          // }}
          onClick={() => onAdd(contador)}
        >
          Agregar al carrito
        </Button>
      </Grid>
    </div>
  );
};

export default Counter;
