import React from 'react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext'

const Navigation = (props) => {
	//Destructuring cart, makes cart the value
	const { cart } = useContext(CartContext)
	console.log(cart)
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
