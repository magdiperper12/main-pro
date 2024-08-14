import React from "react";

import image1 from "../../images/doctor2.jpg";

function Industriesheader() {
  return (
    <div>
      <div className='mt-24 md:mt-32 lg:mt-40 '>
        <div className='text-center my-7 md:my-12 space-y-3'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold mt-5 leading-tight'>
            Integrated and Intelligent Solutions for Various Business Sectors
          </h1>
          <p className='text-lg md:text-xl lg:text-2xl m-auto w-3/4'>
            Discover how to transform your business with our customized AI
            solutions designed to enhance efficiency and deliver exceptional
            results across diverse industrial sectors
          </p>
        </div>
      </div>
      <div className='w-full h-96 sm:mb-10 md:mb-32 overflow-hidden '>
        <img src={image1} alt='' className='w-3/4 m-auto bg-cover ' />
      </div>
    </div>
  );
}

export default Industriesheader;
