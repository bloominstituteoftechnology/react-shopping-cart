import React from 'react';
import { Shopping } from '../App'

const Item = props => {

	return (
		<Shopping.Consumer>
			{(values) => (
				<div className="shopping-cart_item">
					<img src={props.image} alt={`${props.title} book`} />


					<div>
						<h1>{props.title}</h1>
						<p>$ {props.price}</p>
						<button onClick={() => values.removeItem(props.id)}>Remove from cart</button>
					</div>
				</div>
			)}
		</Shopping.Consumer>

	);
};

export default Item;
