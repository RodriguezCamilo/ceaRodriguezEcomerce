import React from 'react';
import './App.css';
import {NavBar} from "./Components/NavBar.js"
import {ItemList} from "./Components/ItemListContainer.js"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemList/>
    </div>
  );
}

export default App;
