import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../prdouctList";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});

  const { addToCart } = useContext(CartContext);

  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate();

  useEffect(() => {
    let productoSeleccionado = products.find((elemento) => elemento.id === +id);
    const tarea = new Promise((res) => {
      res(productoSeleccionado);
    });
    tarea.then((res) => setProducto(res));
  }, [id]);

  const onAdd = (cantidad) => {
    let productCart = { ...producto, quantity: cantidad };
    addToCart(productCart);
    // console.log(producto);
    // console.log(cantidad);
    navigate("/cart");
  };

  return <ItemDetail producto={producto} onAdd={onAdd} />;
};

export default ItemDetailContainer;
