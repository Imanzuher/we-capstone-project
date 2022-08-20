import React from "react";
import Blog1 from "../components/Blog1";
import Layout from "../Layout/MainLayout";
import GoToTop from "../components/GoToTop";
function BlogPage() {
  return (
    <Layout>
      <Blog1 />
      <GoToTop />
    </Layout>
  );
}

export default BlogPage;
