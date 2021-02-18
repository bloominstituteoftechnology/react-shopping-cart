import React, {useContext} from 'react';
import  CartContext  from "./../contexts/CartContext"; 
// Components
import Item from './ShoppingCartItem';

const ShoppingCart = () => {
	const {Cart} = useContext(CartContext)
	const getCartTotal = () => {
		return Cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-Cart">
			{Cart.map(item => (
				<Item key={item.id} {...item} />
			))}

			<div className="shopping-Cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
