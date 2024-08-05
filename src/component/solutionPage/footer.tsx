import React from "react";
import { useState, useEffect } from "react";
import image1 from "../../images/customer_support.webp";
function Footer() {
  return (
    <div>
      <div className='flex item-center w-full sm:my-16 md:my-24 px-0 lg:px-12 py-2 lg:pt-12 flex-wrap mx-auto mb-10'>
        <div className='flex w-full sm:w-full md:w-1/2 lg:w-1/2 order-1 md:order-2 rtl:order-1 '>
          <div className='w-full p-2 md:p-4'>
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold mt-10 text-center md:text-start '>
              Get started with our Solutions for free
            </h1>
            <p className='text-lg md:text-xl mt-6 text-center md:text-start'>
              Join now and unlock impactful solutions designed to drive your
              success.
            </p>
            <div className='mt-8 md:mt-10 flex flex-col md:flex-row justify-start gap-5'>
              <button className='bg-blue-700 hover:bg-blue-800 text-white rounded-md px-0 lg:px-10 md:px-1 sm:px-0 py-3  md:py-4 w-3/4  lg:w-1/2 md:w-1/2 transition duration-300 ease-in-out text-lg font-bold lg:text-xl sm:text-lg m-auto text-nowrap'>
                Start for free
              </button>
              <button className='bg-white hover:bg-blue-50 text-blue-900 border px-0 lg:px-10 md:px-1 sm:px-0 border-blue-600 rounded-md py-3  md:py-4 w-3/4 lg:w-1/2 md:w-1/2 transition duration-300 ease-in-out text-lg font-bold lg:text-xl sm:text-lg  m-auto text-nowrap'>
                Explore our solutions
              </button>
            </div>
          </div>
        </div>
        <div className='flex w-full sm:w-full md:w-1/2 lg:w-1/2 order-1 md:order-2 rtl:order-1 '>
          <div className='w-full p-2 md:p-4'>
            <img src={image1} alt='' className='w-full h-auto' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
