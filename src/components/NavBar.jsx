import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { getCategories } from "../data/category";

const ToogleButton = ({ onClick }) => {
  return (
    <button
      className="outline-none mobile-menu-button md:hidden"
      onClick={onClick}
    >
      <svg
        className="w-6 h-6 text-gray-500"
        x-show="!showMenu"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="white"
      >
        <path d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  );
};

const NavBar = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(categories => setCategories(categories));
  }, []);

  return (
    <header>
      <nav className="flex justify-between items-center border-b-2 border-gray-100 bg-teal-700 text-white py-6 px-4">
        <ToogleButton onClick={() => setShowMenu(true)} />

        <Link to="/">
          <h2 className="text-xl hover:text-slate-400 transition">
            Caf&eacute; de tus ojos
          </h2>
        </Link>

        {/* Responsive BTN */}
        <ul
          className={`flex gap-6 justify-self-center ${
            showMenu
              ? "flex-col fixed inset-x-0 w-100-vw h-100-vh inset-y-0 bg-slate-50 z-50 text-black p-4"
              : "hidden"
          }  md:flex items-center`}
        >
          <li className="md:hidden font-bold text-2xl">
            <h3>Menu</h3>
          </li>

          {categories.map(category => (
            <li key={category.id}>
              <NavLink
                to={`/category/${category.name}`}
                className={({ isActive }) => `${isActive ? "scale-110 underline" : ""} hover:underline transition block`}

              >
                {category.name}
              </NavLink>
            </li>
          ))}

          {categories.length === 0 && (<div className="animate-pulse w-20 bg-white" />)}

          {/* Close Responsive menu BTN */}
          <li>
            <button
              className="md:hidden border rounded text-grey-100 p-2 px-4"
              onClick={() => setShowMenu(false)}
            >
              Cerrrar
            </button>
          </li>
        </ul>
        <CartWidget />
      </nav>
    </header>
  );
};

export default NavBar;
