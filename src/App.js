import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"

import NavBar from './components/NavBar';
// import ItemListContainer from './components/ItemListContainer';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App bg-slate-50 min-h-screen">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer message="Inicio" />} />
          <Route path="/category/:catId" element={<ItemListContainer message="Categoria" />} />
          <Route path="/products/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
