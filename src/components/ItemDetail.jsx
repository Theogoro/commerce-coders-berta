import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  return (
    <div className="grid  grid-cols-1 md:grid-cols-2">
      <figure className="w-full m-auto md:w-2/3 rounded overflow-hidden">
        <img className="w-full" src={item.pictureUrl} alt={item.title} />
      </figure>
      <div className="w-full">
        <h2 className="text-3xl mb-2">{item.title}</h2>
        <h3 className="text-2xl">Precio: ${item.price}</h3>
        <p>Stock: {item.stock}</p>
        <ItemCount stock={item.stock} initial={1} onAdd={(e) => alert(`Se agregaron ${e} al carrito`)} />
      </div>
    </div>
  );
};

export default ItemDetail;
