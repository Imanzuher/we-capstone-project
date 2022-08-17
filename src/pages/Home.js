import React from "react";
import Layout from "../Layout/MainLayout";
import Carousel from "../components/careousel";
import CategoriesSec from "../components/CategoriesSec";
function Home() {
  return (
    <Layout>
      <div className="w-full">
        {" "}
        <Carousel />
        <CategoriesSec />
      </div>
    </Layout>
  );
}

export default Home;
