import Item from "./Item";
import LoadingItemsIndicator from "./LoadingItemsIndicator";

const ItemList = ({ items }) => {
  return (
    <>
      <h2 className="text-xl">Nuestros cafes</h2>

        {items.length === 0 && (
          <LoadingItemsIndicator />
        )}
      <ul className="product-wrapper grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid gap-3 content-center justify-center mb-6 p-4">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
};

export default ItemList;
