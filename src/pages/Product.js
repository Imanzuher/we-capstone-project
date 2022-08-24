import React from "react";
import ProductDetails from "../components/ProductDetails";

import Layout from "../Layout/MainLayout";
function Product() {
  return (
    <Layout>
      <div className="h-40 w-full bg-gray-100 text-center ">
        <h1 className="font-medium text-2xl text-gray-900 pt-11 tracking-widest">
          Product
        </h1>
        <h3 className="text-base pt-2 tracking-widest">
          Home / products / product
        </h3>
      </div>
      <ProductDetails />
    </Layout>
  );
}

export default Product;
