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
        <div className=" flex justify-center  bg-gray-100 small:flex small:justify-between small:h-96 small:pt-16 mobile:h-80 mobile:pt-10">
          <div className="  pl-48 pr-20 small:pr-0 small:pl-8 py-24 small:py-0 text-left mobile:pl-4 ">
            <h3 className="py-3 text-lg mobile:text-base mobile:py-1 text-gray-800 font-medium">
              New Products
            </h3>
            <h1 className="text-5xl font-bold text-gray-800 small:text-3xl mobile:text-xl">
              Flexible chair
            </h1>
            <p className="text-sm py-6 mobile:text-xs mobile:pr-3 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
            <button className="bg-amber-500 py-2 px-4 rounded-md font-medium cursor-pointer mobile:px-2 mobile:py-2 mobile:text-sm hover:bg-amber-400">
              Shop now
            </button>
          </div>

          <img
            className="max-h-96 basis-1 pr-64 py-10 mall:pl-24 small:pr-8 small:max-h-60 mobile:pr-2 "
            src="https://furns-react.netlify.app/images/slider-image/slider-1.png"
            alt="some immmage"
          />
        </div>
        <div className="flex justify-center small:flex small:justify-between small:h-96 small:pt-16 mobile:h-80 mobile:pt-10 bg-gray-100">
          <div className="  pl-48 pr-20 py-24 text-left small:pr-0 small:pl-8 small:py-0 mobile:pl-4">
            <h3 className="py-3 text-lg text-gray-800 font-medium mobile:text-base mobile:py-1 ">
              Best seller
            </h3>
            <h1 className="text-5xl font-bold text-gray-800 small:text-3xl mobile:text-xl">
              Creative sofa
            </h1>
            <p className="text-sm py-6  mobile:text-xs mobile:pr-3 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
            <button className="bg-amber-500 py-2 px-4 rounded-md font-medium cursor-pointer mobile:px-2 mobile:py-2 mobile:text-sm hover:bg-amber-400">
              Shop now
            </button>
          </div>
          <img
            className="max-h-96 basis-1 pr-64 py-10 mall:pl-24 small:pr-8 small:max-h-60 mobile:pr-2  "
            src="https://furns-react.netlify.app/images/slider-image/slider-2.png"
            alt="somelll immmage"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default careousel;
