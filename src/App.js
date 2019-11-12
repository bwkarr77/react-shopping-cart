import React, { useState } from "react";
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

  const addItem = item => {
    setCart([...cart, item]);
    console.log(cart);
  };

  return (
    <ProductContext.Provider value={{ products, addItem }}>
      <CartContext.Provider value={{ cart }}>
        <div className="App">
          {/* <Navigation cart={cart} /> */}
          <Navigation />
          <Route
            exact
            path="/"
            component={Products}
            //   render={() => <Products products={products} addItem={addItem} />}
          />

          {/* <Route path="/cart" render={() => <ShoppingCart cart={cart} />} /> */}
          <Route path="/cart" component={ShoppingCart} />
        </div>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;
