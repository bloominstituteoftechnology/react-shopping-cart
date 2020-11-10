import React, {useContext} from 'react';

// Components
import Item from './ShoppingCartItem';
import { UserContext } from '../contexts/UserContext'

const ShoppingCart = () => {
	const value = useContext(UserContext);
	const getCartTotal = () => {
		return value.cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{console.log(value)}
			{value.cart.map(item => (
				<Item key={item.id} {...item} remove={value.remove} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
