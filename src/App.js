import React from 'react';
import './App.css';
import { NavBar } from "./Components/NavBar.js"
import { ItemListContainer } from './Components/ItemListContainer';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ItemDetailContainer from './Components/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/detail/:itemId' element={<ItemDetailContainer />} />

    
      <Route path='*' element={<Navigate to="/"/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
