import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { products } from "../../../prdouctList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState({});

  const { categoryName } = useParams();
  console.log("Category Name", categoryName);

  useEffect(() => {
    let productFiltered = products.filter(
      (elemento) => elemento.category === categoryName
    );
    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categoryName === undefined ? products : productFiltered);
      }, 1000);
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((error) => setError(error));
  }, [categoryName]);

  // if(items.length === 0){
  //   return <h1>Cargando...</h1>
  // }

  return (
    <>
      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;
