import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

interface Channelheaderprops {
  title: string;
  paragraph: string;
  image: string;
  btn: string;
}

const ConvHeader: React.FC<Channelheaderprops> = ({
  title,
  paragraph,
  image,
  btn,
}) => {
  return (
    <div className="mb-10 md:mb-44 -mt-0 lg:-mt-0 md:-mt-10">
      <div className="flex item-center w-full  px-1 lg:px-12 py-2 md:pt-5  flex-wrap mx-auto">
        <div className="flex w-full sm:w-full md:w-1/2 lg:w-1/2 order-1 md:order-2 rtl:order-1 ">
          <div className="w-full p-2 md:p-4">
            <h1 className="text-xl md:text-3xl lg:text-5xl  font-bold md:mt-10 text-center md:text-start ">
              {title}
            </h1>
            <p className="text-lg md:text-xl mt-2 md:mt-6 text-center md:text-start">
              {paragraph}
            </p>
            <div className="mt-8 md:mt-10 flex flex-col md:flex-row justify-start gap-5">
              <button className="bg-blue-700 hover:bg-blue-800 text-white rounded-md px-0 lg:px-5 py-3  md:py-4 w-2/3 lg:w-1/2 md:w-1/2 transition duration-300 ease-in-out m-auto md:m-0 lg:m-0">
                <span className="mt-3">
                  {btn}
                  <FaArrowRightLong className="text-1xl text-blue-50  mx-2  inline-block rtl:rotate-180 animate-pulse" />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-full sm:w-full md:w-1/2 lg:w-1/2 h-auto order-1 md:order-2 rtl:order-1 ">
          <div className="">
            <img
              src={image}
              alt=""
              className="w-12/12  h-auto m-auto md:pt-10 lg:pt-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConvHeader;
