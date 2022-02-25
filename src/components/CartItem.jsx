import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = (props) => {
  const { item } = props;

  const { removeItem, updateQuantity } = useContext(CartContext);

  const handleModifyQuantity = (amount) => {
    const newQuantity = item.quantity + amount;

    if (newQuantity > 0 && newQuantity <= item.stock) {
      updateQuantity(item, newQuantity);
      return;
    }

    alert("La cantidad debe ser mayor a 0 y menor o igual al stock");
  };

  return (
    <li className="border-b-2 border-gray-100 p-4">
      <div className="flex justify-between items-center">
        <div className="w-1/3">
          <img
            className="w-20 h-20 rounded mr-4"
            src={item.pictureUrl}
            alt={item.title}
          />
        </div>
        <div className="flex flex-col w-2/3">
          <h3 className="text-sm">{item.title}</h3>
          <span className="text-sm">${item.price}</span>
        </div>
        <div className="flex flex-col gap-2">
          <button className="border p-1 rounded w-8" onClick={() => handleModifyQuantity(1)}>+</button>
          <span className="text-md text-center">x{item.quantity}</span>
          <button className="border p-1 rounded w-8" onClick={() => handleModifyQuantity(-1)}>-</button>
        </div>
      </div>
      <div className="flex flex-col flex-end">
        <button className="border border-amber-500 text-amber-500 hover:border-amber-700 hover:text-amber-700 trnasition mt-2 rounded" onClick={() => removeItem(item.id)}>Eliminar</button>
      </div> 
    </li>
  );
};

export default CartItem;
