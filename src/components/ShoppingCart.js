import React, {useContext} from 'react';
import CartContext from './../context/CartContext'

// Components
import Item from './ShoppingCartItem';

const ShoppingCart = () => {
	const { cart, removeItem } = useContext(CartContext)
	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{cart.map(item => (
				<Item key={item.id} {...item} removeItem={removeItem} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
