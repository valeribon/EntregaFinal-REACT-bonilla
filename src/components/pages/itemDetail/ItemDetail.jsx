import CounterContainer from "../../common/counter/CounterContainer";

const ItemDetail = ({ producto, onAdd }) => {
  return (
    <div>
      <h2>{producto.title}</h2>
      <h4>{producto.price}</h4>

      <CounterContainer stock={producto.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;
