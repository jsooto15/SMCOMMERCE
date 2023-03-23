import React, { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { Link } from "react-router-dom";


export const Item = ({ name, price, id, imgUrl, detail , isDetail}) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    setCart((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === id);
      if (isItemsFound) {
        return currItems.map((item) => {
          if (item.id === id ){
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;}
        });
      } else {
        return [...currItems, { id, quantity: 1, price,name,detail }];
      }
    });
  };

  const removeItem = (id) => {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };




  const getQuantityById = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  const quantityPerItem = getQuantityById(id);

  return (
    <div className="item-box">
      {quantityPerItem > 0 && (
        <div className="item-quantity">{quantityPerItem}</div>
      )}

      <div className="name">{name}</div>
      
      <img src={imgUrl} width="150" height="150" />
       
      <div className="item-price">${price}</div>
      <div className="item-price">{detail}</div>

       <div className="about">
      <Link to={`/products/${id}`}>About it</Link>
      </div>

      {quantityPerItem === 0 ? (
        <button className="item-add-button" onClick={() => addToCart()}>
          + Add to cart
        </button>
      ) : (
        <button className="item-plus-button" onClick={() => addToCart()}>
          + add more
        </button>
      )}

      {quantityPerItem > 0 && (
        <button className="item-minus-button" onClick={() => removeItem(id)}>
          subtract item
        </button>
      )}
    </div>
  );
};