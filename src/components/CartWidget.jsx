import { ShoppingCartIcon } from "@heroicons/react/outline";
import "./styles/CartWidget.css";

const CartWidget = (props) => {
  return (
    <div className="cart-wrapper relative cursor-pointer mr-6">
      <ShoppingCartIcon width={16} />
      <span className="cart-count absolute -top-3 -right-3 bg-amber-600 rounded-full text-white w-4 text-center text-xs">
        {4}
      </span>
    </div>
  );
};

export default CartWidget;