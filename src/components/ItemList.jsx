import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <ul className="product-wrapper grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid gap-3 content-center justify-center p-4">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ItemList;
