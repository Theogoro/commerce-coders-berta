import CartItem from "./CartItem";

const CartList = (props) => {
  const {cart} = props;

  return (
    <ul className="CartList">
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default CartList;
