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
}