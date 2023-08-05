import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CartContainer = () => {
  const { cart, clearCart, deleteById } = useContext(CartContext);
  console.log(cart);
  const navigate = useNavigate();

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
      {cart.length > 0 && <Button onClick={clearCart}>Limpiar carrito</Button>}
      <Button
        onClick={() => {
          navigate("/checkout");
        }}
      >
        Checkout
      </Button>
    </div>
  );
};

export default CartContainer;
