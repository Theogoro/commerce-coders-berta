const BuyerForm = (props) => {
  const { setBuyerData } = props;

  const handleChange = (e, key) => {
    const inputValue = e.target.value;
    setBuyerData((prevState) => ({
      ...prevState,
      [key]: inputValue,
    }));
  };

  return (
    <form className="flex flex-col gap-2 mt-2">
      <h3 className="font-bold text-2xl">Tus datos</h3>
      <label htmlFor="">Nombre</label>
      <input
        className="border rounded px-2 py-1"
        id="input-name"
        type="text"
        placeholder="Tu nombre..."
        onChange={(e) => handleChange(e, "name")}
      />
      <label htmlFor="">Email</label>
      <input
        className="border rounded px-2 py-1"
        id="input-email"
        type="email"
        placeholder="Tu email..."
        onChange={(e) => handleChange(e, "email")}
      />
      <label htmlFor="">Telefono</label>
      <input
        className="border rounded px-2 py-1"
        id="input-phone"
        type="phone"
        placeholder="Tu numero de telefono"
        onChange={(e) => handleChange(e, "phone")}
      />
    </form>
  );
};

export default BuyerForm;
