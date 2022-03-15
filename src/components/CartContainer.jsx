import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../data/order";

import BuyerForm from "./BuyerForm";
import CartList from "./CartList";
import CartMessage from "./CartMessage";

const CartContainer = () => {
  const [buyerData, setBuyerData] = useState({});
  const [message, setMessage] = useState("");
  const { cart, getTotalQuantity, getTotalPrice, clear } =
    useContext(CartContext);
  const navegator = useNavigate();

  const handleCheckout = () => {
    const isBuyerDataValid =
      Object.keys(buyerData).length > 0 &&
      buyerData?.name?.length > 0 &&
      buyerData?.email?.length > 0 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(buyerData?.email) &&
      buyerData?.phone?.length > 0;

    if (!isBuyerDataValid) {
      setMessage({
        type: "error",
        text: "Por favor completa/corrige tus datos para que podamos procesar tu pedido",
      });
      return;
    }

    const cartReduced = cart.map((item) => ({
      id: item.id,
      quantity: item.quantity,
      price: item.price,
      title: item.title,
    }));

    createOrder(buyerData, cartReduced, getTotalPrice())
      .then((orderId) => {
        setMessage({
          text: `Tu orden ha sido registrada con el id ${orderId}. Gracias!`,
          type: "success",
          fn: () => {
            setTimeout(() => {
              clear();
              navegator("/");
            }, 3000);
          },
        });
      })
      .catch((error) => {
        console.error(error);
        setMessage({
          text: "Hubo un error al procesar tu pedido. Por favor intenta nuevamente",
          type: "error",
        });
      });
  };

  return (
    <div className="CartContainer px-4 py-2 max-w-md mx-auto my-4  border bg-white rounder shadow">
      <h2 className="font-bold text-2xl">Carrito</h2>

      {getTotalQuantity() > 0 ? (
        <>
          <CartList cart={cart} />
          <BuyerForm setBuyerData={setBuyerData} />
          <div className="flex justify-between items-center mt-2">
            <p className="text-xl">Total: ${getTotalPrice()}</p>
            <button
              className="border px-4 py-2 block text-center shadow rounded border-amber-500 text-amber-500 hover:border-amber-700 hover:text-amber-700 transition"
              onClick={handleCheckout}
            >
              Pagar
            </button>
          </div>
          <CartMessage message={message} />
        </>
      ) : (
        <>
          <p className="text-4xl text-center font-bold my-2">😢</p>
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
