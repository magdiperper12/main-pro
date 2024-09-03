import React, { useState } from "react";
import { GoArrowLeft, GoArrowRight, GoDotFill } from "react-icons/go";
import image2 from "../../images/logo-word (1).png";
import image3 from "../../images/campaign.webp";
import image4 from "../../images/customer_support.webp";
import image from "../../images/robotic.webp";
import { FaEnvelope, FaStar } from "react-icons/fa";

interface Testimonial {
  name: string;
  position: string;
  title: string;
  image: string; // Assuming image is a URL or path
  image2: string; // Assuming image2 is a URL or path
  stars: JSX.Element[]; // Array of JSX elements (stars)
}
const slides: Testimonial[] = [
  {
    name: "magdi perper",
    position: "CEO , APC",
    title: " Our Experience With Botbat was Exceptional, We Have Everything we",
    image: image4,
    image2: image2,
    stars: [
      <FaStar key={1} className='text-yellow-500' />,
      <FaStar key={2} className='text-yellow-500' />,
      <FaStar key={3} className='text-yellow-500' />,
      <FaStar key={4} className='text-yellow-500' />,
      <FaStar key={5} className='text-zinc-500' />,
    ],
  },
  {
    name: "jhone doe",
    title: " Our company are used this app and its very good using we",
    position: "Nothing , IT",
    image: image,
    image2: image3,
    stars: [
      <FaStar key={1} className='text-yellow-500' />,
      <FaStar key={2} className='text-yellow-500' />,
      <FaStar key={3} className='text-yellow-500' />,
      <FaStar key={4} className='text-zinc-500' />,
      <FaStar key={5} className='text-zinc-500' />,
    ],
  },
  {
    name: "mohamed fayez",
    position: "ENG , nothing",
    title: " Our Experience With Botbat app and its very good using we",
    image: image,
    image2: image4,
    stars: [
      <FaStar key={1} className='text-yellow-500' />,
      <FaStar key={2} className='text-yellow-500' />,
      <FaStar key={3} className='text-yellow-500' />,
      <FaStar key={4} className='text-yellow-500' />,
      <FaStar key={5} className='text-yellow-500' />,
    ],
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
    <div className='mt-12'>
      <div className='mt-20 relative'>
        <div className='flex justify-between absolute top-5 md:top-14 w-full '>
          <div
            className='border-2 rounded-full w-10 h-10 lg:w-20 md:w-20 sm:w-10 lg:h-20 md:h-20 sm:h-10 flex justify-center relative  cursor-pointer mx-3 lg:mx-10 md:10  order-1 rtl:order-2'
            onClick={prevSlide}
          >
            <GoArrowLeft className='absolute top-2 text-xl lg:top-6 md:top-6 lg:text-3xl md:text-3xl ' />
          </div>
          <div
            className='border-2 rounded-full w-10 h-10 lg:w-20 md:w-20 sm:w-10 lg:h-20 md:h-20 sm:h-10 flex justify-center relative mx-3 lg:mx-10 md:10 cursor-pointer  order-2 rtl:order-1'
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
            <div className='text-center w-full flex justify-center text-lg md:text-xl lg:text-2xl pt-10 gap-1 mb-5'>
              {item.stars}
            </div>
            <h1 className='text-center text-lg md:text-2xl lg:text-3xl font-bold mt-5 mx-10 md:mx-0 '>
              {item.title}
            </h1>

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
};

export default Testimonial;
