import React from 'react';
import './App.css';
import {NavBar} from "./Components/NavBar.js"
import {ItemList} from "./Components/ItemListContainer.js"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <main>
        <h1>Gaming shop</h1>
        <ItemList/>
      </main>
    </div>
  );
}

export default App;
