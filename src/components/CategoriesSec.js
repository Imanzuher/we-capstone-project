import React from "react";
import bedroom from "../assets/bed.png";
import sofa from "../assets/sofa.png";
import table from "../assets/restaurant.png";
import lounge from "../assets/lounge.png";
import chair from "../assets/office-chair.png";
import { NavLink } from "react-router-dom";

function CategoriesSec() {
  return (
    <div className="">
      <div className="text-2xl font-bold text-gray-700 mt-10 text-center tracking-wider">
        <h1>Our Categories</h1>
      </div>
      <div className="flex mt-10 mb-9 justify-around items-center text-center mx-52 small:mx-16 small:grid small:grid-cols-2 small:grid-rows-3 small:gap-16 mobile:gap-12 mobile:mx-9">
        <NavLink to={"/categories"}>
          <div className="border py-6 px-8 border-gray-700 cursor-pointer  rounded-full small:px-16 mobile:px-8  hover:border-dashed hover:border-2 hover:border-amber-500 hover:scale-105  ">
            <div className="w-16 opacity-80 ">
              <img src={bedroom} alt="" />
            </div>{" "}
            <p className="font-semibold text-sm text-gray-700 mt-2">Bedroom</p>
          </div>
        </NavLink>
        <NavLink to={"/categories"}>
          <div className="border py-6 px-8 border-gray-700 cursor-pointer  rounded-full small:px-16 hover:scale-105 mobile:px-8 hover:border-dashed hover:border-2 hover:border-amber-500  ">
            {" "}
            <div className="w-16 opacity-80">
              <img src={sofa} alt="" />
            </div>
            <p className="font-semibold text-sm text-gray-700 mt-2">Living </p>
          </div>
        </NavLink>
        <NavLink to={"/categories"}>
          <div className="border py-6 px-8 border-gray-700 cursor-pointer rounded-full small:px-16 hover:scale-105 mobile:px-8 hover:border-dashed hover:border-2 hover:border-amber-500  ">
            <div className="w-16 opacity-80">
              <img src={table} alt="" />
            </div>
            <p className="font-semibold text-sm text-gray-700 mt-2">Dining </p>
          </div>
        </NavLink>
        <NavLink to={"/categories"}>
          <div className="border py-6 px-8 border-gray-700 cursor-pointer rounded-full small:px-16 hover:scale-105 mobile:px-8 hover:border-dashed hover:border-2 hover:border-amber-500  ">
            {" "}
            <div className="w-16 opacity-80">
              <img src={lounge} alt="" />
            </div>
            <p className="font-semibold text-sm text-gray-700 mt-2"> Lounge</p>
          </div>
        </NavLink>
        <NavLink to={"/categories"}>
          <div className="border py-6 px-8 border-gray-700 cursor-pointer rounded-full small:px-16 hover:scale-105 mobile:px-8 hover:border-dashed hover:border-2 hover:border-amber-500 ">
            <div className="w-16 opacity-80">
              <img src={chair} alt="" />
            </div>
            <p className="font-semibold text-sm small:text-md text-gray-700 mt-2">
              Office
            </p>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default CategoriesSec;
