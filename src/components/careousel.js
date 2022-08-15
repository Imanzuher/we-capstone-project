import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
function careousel() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        autoFocus={true}
        infiniteLoop={true}
        interval={2000}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        swipeable={false}
        animationHandler={"fade"}
        stopOnHover={false}
      >
        <div className=" flex justify-center  bg-gray-100">
          <div className="  pl-48 pr-20 py-24 text-left">
            <h3 className="py-3 text-lg text-gray-800 font-medium">
              New Products
            </h3>
            <h1 className="text-5xl font-bold text-gray-800">Flexible chair</h1>
            <p className="text-sm py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
            <button className="bg-amber-500 py-2 px-4 rounded-md font-medium">
              Shop now
            </button>
          </div>

          <img
            className="max-h-96 basis-1 pr-64 py-10"
            src="https://furns-react.netlify.app/images/slider-image/slider-1.png"
            alt="some immmage"
          />
        </div>
        <div className="flex justify-center  bg-gray-100">
          <div className="  pl-48 pr-20 py-24 text-left">
            <h3 className="py-3 text-lg text-gray-800 font-medium">
              Best seller
            </h3>
            <h1 className="text-5xl font-bold text-gray-800">Creative sofa</h1>
            <p className="text-sm py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
            <button className="bg-amber-500 py-2 px-4 rounded-md font-medium">
              Shop now
            </button>
          </div>
          <img
            className="max-h-96 basis-1 pr-64 py-10"
            src="https://furns-react.netlify.app/images/slider-image/slider-2.png"
            alt="somelll immmage"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default careousel;
