import React from "react";

interface Channelheaderprops {
  title: string;
  paragraph: string;
  image: string;
  fbtn: string;
  sbtn: string;
}

const ChannelHeader: React.FC<Channelheaderprops> = ({
  title,
  paragraph,
  image,
  fbtn,
  sbtn,
}) => {
  return (
    <div className="mb-8 md:mb-20 lg:mb-36 -mt-10 lg:-mt-5 px-5 md:px-3 lg:px-0">
      <div className="flex item-center w-full  lg:px-12 py-2 md:pt-12 flex-wrap mx-auto ">
        <div className="flex w-full sm:w-full md:w-1/2 lg:w-1/2 order-1 md:order-2 rtl:order-1 ">
          <div className="w-full p-2 lg:p-1 ">
            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold mt-10 ">
              {title}
            </h1>
            <p className="text-lg md:text-xl mt-3 md:mt-3 lg:mt-6">
              {paragraph}
            </p>
            <div className="mt-7 md:mt-8 lg:mt-10 flex flex-col md:flex-row justify-start gap-5">
              <button className="text-nowrap bg-blue-700 hover:bg-blue-800 text-white rounded-md px-4 py-3 md:px-6 md:py-4 w-full lg:w-auto md:w-auto transition duration-300 ease-in-out">
                {fbtn}
              </button>
              <button className="text-nowrap bg-white hover:bg-blue-50 text-blue-900 border border-blue-600 rounded-md px-4 py-3 md:px-6 md:py-4 w-full lg:w-auto md:w-auto transition duration-300 ease-in-out">
                {sbtn}
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-full sm:w-full md:w-1/2 lg:w-1/2 order-1 md:order-2 rtl:order-1 ">
          <div className="w-full p-2 md:p-4">
            <img
              src={image}
              alt=""
              className="w-full h-auto h-auto mt-0 md:mt-16 lg:mt-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelHeader;
