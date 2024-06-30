import { HiOutlineMailOpen } from "react-icons/hi";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookMessenger,
  FaTelegram,
  FaEnvelope,
  FaCommentDots,
} from "react-icons/fa";
import React from "react";

function Channels() {
  return (
    <div className='mt-10 md:mt-44'>
      {/* header */}
      <div className='text-center'>
        <h1 className='text-3xl md:text-3xl lg:text-4xl font-extrabold mt-5 leading-tight'>
          Reach and engage customers
        </h1>
        <p className='text-base sm:text-lg md:text-xl lg:text-2xl mt-5 flex   justify-center px-5'>
          With powerful conversational AI on one platformon their favorite
          channels
        </p>
      </div>

      {/* content */}
      <div className='container mx-auto px-4 py-2 lg:px-32 lg:pt-12'>
        <div className='-m-1 flex flex-wrap md:-m-2'>
          <div className='flex w-full md:w-1/2 lg:w-1/2  my-5 text-start'>
            <div className=' w-3/12 '>
              <FaCommentDots className='w-full text-4xl lg:text-6xl md:text-5xl  text-blue-700 ' />
            </div>
            <div className='w-9/12'>
              <h1 className=' text-gray-600 text-xl sm:text-lg md:text-xl lg:text-2xl font-black '>
                SMS
              </h1>{" "}
              <p className=''>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                officiis minus assumenda consectetur !
              </p>
            </div>
          </div>
          <div className='flex w-full md:w-1/2 lg:w-1/2  my-5 text-start'>
            <div className=' w-3/12 '>
              <FaCommentDots className='w-full text-4xl lg:text-6xl md:text-5xl  text-slate-700   ' />
            </div>
            <div className='w-9/12'>
              <h1 className=' text-gray-600 text-xl sm:text-lg md:text-xl lg:text-2xl font-black '>
                Conversational Chat
              </h1>{" "}
              <p className=''>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                officiis minus assumenda consectetur !
              </p>
            </div>
          </div>
          <div className='flex w-full md:w-1/2 lg:w-1/2  my-5 text-start'>
            <div className=' w-3/12 '>
              <FaTelegram className='w-full text-4xl lg:text-6xl md:text-5xl text-blue-500   ' />
            </div>
            <div className='w-9/12'>
              <h1 className=' text-gray-600 text-xl sm:text-lg md:text-xl lg:text-2xl font-black'>
                Telegram
              </h1>{" "}
              <p className=''>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                officiis minus assumenda consectetur !
              </p>
            </div>
          </div>
          <div className='flex w-full md:w-1/2 lg:w-1/2  my-5 text-start'>
            <div className=' w-3/12 '>
              <FaEnvelope className='w-full text-4xl lg:text-6xl md:text-5xl text-gray-500  ' />
            </div>
            <div className='w-9/12'>
              <h1 className=' text-gray-600 text-xl sm:text-lg md:text-xl lg:text-2xl font-black'>
                Email
              </h1>{" "}
              <p className=''>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                officiis minus assumenda consectetur !
              </p>
            </div>
          </div>
          <div className='flex w-full md:w-1/2 lg:w-1/2  my-5 text-start'>
            <div className=' w-3/12 '>
              <FaFacebookMessenger className='w-full text-4xl lg:text-6xl md:text-5xl   text-blue-700' />
            </div>
            <div className='w-9/12'>
              <h1 className=' text-gray-600 text-xl sm:text-lg md:text-xl lg:text-2xl font-black'>
                Messenger
              </h1>{" "}
              <p className=''>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                officiis minus assumenda consectetur !
              </p>
            </div>
          </div>

          <div className='flex w-full md:w-1/2 lg:w-1/2  my-5 text-start'>
            <div className=' w-3/12 '>
              <HiOutlineMailOpen className='w-full text-4xl lg:text-6xl md:text-5xl text-slate-600  ' />
            </div>
            <div className='w-9/12'>
              <h1 className=' text-gray-600 text-xl sm:text-lg md:text-xl lg:text-2xl font-black'>
                MMS
              </h1>{" "}
              <p className=''>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                officiis minus assumenda consectetur !
              </p>
            </div>
          </div>

          <div className='flex w-full md:w-1/2 lg:w-1/2  my-5 text-start'>
            <div className=' w-3/12  '>
              <FaInstagram className='w-full text-4xl lg:text-6xl md:text-5xl text-red-700' />
            </div>
            <div className='w-9/12'>
              <h1 className=' text-gray-600 text-xl sm:text-lg md:text-xl lg:text-2xl font-black  '>
                Instagram
              </h1>{" "}
              <p className=''>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                officiis minus assumenda consectetur !
              </p>
            </div>
          </div>
          <div className='flex w-full md:w-1/2 lg:w-1/2  my-5 text-start'>
            <div className=' w-3/12 '>
              <FaWhatsapp className='w-full text-4xl lg:text-6xl md:text-5xl text-green-700  ' />
            </div>
            <div className='w-9/12'>
              <h1 className=' text-gray-600 text-xl sm:text-lg md:text-xl lg:text-2xl font-black'>
                WhatsApp
              </h1>{" "}
              <p className=''>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                officiis minus assumenda consectetur !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Channels;
