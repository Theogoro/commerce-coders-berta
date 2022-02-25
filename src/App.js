import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import CartContainer from './components/CartContainer';
import CartProvider from './context/CartContext';

import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="App bg-slate-50 min-h-screen">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer message="Inicio" />} />
            <Route path="/category/:catId" element={<ItemListContainer message="Categoria" />} />
            <Route path="/products/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
