import React from "react";

function CallToSubscribe() {
  return (
    <div className='bg-gray-100 py-12 md:py-24 mt-8 md:mt-24'>
      <div className='container mx-auto text-center'>
        <div className='sm:rounded-0 text-center'>
          {/* Header of the page */}
          <div>
            <h1 className='text-3xl md:text-3xl lg:text-4xl font-extrabold mt-5 '>
              Begin with Botbat for Cost-Effective Multichannel Messaging
            </h1>
            <p className='text-base md:text-lg lg:text-xl mt-5 mx-auto max-w-2xl'>
              Build Event Driven Flows and Bots to automate your communication
              workload. Connect your apps and services with Botbat and automate
              your communication workload. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Sunt quisquam dicta pariatur,
              temporibus autem minima quia, molestiae tenetur aperiam quos et,
              eaque corrupti eum aliquid natus suscipit quam id magni.
            </p>
          </div>
          {/* Buttons */}
          <div className='mt-8 md:mt-10 flex flex-col md:flex-row justify-center items-center mx-3 md:mx-0 lg:mx-0 gap-5'>
            <button className='bg-blue-700 text-white rounded-md px-4 py-3 mb-2 md:mb-0  w-full lg:w-auto md:w-auto'>
              Start Building Today
            </button>
            <button className='bg-white text-blue-900 border border-blue-600 rounded-md px-4 py-3 mb-2 md:mb-0  w-full lg:w-auto md:w-auto'>
              Explore Our Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToSubscribe;
