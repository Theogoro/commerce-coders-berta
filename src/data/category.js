import {db} from "./firebaseConfig";
import {getDocs, query} from "firebase/firestore";
import getCollection from "./common/getCollection";

/**
 * @description Return all categories
 * @returns {[{id: Int, name: String}]} Categories
 */
export const getCategories = async() => {
  const categoriesSnapshot = await getDocs(query(getCollection(db, "categories")));
  const categories = categoriesSnapshot.docs.map(doc => {
    return {
      id: doc.id,
      ...doc.data()
    }
  }
  );
  return categories;
}