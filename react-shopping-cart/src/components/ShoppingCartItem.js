import React from 'react';

const Item = props => {
	return (
		<div className="shopping-cart_item">
			<img src={props.product.image} alt={`${props.product.title} book`} />


			<div>
				<h1>{props.product.title}</h1>
				<p>$ {props.product.price}</p>
				<button onClick={()=>{
					props.removeFromCart(props)
				}}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
