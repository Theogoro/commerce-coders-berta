import { useEffect } from "react";

const CartMessage = (props) => {
  const { text, type, fn } = props.message;
  const messageClass = type === "error" ? "text-red-500" : "text-green-500 bold";

  useEffect(() => {
    if (fn) {
      fn();
    }
  }, [fn]);

  return (
    <div className={`CartMessage ${messageClass} h-10`}>
      <p>{text}</p>
    </div>
  );
};

export default CartMessage;
