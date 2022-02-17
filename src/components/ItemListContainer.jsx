import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getProducts } from "../data/product";
import LoadingItemsListIndicator from "./LoadingItemsListIndicator";

const ItemListContainer = (props) => {
  const { message } = props;
  const { catId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    getProducts(catId).then(items => setItems(items));
  }, [catId]);

  return (
    <>
      <h2 className="font-bold text-2xl mx-3 mt-2">{message}</h2>
      {items.length === 0 && <LoadingItemsListIndicator /> }
      {items.length > 0 && <ItemList items={items} />}
    </>
  );
};

export default ItemListContainer;
