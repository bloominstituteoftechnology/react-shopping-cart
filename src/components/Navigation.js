import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import  CartContext  from "../contexts/CartContext"

const Navigation = () => {
	const { Cart } = useContext(CartContext);
	
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/Cart">
				Cart <span>{Cart.length}</span>
			
			</NavLink>
		</div>
	);
};

export default Navigation;
