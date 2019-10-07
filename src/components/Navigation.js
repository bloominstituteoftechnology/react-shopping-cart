import React from 'react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext'

const Navigation = () => {
	const cart = useContext(CartContext);

	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				 <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
