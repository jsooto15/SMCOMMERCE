import React, { useContext } from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ItemList } from "./componets/ItemList";
import  {Navbar}  from "./componets/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShoppingCart } from "./componets/ShoppingCart";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import ItemDetail  from "./componets/ItemDetail";
import Home from './componets/Home';


const App = () => {
  return (
    <>
   
   <ShoppingCartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/itemlist" element={<ItemList />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/products/:productId" element={<ItemDetail/>} />
        </Routes>
      </Router>
    </ShoppingCartProvider>
    </>
  )
}
export default App
