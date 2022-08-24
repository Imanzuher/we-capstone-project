import React from "react";
import { useParams } from "react-router-dom";
import Data from "../ProductData";
function ProductDetails() {
  const { id } = useParams();
  let thisProduct = Data.find((prod) => prod.id === id);
  console.log(thisProduct.id);
  return (
    <section class="text-gray-700 body-font overflow-hidden bg-white">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="w-72 ">
            <img src={thisProduct.img} alt="" className="rounded-md" />
          </div>

          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 class="text-sm title-font text-gray-500 tracking-widest">
              FURNO
            </h2>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
              {thisProduct.title}
            </h1>
            <div class="flex mb-4">
              <span class="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-amber-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-amber-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-amber-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-amber-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-amber-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </span>
              <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200"></span>
              <span className="text-gray-500">
                Availability: {thisProduct.available} in Stock
              </span>
            </div>
            <p class="leading-relaxed">{thisProduct.desc}</p>
            <div class="flex mt-6 items-center pb-5 ">
              <div class="flex items-center">
                <span class="mr-3">Color</span>
                <div class="relative">
                  <select class="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-amber-500 text-base pl-3 pr-10">
                    <option>{thisProduct.color.w}</option>
                    <option>{thisProduct.color.g}</option>
                    <option>{thisProduct.color.r}</option>
                    <option>{thisProduct.color.b}</option>
                  </select>
                  <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div class="flex">
              <span class="title-font font-medium text-2xl text-gray-900">
                {thisProduct.price}
              </span>
            </div>
          </div>

          <div className="mt-12 ">
            <h1 className="text-xl font-medium mb-5">Description</h1>
            <div className="border-b-2 mb-4"></div>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humor, or randomized words which don't look even slightly
              believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there isn't anything embarrassing hidden in the
              middle of the text. All the Lorem Ipsum generators on the Internet
              tend to repeat predefined chunks as necessary, making this the
              first true generator on the Internet. It uses a dictionary of over
              200 Latin words, combined with a handful of model sentence
              structures, to generate Lorem Ipsum which looks reasonable. The
              generated Lorem Ipsum is therefore always free from repetition,
              injected humor, or non-characteristic words, etc. On the other
              hand, we denounce with righteous indignation and dislike men who
              are so beguiled and demoralized by the charms of pleasure of the
              moment, so blinded by desire, that they cannot foresee the pain
              and trouble that are bound to ensue; and equal blame belongs to
              those who fail in their duty through weakness of will, which is
              the same as saying through shrinking from toil and pain. These
              cases are perfectly simple and easy to distinguish. In a free
              hour, when our power of choice is untrammeled and when nothing
              prevents our being able to do what we like best, every pleasure is
              to be welcomed and every pain avoided.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
