import React, { useState } from "react";
import { ProductContext } from "./contexts/productContext";
import { CartContext } from "./contexts/cartContext";
import { Route } from "react-router-dom";
import data from "./data";
// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	// return (
	// 	<div className="App">
	// 		<Navigation cart={cart} />

	const removeItem = id => {
		const newCart = cart.filter(item => item.id !== id);
		setCart([...newCart]);
   };

   return (
    <ProductContext.Provider value={{ products, addItem }}>
      <CartContext.Provider value={{cart, removeItem}}>
        <div className="App">
          <Navigation cart={{cart}} />
          <Route
            exact
            path="/"
            component={Products}/>

<Route path="/cart" component={ShoppingCart} />
        </div>
      </CartContext.Provider>
    </ProductContext.Provider>
  );

			{/* Routes
			<Route
				exact
				path="/"
				render={() => (
					<Products
						products={products}
						addItem={addItem}
					/>
				)}
			/>

			<Route
				path="/cart"
				render={() => <ShoppingCart cart={cart} />}
			/>
		</div>
	);
} */}
}
export default App;
