import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ defaultValue = [], children }) => {
  const [cart, setCart] = useState(defaultValue);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      updateQuantity(item, quantity);
      return;
    }

    setCart([...cart, {...item, quantity}]);
  };

  const updateQuantity = (item, quantity) => {
    setCart(
      cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity };
        }
        return cartItem;
      })
    );
  };

  const removeItem = (itemId) => {
    setCart((currentCart) =>
      currentCart.filter((cartItem) => cartItem.id !== itemId)
    );
  };

  const clear = () => setCart([]);

  const isInCart = (itemId) =>
    cart.filter((cartItem) => cartItem.id === itemId).length > 0;

  const getTotalQuantity = () =>
    cart.reduce((total, cartItem) => total + cartItem.quantity, 0);

  const getTotalPrice = () =>
    cart.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );

  const getItem = (itemId) => cart.filter((cartItem) => cartItem.id === itemId)[0];


  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clear,
        isInCart,
        updateQuantity,
        getTotalQuantity,
        getTotalPrice,
        getItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
