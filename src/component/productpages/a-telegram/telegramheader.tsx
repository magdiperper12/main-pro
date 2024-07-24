import React from "react";
import image1 from "../../images/customer_support.webp";

function Telegramheader() {
  return (
    <div>
      <div className='flex item-center w-full my-24 lg:my-24 md:my-24 sm:my-24 lg:px-12 py-2 lg:pt-12 flex-wrap mx-auto'>
        <div className='flex w-full sm:w-full md:w-1/2 lg:w-1/2 order-1 md:order-2 rtl:order-1 '>
          <div className='w-full p-2 md:p-4'>
            <h1 className='text-4xl md:text-6xl font-bold mt-10 '>
              Telegram Bots Fully Encrypted and Easy to Build
            </h1>
            <p className='text-lg md:text-xl mt-6'>
              Expand your reach and enhance engagement with your customers using
              Telegram
            </p>
            <div className='mt-8 md:mt-10 flex flex-col md:flex-row justify-start gap-5'>
              <button className='bg-blue-700 hover:bg-blue-800 text-white rounded-md px-4 py-3 md:px-6 md:py-4 w-full lg:w-auto md:w-auto transition duration-300 ease-in-out'>
                Get a Free Demo
              </button>
              <button className='bg-white hover:bg-blue-50 text-blue-900 border border-blue-600 rounded-md px-4 py-3 md:px-6 md:py-4 w-full lg:w-auto md:w-auto transition duration-300 ease-in-out'>
                Contact an Expert
              </button>
            </div>
          </div>
        </div>
        <div className='flex w-full sm:w-full md:w-1/2 lg:w-1/2 order-1 md:order-2 rtl:order-1 '>
          <div className='w-full p-2 md:p-4'>
            <img src={image1} alt='' className='w-full h-96 md:h-96 lg:h-96' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Telegramheader;
