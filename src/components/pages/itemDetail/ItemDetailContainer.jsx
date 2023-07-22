import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../prdouctList";
import { useParams, useNavigate } from "react-router-dom";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});

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
    console.log(producto);
    console.log(cantidad);
    navigate("/cart");
  };

  return <ItemDetail producto={producto} onAdd={onAdd} />;
};

export default ItemDetailContainer;
