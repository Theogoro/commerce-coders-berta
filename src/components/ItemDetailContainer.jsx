import React, { useState, useEffect } from "react";
import { getProduct } from "../data/product";
import ItemDetail from "./ItemDetail";
import LoadingItemsIndicator from "./LoadingItemsIndicator";

const ItemDetailContainer = () => {

  const [item, setItem] = useState(null);

  useEffect(() => {
    getProduct(0).then(data => setItem(data));
  }, []);

  return (
    <div className="px-10 py-3">
      {item && <ItemDetail item={item} />}
      {!item && <LoadingItemsIndicator />}
    </div>
  );
};

export default ItemDetailContainer;