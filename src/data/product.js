import products from "./products.json"

/**
 * @description Return all products
 * @param {Int} id Id of the category
 * @returns {[{category: Int, id: Int, title: String, price_ Floar, pictureUrl: String, stock: Int, description: String}]} Lista de productos
 */
export const getProducts = (catId) => {

  console.log(catId)

  return new  Promise((resolve, reject) => {
    console.log("Promesa de productos", products)
    setTimeout(()=>{
      resolve(catId ? products.filter(product => product.category === catId) : products);
    }, 2000);
  })
};

/**
 * @description Return all products
 * @param {Int} id Id del producto que se quiere obtener
 * @returns {{id: Int, title: String, price_ Floar, pictureUrl: String, stock: Int, description: String}} Productos
 */
export const getProduct = (id) => {
  return new  Promise((resolve, reject) => {
    setTimeout(()=>{
      
      // Como por el momento no tenemos una base de datos, buscamos el producto en la lista de productos y le restamos uno
      resolve(products.find(product => product.id === id));
    }, 500);
  })
};

