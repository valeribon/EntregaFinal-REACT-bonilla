import { Button, Grid, Paper, Typography } from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Counter = ({ contador, sumar, restar, onAdd }) => {
  return (
    <div style={{ border: "2px solid steelblue", width: "390px" }}>
      <Grid xs={2} sx={{ display: "flex" }}>
        <Button variant="outlined" onClick={restar}>
          <RemoveCircleIcon />
        </Button>
        <Paper
          sx={{
            width: "50px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" color="initial" align="center">
            {contador}
          </Typography>
        </Paper>
        <Button variant="outlined" onClick={sumar}>
          <AddCircleIcon />
        </Button>

        <Button variant="contained" onClick={() => onAdd(contador)}>
          Agregar al carrito
        </Button>
      </Grid>
    </div>
  );
};

export default Counter;
