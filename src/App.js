import React from 'react';

import NavBar from './components/NavBar';
// import ItemListContainer from './components/ItemListContainer';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <ItemListContainer message="Hola desde ItemListContainer"/> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
