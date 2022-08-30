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
      <div>
        <h1 className="text-2xl text-center text-gray-700 mb-6 mt-14 font-bold tracking-wider small:text-3xl">
          Our Products
        </h1>
        <div className="mx-85">
          <p className="mt-2 text-center ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do
            eiusmo tempor incididunt ut labore
          </p>
        </div>
      </div>

      <ProductsCom />
      <Blogs />
    </Layout>
  );
}

export default Home;
