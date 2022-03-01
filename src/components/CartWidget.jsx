import { ShoppingCartIcon } from "@heroicons/react/outline";
import { useContext, useMemo } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = (props) => {

  const { getTotalQuantity, cart } = useContext(CartContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const totalQuantity = useMemo(() =>getTotalQuantity(), [cart]);

  return (
    <div className="cart-wrapper relative cursor-pointer mr-6">
      <ShoppingCartIcon width={16} />
      {
        totalQuantity > 0 &&
        (<span className="cart-count absolute -top-3 -right-4 bg-amber-600 rounded-full text-white w-6 text-center text-xs">
          {totalQuantity}
        </span>)
      }
    </div>
  );
};

export default CartWidget;