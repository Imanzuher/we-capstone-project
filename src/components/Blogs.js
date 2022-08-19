import React from "react";

function Blogs() {
  return (
    <div className="my-28">
      {" "}
      <h1 className="text-3xl text-center mb-16 font-bold tracking-wider">
        Latest News
      </h1>
      <div className="flex justify-evenly mx-16 ">
        <div class="max-w-xs rounded overflow-hidden shadow-xl bg-gray-100 cursor-pointer">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
            alt=""
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Decorate your home</div>
            <div className="text-sm  my-2 ">
              <span className="pr-6">By unknown</span>
              <span>20-aug-2022</span>
            </div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
            <button className="py-1 px-4 bg-gray-500 text-white my-4 hover:bg-amber-500 rounded-md">
              Read More
            </button>
          </div>
        </div>
        <div class="max-w-xs rounded overflow-hidden shadow-xl bg-gray-100 cursor-pointer">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1558882224-dda166733046?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
            alt=""
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Decorate your home</div>
            <div className="text-sm  my-2 ">
              <span className="pr-6">By unknown</span>
              <span>20-aug-2022</span>
            </div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
            <button className="py-1 px-4 bg-gray-500 text-white my-4 hover:bg-amber-500 rounded-md">
              Read More
            </button>
          </div>
        </div>
        <div class="max-w-xs rounded overflow-hidden shadow-xl bg-gray-100 cursor-pointer">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1620207370579-ae2276efbdbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />

          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Decorate your home</div>
            <div className="text-sm  my-2 ">
              <span className="pr-6">By unknown</span>
              <span>20-aug-2022</span>
            </div>
            <p class="text-gray-700 text-md">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
            <button className="py-1 px-4 bg-gray-500 text-white my-4 hover:bg-amber-500 rounded-md">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
