import React from "react";
import image from "../../images/header.jpg";

function SubFeatures() {
  return (
    <div>
      <div className='text-gray-700 p-10 text-center'>
        <div className='container mx-auto md:px-5 md:py-2 lg:px-32 lg:pt-12'>
          <div className='flex flex-wrap -m-2'>
            <div className='w-full md:w-1/2 p-2 text-left mt-15'>
              <button className='w-full border-s-0  text-start hover:shadow-lg border-blue-900 p-4 md:mt-10 mt-5 transition duration-300 ease-in-out focus:border-s-4 '>
                <h1 className='text-2xl font-bold mb-2'>
                  Short heading goes here
                </h1>
                <p className='text-sm'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Praesentium esse corporis ipsam distinctio dolor.
                </p>
              </button>
              <button className='w-full border-s-0 hover:shadow-lg border-blue-900 p-4 md:mt-10 mt-5 transition duration-300 ease-in-out focus:border-s-4 text-start'>
                <h1 className='text-2xl font-bold mb-2'>
                  Short heading goes here
                </h1>
                <p className='text-sm'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Praesentium esse corporis ipsam distinctio dolor.
                </p>
              </button>
              <button className='w-full border-s-0 hover:shadow-lg border-blue-900 p-4  md:mt-10 mt-5 transition duration-300 ease-in-out focus:border-s-4 text-start'>
                <h1 className='text-2xl font-bold mb-2'>
                  Short heading goes here
                </h1>
                <p className='text-sm'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Praesentium esse corporis ipsam distinctio dolor.
                </p>
              </button>
            </div>
            <div className='w-full md:w-1/2 p-2 mt-15'>
              <div className='w-full'>
                <img
                  alt='gallery'
                  className='block h-full w-full rounded-lg object-cover object-center'
                  src={image}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubFeatures;
