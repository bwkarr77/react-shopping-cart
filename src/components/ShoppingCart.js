import React, { useContext, useEffect } from "react";

// Components
import Item from "./ShoppingCartItem";

import { CartContext } from "../contexts/CartContext";

const ShoppingCart = () => {
  const { cart } = useContext(CartContext);
  const getCartTotal = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  useEffect(() => {
    handleLocalStorage();
  });
  const handleLocalStorage = data => {
    console.log("handleLocalStorage ran", cart);
    localStorage.setItem("product-list", cart ? cart : "");
  };

  return (
    <div className="shopping-cart">
      {cart.map(item => {
        return (
          <div>
            <Item key={item.id} {...item} />
            {console.log(item.id)}
            {handleLocalStorage(item.id)}
          </div>
        );
      })}

      <div className="shopping-cart__checkout">
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
