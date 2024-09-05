import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import logo from "../../images/logo-word (1).png";

const Footer: React.FC = () => {
  const links = ["link one", "link two", "link three", "link four"];

  return (
    <div className='bg-slate-600 text-white relative'>
      <div className='container flex w-11/12 text-center mx-auto'>
        <div className='w-full p-4'>
          <div className='mt-8 md:mt-10 flex flex-col md:flex-row items-center justify-between'>
            <div className='px-2 py-3   w-full lg:w-1/2'>
              <div className='text-center lg:text-left'>
                <img src={logo} alt='Logo' className='h-16 md:h-14 sm:h-10' />
              </div>
              <p className='mt-5 text-start sm:text-lg md:text-xl'>
                With powerful conversational AI on one platform.
              </p>
              <div className='mt-12 flex flex-row gap-2'>
                <input
                  className='w-8/12 md:w-6/12 sm:w-full lg:w-8/12 shadow border rounded py-3 px-3 text-gray-700 focus:outline-none focus:shadow-outline'
                  type='email'
                  id='email'
                  placeholder='name@flowbite.com'
                  required
                />
                <button
                  type='submit'
                  className='w-4/12 md:w-5/12 sm:w-4/12 lg:w-4/12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-3'
                >
                  Subscribe
                </button>
              </div>
              <p className='mt-5 text-start sm:text-lg md:text-xl'>
                With powerful conversational AI on one platform.
              </p>
              <div className='flex justify-center gap-4 my-5 md:my-10'>
                <FaInstagram className='h-12 w-12 p-2' />
                <FaWhatsapp className='h-12 w-12 p-2' />
                <FaFacebook className='h-12 w-12 p-2' />
                <FaYoutube className='h-12 w-12 p-2' />
                <FaLinkedin className='h-12 w-12 p-2' />
                <FaTwitter className='h-12 w-12 p-2' />
              </div>
            </div>
            <div className='w-full lg:w-1/2 flex flex-wrap'>
              {Array.from({ length: 3 }).map((_, colIndex) => (
                <div
                  key={colIndex}
                  className='w-full md:w-1/2 lg:w-1/3 text-center'
                >
                  <h1 className='text-xl font-bold mb-4'>
                    Column {colIndex + 1}
                  </h1>
                  {links.map((link, index) => (
                    <h1 key={index} className='my-2'>
                      {link}
                    </h1>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='bg-transparent text-blue-50 p-3 w-full text-center'>
        All <span className='text-xl'>&copy;</span> Copyright 2024 BotBat
      </div>
    </div>
  );
};

export default Footer;
