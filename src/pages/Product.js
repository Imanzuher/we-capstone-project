import React from "react";
import { Link, useParams } from "react-router-dom";
function Product() {
  let { id } = useParams();
  return (
    <div>
      <h1>the id of the product is {id}</h1>
      <Link to="/products">go back</Link>
      Product
    </div>
  );
}

export default Product;
