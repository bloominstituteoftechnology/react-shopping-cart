import React from "react";
import { ProductContext } from "../context/ProductContext";

// Components
import Product from "./Product";

const Products = (props) => {
  return (
    <div className="products-container">
      <ProductContext.Consumer>
        {(cart) => (
          <>
            {cart.map((product) => (
              <Product
                key={product.id}
                product={product}
                addItem={props.addItem}
              />
            ))}
          </>
		  )
        }
      </ProductContext.Consumer>
    </div>
  );
};

export default Products;
