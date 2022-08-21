import React from "react";
import Layout from "../Layout/MainLayout";
import Carousel from "../components/careousel";
import CategoriesSec from "../components/CategoriesSec";
import Blogs from "../components/Blogs";
import ProductsCom from "../components/ProductsCom";
function Home() {
  return (
    <Layout>
      <Carousel />

      <CategoriesSec />
      <h1 className="text-2xl text-center text-gray-700 my-9 font-bold tracking-wider small:text-3xl">
        Our Products
      </h1>
      <ProductsCom />
      <Blogs />
    </Layout>
  );
}

export default Home;
