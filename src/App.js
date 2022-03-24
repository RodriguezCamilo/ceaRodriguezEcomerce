import React from 'react';
import './App.css';
import {NavBar} from "./Components/NavBar.js"
import { ItemListContainer } from './Components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <main>
        <h1>Gaming shop</h1>
        <ItemListContainer/>
      </main>
    </div>
  );
}
export default App;
