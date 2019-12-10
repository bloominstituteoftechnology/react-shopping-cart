import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from './Contexts/CartContext';


const Navigation = () => {
	const cart= useContext(CartContext);
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
