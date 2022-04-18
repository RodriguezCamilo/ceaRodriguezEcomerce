import React from 'react';
import './App.css';
import { NavBar } from "./Components/NavBar.js"
import { ItemListContainer } from './Components/ItemListContainer';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ItemDetailContainer from './Components/ItemDetailContainer';
import { Cart } from './Components/Cart';
import { CartProvider } from './context/CartContext';
import Checkout from './Components/Checkout';


function App() {


  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/detail/:itemId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />


          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
export default App;
