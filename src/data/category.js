import categories from "./categories.json"

/**
 * @description Return all categories
 * @returns {[{id: Int, name: String}]} Categories
 */
export const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(categories);
    }, 100);
  })
}

/**
 * @description Return one category
 * @param {String} name Name of the category
 * @returns {{id: Int, name: String}} Category
 */
export const getCategory = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(categories.find(category => category.name === name));
    }
    , 100);
  })
}