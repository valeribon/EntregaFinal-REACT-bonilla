import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  // Creo un solo useState para el objeto de datos que quiero crear en base a los inputs
  const [data, setData] = useState({
    nombre: "",
    apellido: "",
  });

  const navigate = useNavigate();

  // funcion que se ejecuta cuando se apreta el boton submit de la form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Se envio");
    // AXIOS.POST(url, data)
    console.log(data);
    navigate("/manythanks");
  };

  // Funcion que recibe un evento con data, le digo que me exparsa toda la data
  // pero que, en este caso, el nombre lo cambie por lo que esta en e.target.value
  // del input field done se ejecuta esta funcion - capturarNombre - en el onChange.
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  return (
    <>
      <Box
        container
        sx={{
          width: "auto",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
        }}
      >
        <Box
          sx={{
            width: "450px",
            height: "300px",
            // display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            p: 2,
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            Checkout
          </Typography>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nombre"
              name="nombre"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Apellido"
              name="apellido"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Direccion de envio"
              name="direccion"
              onChange={handleChange}
            />
            <Button type="submit">Comprar</Button>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Checkout;
