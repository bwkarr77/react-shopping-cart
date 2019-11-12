import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

// Context
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("product-list"))) {
      setCart(JSON.parse(localStorage.getItem("product-list")));
    }
  }, []);

  const addItem = item => {
    setCart([...cart, item]);
    setStorageLocal(cart);
  };

  const removeItem = id => {
    const filteredCart = cart.filter(each => each.id !== id);
    setCart(filteredCart);
  };

  const setStorageLocal = data => {
    // localStorage.setItem("product-list", cartInfo ? cartInfo : "");
    localStorage.setItem("product-list", JSON.stringify(data));
  };

  useEffect(() => {}, [cart]);

  return (
    <ProductContext.Provider value={{ products, addItem }}>
      <CartContext.Provider value={{ cart, removeItem }}>
        <div className="App">
          {console.log(JSON.parse(localStorage.getItem("product-list")))}
          <Navigation />
          <Route exact path="/" component={Products} />
          <Route path="/cart" component={ShoppingCart} />
        </div>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;
