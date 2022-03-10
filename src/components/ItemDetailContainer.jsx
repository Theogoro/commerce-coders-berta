import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getProduct } from "../data/product";
import ItemDetail from "./ItemDetail";
import LoadingItemsListIndicator from "./LoadingItemsListIndicator";

const ItemDetailContainer = () => {

  const { id } = useParams();
  const [item, setItem] = useState(null);
  const navegator = useNavigate();

  useEffect(() => {
    getProduct(parseInt(id)).then(data => {
      if (!data.title) {
        alert("Producto no encontrado! Redireccionando a la home...");
        navegator("/");
        return;
      }

      setItem(data);
    });
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="px-10 py-3">
      {item && <ItemDetail item={item} />}
      {!item && <LoadingItemsListIndicator />}
    </div>
  );
};

export default ItemDetailContainer;