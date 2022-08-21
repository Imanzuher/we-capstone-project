import React from "react";
import Layout from "../Layout/MainLayout";
import ProductsCom from "../components/ProductsCom";
function Products() {
  return (
    <Layout>
      <div className="h-40 w-full bg-gray-100 text-center">
        <h1 className="font-medium text-2xl text-gray-900 pt-11 tracking-widest">
          PRODUCTS{" "}
        </h1>
        <h3 className="text-base pt-2 tracking-widest">Home/Producs</h3>
      </div>
      <ProductsCom />
    </Layout>
  );
}

export default Products;
