import React from "react";
import Layout from "../Layout/MainLayout";
function Blog() {
  return (
    <Layout>
      <div className="h-40 w-full bg-gray-100 text-center">
        <h1 className="font-medium text-2xl text-gray-900 pt-11 tracking-widest">
          HOW TO DECORATE YOUR HOME{" "}
        </h1>
        <h3 className="text-base pt-2 tracking-widest">
          Home / Blog / How to decorate
        </h3>
      </div>
      <div className="mb-44">
        <div className="flex flex-col mt-14 mb-3 items-center">
          <img
            className="w-600 h-400"
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
            alt=""
          />
        </div>{" "}
        <div className="text-sm text-center mb-6 ">
          <span className="pr-6">By unknown</span>
          <span>20-aug-2022</span>
        </div>
        <div className="  text-left mx-85">
          <h1 className="font-bold text-2xl mb-6">
            Eiumod tempor incididunt labore
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            commodo consequat. Duis aute irure dolor in rep rehenderit. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit, sed do eiumod
            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit, do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit, do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip commodo consequat.
          </p>
          <p className="flex ml-32 my-10">
            <div class=" left-1/2 mr-5 w-2 h-24 bg-amber-500"></div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Duis aute irure
            dolor in rep rehenderit. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiumod tempor.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiumod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit, do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip commodo
            consequat. Duis aute irure dolor in rep rehenderit. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit, sed do eiumod tempor
            incididunt ut labore et dolore magna aliqua. consectetur adipisicing
            elit, sed do eiumod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
          <p className="mt-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiumod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit, do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip commodo
            consequat. Duis aute irure dolor in rep rehenderit. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit, sed do eiumod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Blog;
