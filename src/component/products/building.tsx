import React from "react";
import { useState, useEffect } from "react";
import image1 from "../../images/customer_support.webp";
function Building() {
  return (
    <div>
      <div className="flex item-center w-full my-10 lg:my-16 md:my-24 sm:my-12 px-0 lg:px-12 py-2 lg:pt-12 flex-wrap mx-auto">
        <div className="flex w-full sm:w-full md:w-1/2 lg:w-1/2 order-1 md:order-2 rtl:order-1 ">
          <div className="w-full p-2 md:p-4">
            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold mt-10 ">
              Start building with Botbat for free
            </h1>
            <p className="text-lg md:text-xl mt-6">
              {" "}
              Sign Up d start building your ideal customer engagement exprience
              today
            </p>
            <div className="mt-8 md:mt-10 flex flex-col md:flex-row justify-start gap-5">
              <button className="bg-blue-700 hover:bg-blue-800 text-white rounded-md px-0 lg:px-10 md:px-10 sm:px-0 py-3  md:py-4 w-full lg:w-1/2 md:w-1/2 transition duration-300 ease-in-out ">
                start for free
              </button>
              <button className="bg-white hover:bg-blue-50 text-blue-900 border px-0 lg:px-10 md:px-10 sm:px-0 border-blue-600 rounded-md py-3  md:py-4 w-full lg:w-1/2 md:w-1/2 transition duration-300 ease-in-out ">
                see pricing
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-full sm:w-full md:w-1/2 lg:w-1/2 order-1 md:order-2 rtl:order-1 ">
          <div className="w-full p-2 md:p-4">
            <img src={image1} alt="" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Building;
