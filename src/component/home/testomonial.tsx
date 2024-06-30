import React, { useState } from "react";
import { GoArrowLeft, GoArrowRight, GoDotFill } from "react-icons/go";
import image2 from "../../images/logo-word (1).png";
import image3 from "../../images/campaign.webp";
import image4 from "../../images/customer_support.webp";
import image from "../../images/robotic.webp";
import { FaEnvelope, FaStar } from "react-icons/fa";

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


 const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="mt-12">
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
            className={`text-center w-full mb-7 ${index === currentSlide ? "" : "hidden"
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
              className={`text-2xl ${index === currentSlide ? "opacity-100" : "opacity-30"
                } inline-block`}
            >
              <GoDotFill />
            </span>
          ))}
        </div>
      </div>
    </div>);

}


export default Testimonial;