import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ContextCart from '../contexts/ContextCart'

const Navigation = () => {

	const cartData = useContext(ContextCart); //called the same in ShoppingCart.js

	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cartData.cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
