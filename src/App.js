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
        <ItemList item1="Silla" precio="$70.000"/>
      </main>
    </div>
  );
}

export default App;
