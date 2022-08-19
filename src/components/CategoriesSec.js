import React from "react";
import bedroom from "../assets/bed.png";
import sofa from "../assets/sofa.png";
import table from "../assets/restaurant.png";
import lounge from "../assets/lounge.png";
import chair from "../assets/office-chair.png";
function CategoriesSec() {
  return (
    <div>
      <div className="text-xl font-bold text-gray-700 mt-10 text-center">
        <h1>Our Categories</h1>
      </div>
      <div className="flex mt-10 mb-9 justify-around items-center text-center mx-52 ">
        <div className="border py-6 px-8 border-gray-700 cursor-pointer  rounded-full transition-all hover:border-dashed hover:border-2 hover:border-amber-500 duration-500n-200  ">
          <div className="w-16 opacity-80 ">
            <img src={bedroom} alt="" />
          </div>{" "}
          <p className="font-semibold text-sm text-gray-700 mt-2">bedroom</p>
        </div>

        <div className="border py-6 px-8 border-gray-700 cursor-pointer  rounded-full transition-all hover:border-dashed hover:border-2 hover:border-amber-500  ">
          {" "}
          <div className="w-16 opacity-80">
            <img src={sofa} alt="" />
          </div>
          <p className="font-semibold text-sm text-gray-700 mt-2">living </p>
        </div>

        <div className="border py-6 px-8 border-gray-700 cursor-pointer rounded-full transition-all hover:border-dashed hover:border-2 hover:border-amber-500 duration-500n-200 ">
          <div className="w-16 opacity-80">
            <img src={table} alt="" />
          </div>
          <p className="font-semibold text-sm text-gray-700 mt-2">dining </p>
        </div>
        <div className="border py-6 px-8 border-gray-700 cursor-pointer rounded-full transition-all hover:border-dashed hover:border-2 hover:border-amber-500 duration-500n-200 ">
          {" "}
          <div className="w-16 opacity-80">
            <img src={lounge} alt="" />
          </div>
          <p className="font-semibold text-sm text-gray-700 mt-2"> lounge</p>
        </div>
        <div className="border py-6 px-8 border-gray-700 cursor-pointer rounded-full transition-all hover:border-dashed hover:border-2 hover:border-amber-500 duration-500 ">
          <div className="w-16 opacity-80">
            <img src={chair} alt="" />
          </div>
          <p className="font-semibold text-sm text-gray-700 mt-2">
            office chair
          </p>
        </div>
      </div>
    </div>
  );
}

export default CategoriesSec;
