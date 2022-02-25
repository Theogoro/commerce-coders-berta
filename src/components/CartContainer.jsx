import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

import CartList from "./CartList";

const CartContainer = () => {
  const { cart, getTotalQuantity, getTotalPrice, clear } = useContext(CartContext);
  const navegator = useNavigate();

  const handleCheckout = () => {
    alert("Se hizo tu pedido! Gracias! \n En breve te contactaremos.");
    clear();
    navegator("/");
  };

  return (
    <div className="CartContainer px-4 py-2 max-w-md mx-auto mt-2 border bg-white rounder shadow">
      <h2 className="font-bold text-2xl">Carrito</h2>
      {getTotalQuantity() > 0 ? (
        <>
          <CartList cart={cart} />
          <div className="flex justify-between items-center mt-2">
            <p className="text-xl">Total: ${getTotalPrice()}</p>
            <button
              className="border px-4 py-2 block text-center shadow rounded border-amber-500 text-amber-500 hover:border-amber-700 hover:text-amber-700 transition"
              onClick={handleCheckout}
            >
              Pagar
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="text-4xl text-center font-bold my-2">
            😢
          </p>
          <p>
            No hay productos en el carrito.{" "}
            <Link
              to="/"
              className="text-amber-500 hover:underline hover:text-amber-700 transition"
            >
              Ver productos!
            </Link>
          </p>
        </>
      )}
    </div>
  );
};

export default CartContainer;
