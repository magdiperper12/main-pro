import React from "react";
import { FaCheckCircle } from "react-icons/fa";

function Affordable() {
  return (
    <div className=''>
      <div className='flex flex-col h-auto  my-16'>
        <div className='bg-slate-600 h-auto flex flex-col justify-center py-32  text-white items-center space-y-3'>
          <h1 className='text-3xl lg:text-5xl md:text-4xl sm:text-3xl font-bold'>
            Affordable Plans for Every Need
          </h1>
          <p className='text-lg lg:text-2xl md:text-xl sm:text-lg '>
            Choose a plane that fits your busniess
          </p>
        </div>
        <div className=' w-full  mt-20'>
          <div className=' h-auto grid grid-cols-3 gap-10 lg:gap-12  w-10/12 sm:w-10/12 md:w-11/12 lg:w-11/12 m-auto text-white text-nowrap '>
            <div className='col-span-3 sm:col-span-3 md:col-span-1 lg:col-span-1   text-center rounded-xl   shadow-lg shadow-blue-100 hover:shadow-xl hover:shadow-blue-200 duration-200'>
              <div className='bg-blue-500  py-10 rounded-t-xl  '>
                <h2 className=' text-4xl lg:text-4xl md:text-xl sm:text-4xl font-bold '>
                  Free plane
                </h2>
                <h2 className=' text-lg lg:text-lg md:text-sm sm:text-lg mt-3'>
                  Give us a try for free
                </h2>
                <div className='text-2xl mt-8'>
                  <span className='font-bold text54xl lg:text-5xl md:text-3xl sm:text54xl'>
                    0$
                  </span>
                  / month
                </div>
              </div>
              <div className='py-10  text-blue-900 w-full px-3 lg:px-7 md:px-3 sm:px-10'>
                <ul className='text-start list-inside   text-2xl lg:text-2xl md:text-xl sm:text-2xl  text-blue-900  space-y-5 '>
                  <li>
                    <FaCheckCircle className='text-xl lg:text-xl md:text-lg sm:text-xl inline me-3 text-blue-500 ' />
                    1 seat
                  </li>
                  <li>
                    <FaCheckCircle className='text-xl lg:text-xl md:text-lg sm:text-xl inline me-3 text-blue-500 ' />
                    1 active project
                  </li>
                  <li>
                    <FaCheckCircle className='text-xl lg:text-xl md:text-lg sm:text-xl inline me-3 text-blue-500 ' />
                    Ulimited viewers
                  </li>
                  <li>
                    <FaCheckCircle className='text-xl lg:text-xl md:text-lg sm:text-xl inline me-3 text-blue-500 ' />
                    10 blocks
                  </li>
                  <ul className='text-start   text-2xl lg:text-2xl md:text-xl sm:text-2xl text-slate-400  space-y-4 line-through list-inside'>
                    <li>
                      <FaCheckCircle className='text-xl lg:text-xl md:text-lg sm:text-xl inline me-3 text-slate-400 ' />
                      csv Downloader
                    </li>
                    <li>
                      <FaCheckCircle className='text-xl lg:text-xl md:text-lg sm:text-xl inline me-3 text-slate-400 ' />
                      password projection
                    </li>
                    <li>
                      <FaCheckCircle className='text-xl lg:text-xl md:text-lg sm:text-xl inline me-3 text-slate-400 ' />
                      Customization
                    </li>
                  </ul>
                </ul>
                <button className='rounded-lg text-center m-auto text-xl font-bold bg-blue-500 text-white py-3 lg:py-3 sm:py-3 md:py-2  w-10/12 lg:w-full md:w-full sm:w-10/12   mt-16 mb-6 mx-0 lg:mx-2 hover:bg-blue-700 duration-200'>
                  Get Started
                </button>
              </div>
            </div>
            <div className='col-span-3 sm:col-span-3 md:col-span-1 lg:col-span-1   text-center rounded-xl   shadow-lg shadow-blue-100 hover:shadow-xl hover:shadow-blue-200 duration-200'>
              <div className='bg-blue-500  py-10 rounded-t-xl  '>
                <h2 className=' text-4xl lg:text-4xl md:text-xl sm:text-4xl font-bold '>
                  Pro Plan
                </h2>
                <h2 className=' text-lg lg:text-lg md:text-sm sm:text-lg mt-3'>
                  Unlock pro , Unleash Potential
                </h2>
                <div className='text-2xl mt-8'>
                  <span className='font-bold text-5xl lg:text-5xl md:text-3xl sm:text-5xl'>
                    29$
                  </span>
                  / month
                </div>
              </div>
              <div className='py-10  text-blue-900 w-full px-3 lg:px-7 md:px-3 sm:px-10'>
                <ul className='text-start list-inside   text-2xl lg:text-2xl md:text-xl sm:text-2xl  text-blue-900  space-y-5'>
                  <li>
                    <FaCheckCircle className='text-xl lg:text-xl md:text-lg sm:text-xl inline me-3 text-blue-500 ' />
                    1 seat
                  </li>
                  <li>
                    <FaCheckCircle className='text-xl lg:text-xl md:text-lg sm:text-xl inline me-3 text-blue-500 ' />
                    3 active project
                  </li>
                  <li>
                    <FaCheckCircle className='text-xl lg:text-xl md:text-lg sm:text-xl inline me-3 text-blue-500 ' />
                    Unlimited viewers
                  </li>
                  <li>
                    <FaCheckCircle className='text-xl lg:text-xl md:text-lg sm:text-xl inline me-3 text-blue-500 ' />
                    100 blocks
                  </li>
                  <li>
                    <FaCheckCircle className='text-xl lg:text-xl md:text-lg sm:text-xl inline me-3 text-blue-500 ' />
                    csv Downloader
                  </li>
                  <li>
                    <FaCheckCircle className='text-xl lg:text-xl md:text-lg sm:text-xl inline me-3 text-blue-500 ' />
                    password projection
                  </li>
                  <ul className='text-start   text-2xl lg:text-2xl md:text-xl sm:text-2xl text-slate-400  space-y-4 line-through list-inside'>
                    <li>
                      <FaCheckCircle className='text-xl lg:text-xl md:text-lg sm:text-xl inline me-3 text-slate-400 ' />
                      Customization
                    </li>
                  </ul>
                </ul>
                <button className='rounded-lg text-center m-auto text-xl font-bold bg-blue-500 text-white py-3 lg:py-3 sm:py-3 md:py-2  w-10/12 lg:w-full md:w-full sm:w-10/12   mt-16 mb-6 mx-0 lg:mx-2 hover:bg-blue-700 duration-200'>
                  Get Started
                </button>
              </div>
            </div>
            <div className='col-span-3 sm:col-span-3 md:col-span-1 lg:col-span-1   text-center rounded-xl   shadow-lg shadow-blue-100 hover:shadow-xl hover:shadow-blue-200 duration-200'>
              <div className='bg-blue-500  py-10 rounded-t-xl  '>
                <h2 className=' text-4xl lg:text-4xl md:text-xl sm:text-4xl font-bold '>
                  Enterprise Plan
                </h2>
                <h2 className=' text-lg lg:text-lg md:text-sm sm:text-lg mt-3'>
                  Get your team together
                </h2>
                <div className='text-2xl mt-8'>
                  <span className='font-bold text-5xl lg:text-5xl md:text-3xl sm:text-5xl'>
                    79$
                  </span>
                  / month
                </div>
              </div>
              <div className='py-10  text-blue-900 w-full px-3 lg:px-7 md:px-3 sm:px-10'>
                <ul className='text-start list-inside text-2xl lg:text-2xl md:text-xl sm:text-2xl  text-blue-900  space-y-5'>
                  <li>
                    <FaCheckCircle className='text-xl lg:text-xl md:text-lg sm:text-xl inline me-3 text-blue-500 ' />
                    10 seat
                  </li>
                  <li>
                    <FaCheckCircle className='text-xl lg:text-xl md:text-lg sm:text-xl inline me-3 text-blue-500 ' />
                    10 active project
                  </li>
                  <li>
                    <FaCheckCircle className='text-xl lg:text-xl md:text-lg sm:text-xl inline me-3 text-blue-500 ' />
                    Unlimited viewers
                  </li>
                  <li>
                    <FaCheckCircle className='text-xl lg:text-xl md:text-lg sm:text-xl inline me-3 text-blue-500 ' />
                    Unlimited blocks
                  </li>
                  <li>
                    <FaCheckCircle className='text-xl lg:text-xl md:text-lg sm:text-xl inline me-3 text-blue-500 ' />
                    csv Downloader
                  </li>
                  <li>
                    <FaCheckCircle className='text-xl lg:text-xl md:text-lg sm:text-xl inline me-3 text-blue-500 ' />
                    password projection
                  </li>
                  <li>
                    <FaCheckCircle className='text-xl lg:text-xl md:text-lg sm:text-xl inline me-3 text-blue-500 ' />
                    Customization
                  </li>
                </ul>
                <button className='rounded-lg text-center m-auto text-xl font-bold bg-blue-500 text-white py-3 lg:py-3 sm:py-3 md:py-2  w-10/12 lg:w-full md:w-full sm:w-10/12   mt-16 mb-6 mx-0 lg:mx-2 hover:bg-blue-700 duration-200'>
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center my-20 space-y-5 '>
          <h1 className='text-3xl lg:text-6xl md:text-4xl sm:text-3xl font-bold text-blue-950'>
            smarter automation.better conversation
          </h1>
          <p className='text-xl lg:text-3xl md:text-2xl sm:text-xl sm:w-full lg:w-1/3 text-wrap m-auto  text-blue-950'>
            prand new ai features are now avilable in pro and premium plans
          </p>
        </div>
      </div>
    </div>
  );
}

export default Affordable;
