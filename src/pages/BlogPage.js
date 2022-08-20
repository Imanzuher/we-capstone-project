import React from "react";
import Blog from "../components/Blog";
import Layout from "../Layout/MainLayout";
import GoToTop from "../components/GoToTop";
function BlogPage() {
  return (
    <Layout>
      <Blog />
      <GoToTop />
    </Layout>
  );
}

export default BlogPage;
