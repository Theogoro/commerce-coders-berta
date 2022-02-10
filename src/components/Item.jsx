const Item = ({ item }) => {
  const { id, title, price, pictureUrl } = item;

  return (
    <li className="card-wrapper shadow w-auto md:w-60 lg:w-4/5 overflow-hidden rounded-md m-auto hover:scale-105 transition group bg-white" id={id}>
      {/* Por el momento la URL no anda y va a dar error, pero más adelante se implementara el routing */}
      <a href={`/products/${id}`} className="block">
        <div className="card-image w-100 p-2">
          <img className="w-100 rounded-md" src={pictureUrl} alt={title} />
        </div>
        <div className="card-content flex flex-col text-center">
          <h3 className="card-title">{title}</h3>
          <p className="bg-amber-300 text-white text-s group-hover:bg-amber-400 transition">${price}</p>
        </div>
      </a>
    </li>
  );
};

export default Item;
