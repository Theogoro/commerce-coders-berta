import { db } from "./firebaseConfig";
import { serverTimestamp, addDoc } from "firebase/firestore";
import getCollection from "./common/getCollection";
import { discoundStock } from "./product";

/**
 * @description Create a new order and return the id
 * @param {{name: string, email: string, phone: string}} buyer A buyer object
 * @param {[{id: Int, quantity: Int}]} products List of products
 * @param {float} Total price of the order
 */
export const createOrder = async (buyer, items, total) => {
  const order = {
    buyer,
    items,
    date: serverTimestamp(),
    total
  };

  const orderRef = await addDoc(getCollection(db, "orders"), order);

  for(let item of items) {
    await discoundStock(item.id, item.quantity);
  }

  return orderRef.id;
}