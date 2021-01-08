import React, {useContext, useEffect} from 'react';
import cartContext from "../contexts/CartContext";

// Components
import Item from './ShoppingCartItem';

const ShoppingCart = () => {
	const {cart, removeItem} = useContext(cartContext)
	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	useEffect(() => {
		console.log("cart", cart)
	}, [cart])

	return (
		<div className="shopping-cart">
			{cart.map(item => (
				<Item key={item.id} {...item} remove={removeItem} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
