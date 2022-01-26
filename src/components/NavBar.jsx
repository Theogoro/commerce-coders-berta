const NavBar = (props) => {
  return <header>
    <nav className="flex justify-between items-center border-b-2 border-gray-100 bg-teal-700 text-white py-6 px-4 md:justify-start md:space-x-10">
      <h2 className="text-xl">Caf&eacute; de tus ojos</h2>
      <ul className="flex gap-6 justify-self-center">
        <li><a className="hover:underline" href="/">Inicio</a></li>
        <li><a className="hover:underline" href="/">Nuestros Cafes</a></li>
        <li><a className="hover:underline" href="/">¿Quienes somos?</a></li>
      </ul>
    </nav>
  </header>
}

export default NavBar;