import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShopContext } from '../contexts/ProductContexts';

const Navigation = () => {
	const cartCntx = useContext(ShopContext);
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cartCntx.cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;