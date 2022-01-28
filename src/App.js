import React from 'react';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer message="Hola desde ItemListContainer"/>
    </div>
  );
}

export default App;
