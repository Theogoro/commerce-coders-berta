import CartWidget from "./CartWidget"

const NavBar = (props) => {
  return <header>
    <nav className="flex justify-between items-center border-b-2 border-gray-100 bg-teal-700 text-white py-6 px-4">
      <h2 className="text-xl">Caf&eacute; de tus ojos</h2>
      <ul className="flex gap-6 justify-self-center">
        <li><a className="hover:underline" href="/">Colombiano</a></li>
        <li><a className="hover:underline" href="/">Venezolano</a></li>
        <li><a className="hover:underline" href="/">Producción Nacional</a></li>
      </ul>
      <CartWidget />
    </nav>
  </header>
}

export default NavBar;