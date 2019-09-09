// import React, { useState } from 'react';
// import { Route } from 'react-router-dom';
// import data from './data';

// // Components
// import Navigation from './components/Navigation';
// import Products from './components/Products';
// import ShoppingCart from './components/ShoppingCart';

// import ContextProduct from './contexts/ContextProduct';
// import ContextCart from './contexts/ContextCart';


// function App() {
// 	const [products] = useState(data);
// 	const [cart, setCart] = useState([]);

// 	const addItem = item => {
// 		setCart([...cart, item]);
// 	};

// 	return (
// 		<div className="App">
// 			<ContextProduct.Provider value={{products, addItem}}>
// 				<ContextCart.provider value={{ cart, setCart }}>
// 					<Navigation cart={cart} />

// 					{/* Routes */}
					
// 					<Route exact path="/" component={ShoppingCart} />
// 					<Route exact path="/" component={Products} />
// 				</ContextCart.provider>
// 			</ContextProduct.Provider>
// 		</div>
// 	);
// }

// export default App;

import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import ContextProduct from './contexts/ContextProduct'
import ContextCart from './contexts/ContextCart'
// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
function App() {

    const [products] = useState(data);
	const [cart, setCart] = useState([]);
	
    const addItem = item => {
        setCart([...cart, item]);
	};
	
	const removeItem = id =>{
		setCart(cart.filter(item => item.id !== id))
	}

    return (
        <ContextProduct.Provider value={ {products, addItem} }>
        <ContextCart.Provider value={ { cart }  }>
        
        <div className="App">
            <Navigation cart={cart} />
            {/* Routes */}
            <Route exact path="/" component={Products} />
            <Route exact path="/cart" component={ShoppingCart} />
        </div>
        </ContextCart.Provider>
        </ContextProduct.Provider>
        
    );
}
export default App;
