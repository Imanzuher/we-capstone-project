import React from "react";
import Layout from "../Layout/MainLayout";
import Carousel from "../components/careousel";
import CategoriesSec from "../components/CategoriesSec";
import Blogs from "../components/Blogs";
function Home() {
  return (
    <Layout>
      <Carousel />

      <CategoriesSec />
      <Blogs />
    </Layout>
  );
}

export default Home;
