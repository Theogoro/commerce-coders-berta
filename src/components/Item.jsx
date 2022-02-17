import { Link } from "react-router-dom";

const Item = ({ item }) => {
  const { id, title, price, pictureUrl } = item;

  return (
    <li
      className="card-wrapper shadow w-auto md:w-60 lg:w-4/5 overflow-hidden rounded-md m-auto hover:scale-105 transition group bg-white"
      id={id}
    >
      <Link to={`/products/${id}`} className="block">
        <div className="card-image w-100 p-2">
          <img className="w-100 rounded-md" src={pictureUrl} alt={title} />
        </div>
        <div className="card-content flex flex-col text-center">
          <h3 className="card-title h-16 p-2">{title}</h3>
          <p className="bg-amber-300 text-white text-s group-hover:bg-amber-500 transition">
            ${price}
          </p>
        </div>
      </Link>
    </li>
  );
};

export default Item;
