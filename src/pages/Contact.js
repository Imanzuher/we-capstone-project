import React from "react";
import Layout from "../Layout/MainLayout";
import Map from "../components/LeafLetMap";
function Contact() {
  return (
    <Layout>
      <div className="h-40 w-full bg-gray-100 text-center">
        <h1 className="font-medium text-2xl text-gray-900 pt-11 tracking-widest">
          CONTACT US{" "}
        </h1>
        <h3 className="text-base pt-2 tracking-widest">Home/Contact</h3>
      </div>
      <Map />
    </Layout>
  );
}

export default Contact;
