import React, { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContext.js";

// Components
import Product from "./Product";

const Products = () => {
  const { products, addItem } = useContext(ItemsContext);
  return (
    <div className="products-container">
      {products.map(product => (
        <Product key={product.id} product={product} addItem={addItem} />
      ))}
    </div>
  );
};

export default Products;
