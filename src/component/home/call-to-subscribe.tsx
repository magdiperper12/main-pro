import { useState } from "react";
import { GoArrowLeft, GoArrowRight, GoDotFill } from "react-icons/go";
import image2 from "../../images/logo-word (1).png";
import image3 from "../../images/campaign.webp";
import image4 from "../../images/customer_support.webp";
import image from "../../images/robotic.webp";
import { FaEnvelope, FaStar } from "react-icons/fa";
import React from "react";
const slides = [
  {
    name: "magdi perper",
    position: "CEO , APC",
    image: image4,
    image2: image2,
  },
  { name: "jhone doe", position: "Nothing , IT", image: image, image2: image3 },
  {
    name: "mohamed fayez",
    position: "ENG , nothing",
    image: image,
    image2: image4,
  },
];

function CallToSubscribe() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className='mt-10 md:mt-52'>
      <div className='container mt-28 lg:mt-28 md:mt-28 sm:mt-28 mx-auto px-4 py-4 lg:px-32 lg:pt-5 md:pt-5 sm:pt-5 pt-5 w-full lg:w-3/4 md:w-3/4  bg-zinc-200 rounded-0 lg:rounded-lg md:rounded-lg sm:rounded-0 text-start'>
        <div className='-m-1 flex flex-wrap md:-m-2  text-center lg:text-left md:text-left sm:text-center'>
          <div className='  w-full sm:w-full md:w-1/4 lg:w-1/4 order-1 md:order-1 sm:order-2 flex justify-center pt-5 md:pt-10 lg:pt-10'>
            <FaEnvelope className=' text-8xl lg:text-9xl md:text-8xl sm:text-8xl' />
          </div>
          <div className='inline-block  w-full sm:w-full md:w-3/4 lg:w-3/4 order-2 md:order-2 sm:order-1 py-10'>
            {" "}
            <h1 className='text-2xl  text-end'>
              Discover Our Exciting Product Features
            </h1>
            <p className='text-1xl text-end'>
              Unlock the Power of Our Innovative Solution Today
            </p>
            <div className='mt-12 flex gap-2 text-start'>
              <input
                className='w-8/12 shadow appearance-none border rounded  py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-6/12 sm:w-full lg:w-8/12'
                type='email'
                id='email'
                placeholder='name@flowbite.com'
                required
              ></input>
              <button
                type='submit'
                className='text-white w-4/12 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm   text-center  py-3  md:w-5/12 sm:w-full lg:w-4/12 lg:px-3 md:px-3 sm:px-1 '
              >
                account
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center w-full flex justify-center text-lg pt-10 gap-1'>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <div className='mt-20 '>
        <div className='flex justify-between '>
          <div
            className='border-2 rounded-full w-10 h-10 lg:w-20 md:w-20 sm:w-10 lg:h-20 md:h-20 sm:h-10 flex justify-center relative  cursor-pointer mx-3 lg:mx-10 md:10'
            onClick={prevSlide}
          >
            <GoArrowLeft className='absolute top-2 text-xl lg:top-6 md:top-6 lg:text-3xl md:text-3xl ' />
          </div>

          <div
            className='border-2 rounded-full w-10 h-10 lg:w-20 md:w-20 sm:w-10 lg:h-20 md:h-20 sm:h-10 flex justify-center relative mx-3 lg:mx-10 md:10 cursor-pointer'
            onClick={nextSlide}
          >
            <GoArrowRight className='absolute top-2 text-xl lg:top-6 md:top-6 lg:text-3xl md:text-3xl' />
          </div>
        </div>

        {slides.map((item, index) => (
          <div
            key={index}
            className={`text-center w-full mb-7 ${
              index === currentSlide ? "" : "hidden"
            }`}
          >
            {/* Adjust the classes as per your styling */}
            <span className='text-2xl inline-block px-2 py-3 lg:px-10 md:px-10 border-e-4 border-blue-700'>
              <div className='flex justify-around'>
                <div>
                  <img
                    src={item.image}
                    alt=''
                    className='w-10 h-10 rounded lg:w-20 md:w-20 sm:w-10 lg:h-20 md:h-20 sm:h-10'
                  />
                </div>
                <div className='text-left'>
                  <h1 className='text-sm font-bold lg:text-lg md:text-lg'>
                    {item.name}
                  </h1>
                  <p className='text-sm lg:text-lg md:text-lg'>
                    {item.position}
                  </p>
                </div>
              </div>
            </span>
            <span className='text-2xl inline-block px-7 py-3 lg:px-10 md:px-10'>
              <div>
                <img
                  src={item.image2}
                  alt=''
                  className='w-20 h-10 lg:w-52 md:w-52 sm:w-20 lg:h-20 md:h-20 sm:h-10'
                />
              </div>
            </span>
          </div>
        ))}

        <div className='text-center w-full'>
          {slides.map((_, index) => (
            <span
              key={index}
              className={`text-2xl ${
                index === currentSlide ? "opacity-100" : "opacity-30"
              } inline-block`}
            >
              <GoDotFill />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CallToSubscribe;
