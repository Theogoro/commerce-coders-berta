import { db } from "./firebaseConfig";
import { doc, getDocs, getDoc, query, where } from "firebase/firestore";
import getCollection from "./common/getCollection";

/**
 * @description Return all products
 * @param {Int} id Id of the category
 * @returns {[{category: Int, id: Int, title: String, price_ Floar, pictureUrl: String, stock: Int, description: String}]} Lista de productos
 */
export const getProducts = async (catId) => {

  let q;

  if (catId) {
    q = query(getCollection(db, "products"), where("category", "==", catId));
  } else {
    q = query(getCollection(db, "products"));
  }

  const productsSnapshot = await getDocs(q);

  const products = productsSnapshot.docs.map(doc => {
    return {
      id: doc.id,
      ...doc.data()
    }
  });

  return products;
};

/**
 * @description Return all products. Si el producto no existe, retorna un undefined
 * @param {Int} id Id del producto que se quiere obtener
 * @returns {{id: Int, title: String, price_ Floar, pictureUrl: String, stock: Int, description: String}} Productos
 */
export const getProduct = async (id) => {
  const productSnapshot = await getDoc(doc(db, `products/${id}`));

  return {
    id: productSnapshot.id,
    ...productSnapshot.data()
  };
};

