import React from "react";

function AboutDes() {
  return (
    <div className="mb-12">
      <div className="h-40 w-full bg-gray-100 text-center">
        <h1 className="font-medium text-2xl text-gray-900 pt-11 tracking-widest">
          ABOUT US{" "}
        </h1>
        <h3 className="text-base pt-2 tracking-widest">Home/About</h3>
      </div>
      <div className=" h-32 w-full">
        <p className="font-bold text-xl px-60 py-16 text-center">
          Furno is a global furniture destination for somethings. We sell
          cutting-edge furniture and offer a wide variety of fashion-related
          content.
        </p>
      </div>

      <div className=" w-full h-auto grid grid-cols-2 gap-12 col-span-1 p-5">
        <img
          className="w-full h-96"
          src="https://panelsfurnitureasia.com/wp-content/uploads/2021/11/nathan-oakley-gj1dnc7yRG0-unsplash-600x400.jpg"
          alt=""
        />

        <img
          className="w-full h-96"
          src="https://woodiwisspainting.com/wp-content/uploads/2022/01/15961-Dark-walls-28-1024x576.jpeg"
          alt=""
        />
      </div>
      <div className="grid grid-cols-2  text-center gap-40 px-24 py-14">
        <div>
          <h2 className="font-semibold mb-2">OUR STORES</h2>
          <p className="text-xs font-medium">
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet
            conse ctetur adipisicing elit, sed do eiusmod tempor.
          </p>
        </div>
        <div>
          <h2 className="font-semibold mb-2">OUR MISSION</h2>
          <p className="text-xs font-medium">
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet
            conse ctetur adipisicing elit, sed do eiusmod tempor.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutDes;
