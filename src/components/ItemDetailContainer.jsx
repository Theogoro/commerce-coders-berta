import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getProduct } from "../data/product";
import ItemDetail from "./ItemDetail";
import LoadingItemsListIndicator from "./LoadingItemsListIndicator";

const ItemDetailContainer = () => {

  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getProduct(parseInt(id)).then(data => setItem(data));

    /** 
     * Incluimos el ID del producto en la lista de dependencias para que cuando el producto cambie,
     * se actualice el componente con el nuevo producto 
     * */
  }, [id]);

  return (
    <div className="px-10 py-3">
      {item && <ItemDetail item={item} />}
      {!item && <LoadingItemsListIndicator />}
    </div>
  );
};

export default ItemDetailContainer;