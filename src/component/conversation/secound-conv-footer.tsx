import React from "react";

interface ChannelfooterProps {
  title: string;
  secondTitle: string;
  button: string;
  secondButton: string;
  image: string;
}

const SecoundConvFooter: React.FC<ChannelfooterProps> = ({
  title,
  image,
  secondTitle,
  button,
  secondButton,
}) => {
  return (
    <div className='my-10 md:my-16'>
      <div className='flex item-center w-full  px-0 lg:px-12 py-2 lg:pt-12 flex-wrap mx-auto '>
        <div className='flex w-full sm:w-full md:w-1/2 lg:w-1/2 order-1 md:order-2 rtl:order-1 '>
          <div className='w-full p-2 md:p-4 mx-1 md:mx-0'>
            <h1 className='text-xl md:text-3xl lg:text-5xl font-bold mt-10 text-center md:text-start '>
              {title}
            </h1>
            <p className='text-lg md:text-xl mt-6 text-center md:text-start '>
              {secondTitle}
            </p>
            <div className='mt-8 md:mt-10 flex flex-col md:flex-row justify-start gap-3  lg:gap-5 mx-1 md:mx-0'>
              <button className='bg-blue-700 hover:bg-blue-800 text-white rounded-md px-0 lg:px-10 md:px-1 sm:px-0 py-3  md:py-4 w-full  lg:w-1/2 md:w-1/2 transition duration-300 ease-in-out text-lg font-bold lg:text-xl sm:text-lg m-auto text-nowrap'>
                {button}
              </button>
              <button className='bg-white hover:bg-blue-50 text-blue-900 border px-0 lg:px-10 md:px-1 sm:px-0 border-blue-600 rounded-md py-3  md:py-4 w-full lg:w-1/2 md:w-1/2 transition duration-300 ease-in-out text-lg font-bold lg:text-xl sm:text-lg  m-auto text-nowrap'>
                {secondButton}
              </button>
            </div>
          </div>
        </div>
        <div className='flex w-full sm:w-full md:w-1/2 lg:w-1/2 order-1 md:order-2 rtl:order-1 '>
          <div className='w-full p-2 md:p-4'>
            <img src={image} alt='' className='w-full h-auto' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecoundConvFooter;
