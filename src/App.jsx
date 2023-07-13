import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import AboutContainer from "./components/pages/about/AboutContainer";
import Layout from "./components/layouts/Layout";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/about" element={<AboutContainer />} />
          <Route path="/cart" element={<CartContainer />} />
        </Route>
        <Route path="/*" element={<h1>404 not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
