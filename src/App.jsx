import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import AboutContainer from "./components/pages/about/AboutContainer";
import Layout from "./components/layouts/Layout";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import CheckoutContainer from "./components/pages/checkout/CheckoutContainer";
import ManyThanksContainer from "./components/pages/manyThanks/ManyThanksContainer";

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
          <Route path="/checkout" element={<CheckoutContainer />} />
          <Route path="/manythanks" element={<ManyThanksContainer />} />
        </Route>
        <Route path="/*" element={<h1>404 not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
