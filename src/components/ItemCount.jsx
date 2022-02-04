import React, { useState } from "react";

const ItemCountButton = (props) => {
  const { fn, text } = props;

  return (
    <button
      className="text-amber-600 transition hover:bg-gray-100 h-full w-20 rounded cursor-pointer outline-none text-xl"
      onClick={fn}
    >
      {text}
    </button>
  );
};

const ItemCount = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const reduceCounter = () => {
    if (counter !== 1) {
      setCounter(counter - 1);
    }
  };

  const increaseCounter = () => {
    if (counter !== stock) {
      setCounter(counter + 1);
    }
  };

  const clickHandler = () => {
    onAdd(counter);
    setCounter(initial);
  };

  return (
    <div className="item-count-wrapper flex flex-col gap-2 overflow-hidden">
      <div className="flex flex-row bg-white border h-10 rounded-lg relative mt-1 w-40 content-center shadow-lg">
        <ItemCountButton fn={reduceCounter} text="-" />
        <p className="w-40 text-center h-full items-center align-middle leading-loose">
          {counter}
        </p>
        <ItemCountButton fn={increaseCounter} text="+" />
      </div>
      <button
        className="border border-amber-500 text-amber-500 hover:border-amber-700 hover:text-amber-700 h-10 rounded-lg relative bg-white mt-1 w-40 transition"
        onClick={clickHandler}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
