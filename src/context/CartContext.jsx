import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existeEnCart = isInCart(item.id);

    if (existeEnCart) {
      let newArray = cart.map((elemento) => {
        if (elemento.id === item.id) {
          return { ...elemento, quantity: elemento.quantity + item.quantity };
        } else {
          return elemento;
        }
      });

      setCart(newArray);
    } else {
      setCart([...cart, item]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const deleteById = (id) => {
    console.log(id);
    let newArray = cart.filter((elemento) => elemento.id !== id);
    setCart(newArray);
  };

  const isInCart = (id) => {
    let exist = cart.some((elemento) => elemento.id === id);
    return exist;
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteById,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
