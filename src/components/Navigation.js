import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const { cart } = useContext(CartContext);
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
