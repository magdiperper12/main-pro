import React from "react";

interface ChannelfooterProps {
  title: string;
  secondTitle: string;
  button: string;
  secondButton: string;
}

const ConvFooter: React.FC<ChannelfooterProps> = ({
  title,
  secondTitle,
  button,
  secondButton,
}) => {
  return (
    <div className="my-10 md:my-16">
      <div className="container mx-auto text-center">
        <div className="sm:rounded-0 text-center mx-5 md:mx-7 lg:mx-16 ">
          <div>
            <h1 className="text-xl md:text-3xl lg:text-5xl font-extrabold mt-5  ">
              {title}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mt-5  m-auto  ">
              {secondTitle}
            </p>
          </div>
          {/* Buttons */}
          <div className="mt-5 md:mt-8 flex flex-col md:flex-row justify-center items-center mx-3 md:mx-0 lg:mx-0 gap-3 md:gap-5">
            <button className="bg-blue-700 text-white rounded-md px-4 py-3  md:mb-0 w-full lg:w-1/6 md:w-1/3">
              {button}
            </button>
            <button className="bg-white text-blue-900 border border-blue-600 rounded-md  px-4 py-3 mb-2 md:mb-0 w-full lg:w-1/6 md:md:w-1/3 ">
              {secondButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConvFooter;
