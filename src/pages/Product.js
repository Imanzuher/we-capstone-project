import React from "react";
import { useParams } from "react-router-dom";
import Data from "../ProductData";
import GoToTop from "../components/GoToTop";
import Layout from "../Layout/MainLayout";
function Product() {
  const { id } = useParams();
  let thisProduct = Data.find((prod) => prod.id === id);
  console.log(thisProduct.id);
  return (
    <Layout>
      <div className="container mx-auto flex justify-center items-center  divide-x-2  border-red-500 bg-white py-10">
        <div className=" mx-5 w-70">
          <img src={thisProduct.img} alt="product" />
        </div>{" "}
        <div className="px-10">
          <h2 className="text-l font-medium mt-6 mb-2">{thisProduct.title}</h2>
          <p className="text-sm text-gray-500 text-justify">
            {thisProduct.desc}
          </p>

          <div className="flex justify-between mt-8">
            <p className="text-xl text-green-700">{thisProduct.price}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Product;
