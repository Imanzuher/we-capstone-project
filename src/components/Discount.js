import React from "react";
import discount1 from "../assets/dicount.jpg";
import discount2 from "../assets/discount2.jpg";
import { NavLink } from "react-router-dom";

function Discount() {
  return (
    <div className="flex justify-around mx-24 mt-20">
      <NavLink to={"/products"}>
        <div className="w-500 relative text-center hover:shadow-lg cursor-pointer">
          <img src={discount1} alt="" />
          <p className="absolute top-24 left-72 font-bold text-2xl text-gray-700">
            Sale Furniture For Summer
          </p>
          <p className="absolute top-40 left-80 ml-3 mt-2 text-sm text-gray-700">
            Great discounts here
          </p>
        </div>
      </NavLink>
      <NavLink to={"/products"}>
        <div className="w-500 relative text-center hover:shadow-lg cursor-pointer">
          <img src={discount2} alt="" />
          <p className="absolute top-24 right-72 font-bold text-2xl text-gray-700">
            Office Chair For Best Offer
          </p>
          <p className="absolute top-40 right-80 mr-3 mt-2 text-sm text-gray-700">
            Great discounts here
          </p>
        </div>
      </NavLink>
    </div>
  );
}

export default Discount;
