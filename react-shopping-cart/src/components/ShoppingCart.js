import React from 'react';

// Components
import Item from './ShoppingCartItem';
import {cartContext} from "../App"
const ShoppingCart = props =>{

	// const Ccrt = useContext(cartContext)

	const getCartTotal = () => {
		return props.cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<cartContext.Consumer>
			{(cart) =>{
				return (

		<div className="shopping-cart">


					{{cart}['cart'].map(item => {
				
						// {console.log(cart)}
						return (

							<Item key={item.id} product={item}
							removeFromCart={props.removeFromCart}
							{...item} />
						 
						)

				})}
		
				
				
					
		<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
			);
			}
			

			}

		</cartContext.Consumer>
	);
};

export default ShoppingCart;
