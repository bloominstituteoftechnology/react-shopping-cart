// This is code for project
// import React, { useContext } from "react";
// import { ItemsContext } from "../contexts/ItemsContext";

// const Product = () => {
//   const { products, addItem } = useContext(ItemsContext);
//   return (
//     <div className="product">
//       <img src={products.image} alt={`${products.title} book`} />

//       <h1 className="title">{products.title}</h1>

//       <p className="price">${products.price}</p>

//       <button onClick={() => addItem(products)}>Add to cart</button>
//     </div>
//   );
// };

// export default Product;

// Working code with props
import React from "react";
const Product = props => {
  return (
    <div className="product">
      <img src={props.product.image} alt={`${props.product.title} book`} />
      <h1 className="title">{props.product.title}</h1>
      <p className="price">${props.product.price}</p>
      <button onClick={() => props.addItem(props.product)}>Add to cart</button>
    </div>
  );
};
export default Product;
