import image from "../../images/logo-word (1).png";
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import React from "react";

function Footer() {
  return (
    <div className='bg-slate-600 text-blue-10 text-white relative'>
      <div className='container flex w-11/12 text-center m-auto'>
        <div className='w-full  p-2 md:p-4 m-auto'>
          <div className='mt-8 md:mt-10 flex flex-col md:flex-row items-center justify-between'>
            <div className=' px-2 py-3 mb-2 md:mb-0 md:mr-3 w-full lg:w-1/2 md:w-1/2 sm:w-auto'>
              <div className='w-full text-center lg:text-left md:text-left sm:text-left '>
                <img
                  src={image}
                  alt=''
                  className='lg:m-0 md:m-0 h-14 lg:h-16 md:h-16 sm:h-10'
                />
              </div>
              <p className=' sm:text-lg md:text-xl lg:text-1xl mt-5   text-start '>
                With powerful conversational AI on one platform With powerful m
                conversational AI on one platform
              </p>
              <div className='mt-12 flex flex-row gap-2'>
                <input
                  className='w-8/12 shadow appearance-none border rounded  py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-6/12 sm:w-full lg:w-8/12'
                  type='email'
                  id='email'
                  placeholder='name@flowbite.com'
                  required
                ></input>
                <button
                  type='submit'
                  className='text-white w-4/12 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm   text-center  py-3  md:w-5/12 sm:w-4/12 lg:w-4/12 lg:px-3 md:px-3 sm:px-1 '
                >
                  Subscribe
                </button>
              </div>
              <p className='text-base sm:text-lg md:text-xl lg:text-1xl mt-5 flex   justify-center text-start'>
                With powerful conversational AI on one platform With powerful
                conversational AI on one platform
              </p>
              <div className='flex flex-row text-center mx-auto my-10'>
                <FaInstagram className="h-12 w-12 p-2" />
                <FaWhatsapp className="h-12 w-12 p-2" />
                <FaFacebook className="h-12 w-12 p-2" />
                <FaYoutube className="h-12 w-12 p-2" />
                <FaLinkedin className="h-12 w-12 p-2" />
                <FaTwitter className="h-12 w-12 p-2" />
              </div>
            </div>
            <div className=' text-start px-4 py-3 mb-2 md:mb-0 md:mr-3 w-full lg:w-1/2 md:w-1/2 sm:w-auto flex relative text-sm md:text-lg lg:text-lg'>
              <div className='w-full lg:w-1/2 md:w-1/2 sm:w-auto '>
                <h1 className='block text-xl my-4 font-extrabold'>
                  column one
                </h1>
                <h1 className='block  my-2 '>link one</h1>
                <h1 className='block  my-2'>link tow</h1>
                <h1 className='block  my-2'>link three</h1>
                <h1 className='block  my-2'>link four</h1>
                <h1 className='block  my-2'>link one</h1>
                <h1 className='block  my-2'>link tow</h1>
                <h1 className='block  my-2'>link three</h1>
                <h1 className='block  my-2'>link four</h1>
              </div>
              <div className='w-full lg:w-1/2 md:w-1/2 sm:w-auto'>
                <h1 className='block text-1xl my-4 font-extrabold'>
                  column one
                </h1>
                <h1 className='block  my-2'>link one</h1>
                <h1 className='block  my-2'>link tow</h1>
                <h1 className='block  my-2'>link three</h1>
                <h1 className='block  my-2'>link four</h1>
                <h1 className='block  my-2'>link one</h1>
                <h1 className='block  my-2'>link tow</h1>
                <h1 className='block  my-2'>link three</h1>
                <h1 className='block  my-2'>link four</h1>
              </div>
              <div className='w-full lg:w-1/2 md:w-1/2 sm:w-auto'>
                <h1 className='block text-1xl my-4 font-extrabold'>
                  column one
                </h1>
                <h1 className='block  my-2'>link one</h1>
                <h1 className='block  my-2'>link tow</h1>
                <h1 className='block  my-2'>link three</h1>
                <h1 className='block  my-2'>link four</h1>
                <h1 className='block  my-2'>link one</h1>
                <h1 className='block  my-2'>link tow</h1>
                <h1 className='block  my-2'>link three</h1>
                <h1 className='block  my-2'>link four</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-transparent text-blue-50 p-3 w-full text-center  bottom-0 right-0 '>
        All <span className='text-1xl'>&copy;</span> Copyright 2024 BotBat
      </div>
    </div>
  );
}

export default Footer;
