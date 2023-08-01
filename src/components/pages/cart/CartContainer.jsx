import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Button } from "@mui/material";

const CartContainer = () => {
  const { cart, clearCart, deleteById } = useContext(CartContext);
  console.log(cart);

  return (
    <div>
      <h1>CartContainer</h1>
      {cart.map((element) => {
        return (
          <div key={element.id}>
            <h4>{element.title}</h4>
            <h4>{element.price}</h4>
            <h4>{element.quantity}</h4>
            <Button onClick={() => deleteById(element.id)}>Eliminar</Button>
          </div>
        );
      })}
      <Button onClick={clearCart}>Limpiar carrito</Button>
    </div>
  );
};

export default CartContainer;
