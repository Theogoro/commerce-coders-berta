import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
  const { message } = props;

  return (
    <>
      <div>{message}</div>
      <ItemCount
        stock={5}
        initial={1}
        onAdd={(e) => alert(`Se agregaron ${e} elementos al carrito!`)}
      />
    </>
  );
};

export default ItemListContainer;
