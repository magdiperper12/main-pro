import React from "react";
import image from "../../images/header.jpg";

function SubFeatures() {
  return (
    <div className="my-7 md:my-0">
      <div className="text-gray-700 px-4 md:px-0 md:p-10 text-center">
        <div className="container mx-auto md:px-2 md:py-2 lg:px-24 lg:pt-12">
          <div className="flex flex-wrap -m-2">
            <div className="w-full md:w-1/2 p-2 text-left ">
              <button className="w-full border-s-0  text-start hover:shadow-lg border-blue-900 p-4 lg:mt-10 md:mt-4 mt-2 transition duration-300 ease-in-out focus:border-s-4 ">
                <h1 className="text-xl md:text-2xl font-bold mb-1">
                  Short heading goes here
                </h1>
                <p className="text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Praesentium esse corporis ipsam distinctio dolor.
                </p>
              </button>
              <button className="w-full border-s-0 hover:shadow-lg border-blue-900 p-4 lg:mt-10 md:mt-4 mt-2 transition duration-300 ease-in-out focus:border-s-4 text-start">
                <h1 className="text-xl md:text-2xl font-bold mb-1">
                  Short heading goes here
                </h1>
                <p className="text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Praesentium esse corporis ipsam distinctio dolor.
                </p>
              </button>
              <button className="w-full border-s-0 hover:shadow-lg border-blue-900 p-4  lg:mt-10 md:mt-4 mt-2 transition duration-300 ease-in-out focus:border-s-4 text-start">
                <h1 className="text-xl md:text-2xl font-bold mb-1">
                  Short heading goes here
                </h1>
                <p className="text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Praesentium esse corporis ipsam distinctio dolor.
                </p>
              </button>
            </div>
            <div className="w-full md:w-1/2 p-2  md:mt-20 lg:mt-16">
              <div className="w-full">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={image}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubFeatures;
