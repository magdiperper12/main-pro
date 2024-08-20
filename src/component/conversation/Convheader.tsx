import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

interface Channelheaderprops {
  title: string;
  paragraph: string;
  image: string;
  btn: string;
}

const Convheader: React.FC<Channelheaderprops> = ({
  title,
  paragraph,
  image,
  btn,
}) => {
  return (
    <div>
      <div className='flex item-center w-full my-10 lg:my-24 md:my-24 sm:my-24 px-0 lg:px-12 py-2 lg:pt-12 flex-wrap mx-auto'>
        <div className='flex w-full sm:w-full md:w-1/2 lg:w-1/2 order-1 md:order-2 rtl:order-1 '>
          <div className='w-full p-2 md:p-4'>
            <h1 className='text-4xl md:text-6xl font-bold mt-10 '>{title}</h1>
            <p className='text-lg md:text-2xl mt-6'>{paragraph}</p>
            <div className='mt-8 md:mt-10 flex flex-col md:flex-row justify-start gap-5'>
              <button className='bg-blue-700 hover:bg-blue-800 text-white rounded-md px-0 lg:px-10 md:px-10 sm:px-0 py-3  md:py-4 w-2/3 lg:w-1/2 md:w-1/2 transition duration-300 ease-in-out m-auto md:m-0 lg:m-0'>
                <span className='mt-3'>
                  {btn}
                  <FaArrowRightLong className='text-1xl text-blue-50  mx-2  inline-block rtl:rotate-180 animate-pulse' />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className='flex w-full sm:w-full md:w-1/2 lg:w-1/2 order-1 md:order-2 rtl:order-1 '>
          <div className='w-full p-2 md:p-4'>
            <img
              src={image}
              alt=''
              className='w-10/12 h-auto md:h-96 m-auto lg:h-96'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Convheader;
