import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/ShoppingCartContext";
import CartWidget from '../componets/CartWidget';
import image from '../assets/logo.png'
export const Navbar = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const navStyles = {
    color: "#fff",
    listStyle: "none",
    textDecoration: "none",
  };

  return (
   <nav>
   <Link to={"/"} style={navStyles}>
      <img src={image} width="180" height="80"/><br></br><span>COMMERCE</span>
    </Link>
      <ul className="nav-list">
    <Link to={"/itemlist"} style={navStyles}>
        <li>
         <h3>Catalogo</h3>
        </li>
    </Link>
    <Link to={"/cart"}  style={navStyles}>
        <CartWidget/><span className="cart-count">{quantity}</span>
    </Link>
      </ul>
    </nav>
  );
};

