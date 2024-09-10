import { useState, useEffect } from "react";
import React from "react";

function MainCarousel() {
  return (
    <div className='mb-10 lg:mb-32 md:mb-28   '>
      <div className='flex item-center w-full  lg:px-12 py-2 lg:pt-12 flex-wrap mx-auto'>
        <div className='flex w-11/12 sm:w-full md:w-1/2 lg:w-1/2 order-2 md:order-1 md:rtl:order-1 m-auto'>
          <div className='w-full p-2  mt-6 md:mt-4'>
            <p className='relative px-8 font-bold'>
              <span className='absolute start-0 top-0 h-6 w-3 bg-blue-500'></span>
              Introducing BOTBAT the Omni-Channel AI Bot Platform
            </p>
            <h1 className='text-xl md:text-3xl lg:text-5xl font-bold mt-5 md:mt-10 '>
              {/* {item.heading} */}
              Empower Your Customer Engagement with Botbat
            </h1>
            <p className='text-lg md:text-xl mt-3 md:mt-6'>
              {" "}
              Transforming your communication Experience with AI-powered
              solutions. Connect effortlessly across omni-channel platforms, and
              automate your communication workload.{" "}
            </p>
            <div className='mt-8 md:mt-10 flex flex-col md:flex-row justify-start gap-5'>
              <button className='bg-blue-700 hover:bg-blue-800 text-white rounded-md px-4 py-3 md:px-6 md:py-4 w-full lg:w-auto md:w-auto transition duration-300 ease-in-out'>
                Join Now for Free
              </button>
              <button className='bg-white hover:bg-blue-50 text-blue-900 border border-blue-600 rounded-md px-4 py-3 md:px-6 md:py-4 w-full lg:w-auto md:w-auto transition duration-300 ease-in-out'>
                Contact an Expert
              </button>
            </div>
          </div>
        </div>
        <div className='flex w-11/12 sm:w-full md:w-1/2 lg:w-1/2 order-1 md:order-2 md:rtl:order-1 m-auto sm:mb-10 md:mb-0'>
          <div className='w-full p-2 md:p-4'>
            <iframe
              src='https://www.youtube.com/embed/7e90gBu4pas'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              className='w-full h-96 md:h-96 lg:h-96'
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCarousel;
