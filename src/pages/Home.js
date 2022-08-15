import React from "react";
import Layout from "../Layout/MainLayout";
import Carousel from "../components/careousel";
function Home() {
  return (
    <Layout>
      <div className="w-full">
        {" "}
        <Carousel />
      </div>
    </Layout>
  );
}

export default Home;
