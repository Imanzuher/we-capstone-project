import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import Data from "../ProductData";

function CategoriesPage() {
  const [items, setItems] = useState(Data);
  const filterItem = (cateItem) => {
    const updateItems = Data.filter((curItem) => {
      return curItem.category === cateItem;
    });
    setItems(updateItems);
  };
  return (
    <div>
      <div className="flex justify-around py-10 flex-wrap small:h-72 small:content-between mobile:grid mobile:grid-cols-3 mobile:gap-4 mobile:mx-5 mobile:px-0">
        <button
          className="font-semibold text-lg uppercase font-mono text-gray-500 border py-6 px-8 mobile:px-4  cursor-pointer  shadow-md  hover:border-dashed hover:border-2 hover:border-amber-500 hover:scale-105 "
          onClick={() => setItems(Data)}
        >
          All
        </button>
        <button
          className="font-semibold text-lg uppercase font-mono text-gray-500 border py-6 px-8 mobile:px-4  cursor-pointer  shadow-md  hover:border-dashed hover:border-2 hover:border-amber-500 hover:scale-105"
          onClick={() => filterItem("living")}
        >
          living
        </button>
        <button
          className="font-semibold text-lg uppercase font-mono text-gray-500 border py-6 px-8 mobile:px-4  cursor-pointer  shadow-md  hover:border-dashed hover:border-2 hover:border-amber-500 hover:scale-105"
          onClick={() => filterItem("dining")}
        >
          dining
        </button>
        <button
          className="font-semibold text-lg uppercase font-mono text-gray-500 border py-6 px-8 mobile:px-4  cursor-pointer  shadow-md  hover:border-dashed hover:border-2 hover:border-amber-500 hover:scale-105"
          onClick={() => filterItem("office")}
        >
          office
        </button>
        <button
          className="font-semibold text-lg uppercase font-mono text-gray-500 border py-6 px-8 mobile:px-4  cursor-pointer  shadow-md  hover:border-dashed hover:border-2 hover:border-amber-500 hover:scale-105"
          onClick={() => filterItem("bedroom")}
        >
          bedroom
        </button>
        <button
          className="font-semibold text-lg uppercase font-mono text-gray-500 border py-6 px-8 mobile:px-4  cursor-pointer  shadow-md  hover:border-dashed hover:border-2 hover:border-amber-500 hover:scale-105"
          onClick={() => filterItem("lounge")}
        >
          lounge
        </button>
      </div>

      <div className=" mobile:p-0 mobile:mx-16 mx-24 p-10 grid grid-cols-4 gap-10 object-fill small:grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
        {items.map((elem) => {
          return (
            <div class=" w-full max-w-xs  bg-white rounded-lg shadow-md dark:bg-gray-100 cursor-pointer hover:scale-110">
              <NavLink to={`/products/${elem.id}`}>
                <img
                  class="p-8 rounded-t-lg object-contain"
                  src={elem.img}
                  alt=""
                />
              </NavLink>
              <div class="px-5 pb-5">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-700">
                  {elem.title}
                </h5>

                <div class="flex items-center mt-2.5 mb-5">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>First star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Second star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Third star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Fourth star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Fifth star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                    5.0
                  </span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-2xl font-bold text-gray-900 dark:text-gray-700">
                    {elem.price}
                  </span>

                  <button class="text-white bg-amber-600 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-xs px-3 py-2.5 text-center">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CategoriesPage;
