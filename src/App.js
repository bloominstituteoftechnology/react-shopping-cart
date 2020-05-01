import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

//Context API
import ProductContext from "./context/ProductContext"
import CartContext from "./context/CartContext";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="App">
      <ProductContext.Provider value={{ products, addItem }}>
		<CartContext.Provider value={cart} >
		<Navigation />
        <Route exact path="/" component={Products} />
		<Route exact path="/" component={ShoppingCart} />
		</CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;

{/* <Route path="/cart" render={() => <ShoppingCart cart={cart} />} /> */}
{
  /* Routes */
}
{
  /* <Route
				exact
				path="/"
				render={() => (
					<Products
						products={products}
						addItem={addItem}
					/>
				)}
			/> */
}
