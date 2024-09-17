import React from "react";

interface Channelfooterprops {
  title: string;
  secoundTitle: string;
  button: string;
  secoundButton: string;
}

const ChannelFooter: React.FC<Channelfooterprops> = ({
  title,
  secoundTitle,
  button,
  secoundButton,
}) => {
  return (
    <div className=" my-10 md:my-16 ">
      <div className="container mx-auto text-center px-2 md:px-0 lg:px-0">
        <div className="sm:rounded-0 text-center w-full  ">
          <div className="   w-11/12 md:w-10/12 lg:w-9/12 m-auto">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-extrabold mt-5   ">
              {title}
            </h1>
            <p className="text-md md:text-lg lg:text-xl mt-2 md:mt-5 ">
              {secoundTitle}
            </p>
          </div>
          {/* Buttons */}
          <div className="mt-8 md:mt-10 flex flex-col md:flex-row justify-center items-center mx-3 md:mx-0 lg:mx-0 gap-3 md:gap-5">
            <button className="bg-blue-700 text-white rounded-md px-4 py-3   w-full lg:w-1/6 md:w-1/3 ">
              {button}
            </button>
            <button className="bg-white text-blue-900 border border-blue-600 rounded-md px-4 py-3  w-full lg:w-1/6 md:w-1/3">
              {secoundButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelFooter;
