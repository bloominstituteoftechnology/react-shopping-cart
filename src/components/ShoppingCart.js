import React, { useContext } from 'react';

// Components
import Item from './ShoppingCartItem';

import CartContext from "../contexts/cart";

const ShoppingCart = props => {
	const cartContext = useContext(CartContext);

	const getCartTotal = () => {
		return cartContext.cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	const items = {};

	cartContext.cart.forEach(item => {
		if(!items[item.id]) {
			items[item.id] = { data: item, quantity: 1 }
		}
		else {
			items[item.id].quantity += 1;
		}
	})

	return (
		<div className="shopping-cart">
			{
				Object.keys(items).map(key => <Item key={key} {...items[key].data} removeFromCart={cartContext.removeFromCart} quantity = {items[key].quantity} />)
			}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
