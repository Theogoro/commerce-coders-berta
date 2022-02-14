import products from "./products.json"

/**
 * @description Return all products
 * @param {Int} seconds Segundos que se quieren usar como mock
 * @returns {[{id: Int, title: String, price_ Floar, pictureUrl: String, stock: Int}]} Lista de productos
 */
export const getProducts = (seconds) => {
  return new  Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(products);
    }, seconds * 1000);
  })
};

/**
 * @description Return all products
 * @param {Int} seconds Segundos que se quieren usar como mock
 * @param {Int} id Id del producto que se quiere obtener
 * @returns {{id: Int, title: String, price_ Floar, pictureUrl: String, stock: Int}} Productos
 */
 export const getProduct = (id) => {
  return new  Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(products[id]);
    }, 2000);
  })
};

