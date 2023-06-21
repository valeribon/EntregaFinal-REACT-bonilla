import Navbar from "./components/layouts/navbar/Navbar";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";

const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"Bienvenidos"} />
    </>
  );
};

export default App;
