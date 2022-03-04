import {collection} from "firebase/firestore";

/**
 * 
 * @param {String} collectionName Es el nombre de la collección en firestore
 * @returns {CollectionReference} Es la referencia a la collección
 */
 const getCollection = (db, collectionName) => {
  return collection(db, collectionName);
}

export default getCollection;