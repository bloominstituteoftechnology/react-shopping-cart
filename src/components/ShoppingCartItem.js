import React, {useContext} from 'react';

const Item = props => {
	const cart = useContext(CartContext)
	const RemoveItem = () => {
		this.setState(prevState => {
			data: update(prevState.data, {$splice: [[index, 1]]})
		})
	}

	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={RemoveItem}>
				Remove from cart </button>
			</div>
		</div>
	);
};

export default Item;
