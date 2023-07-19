// import ItemCard from "../../common/itemCard/ItemCard";
import ItemCardContainer from "../../common/itemCard/ItemCardContainer";
// import ItemCardContainer from "../../common/itemCard/ItemCardContainer";

const ItemList = ({ items }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {items.map((elemento) => {
        return <ItemCardContainer key={elemento.id} elemento={elemento} />;
      })}
    </div>
  );
};

export default ItemList;
