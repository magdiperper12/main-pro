import { useState, useEffect } from "react";
import icon from "../../images/icon.png";
import image from "../../images/header.jpg";
import image2 from "../../images/campaign.webp";
import image3 from "../../images/customer_support.webp";
import image4 from "../../images/robotic.webp";
import React from "react";


function MainCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("ltr"); // Initial direction is left to right

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const carouselItems = [
    {
      heading: "Automate your communication workload with Botbat",
      text: "Build Event Driven Flows and Bots to automate your communication workload. Connect your apps and services with Botbat and automate your communication workload.",
      buttonText: "Click One",
      buttonText2: "Click One",
      image: image,
    },
    {
      heading: "Support with our AI chatbot by your side.",
      text: "Build Event Driven Flows and Bots to automate your communication workload. Connect your apps and services with Botbat and automate your communication workload.",
      buttonText: "Click Two",
      buttonText2: "Click One",
      image: image2,
    },
    {
      heading: "Engage Better with your Customers",
      text: "Build Event Driven Flows and Bots to automate your communication workload. Connect your apps and services with Botbat and automate your communication workload.",
      buttonText: "Click Two",
      buttonText2: "Click One",
      image: image3,
    },
    {
      heading: "Involve your Agent whenever you need.",
      text: "Build Event Driven Flows and Bots to automate your communication workload. Connect your apps and services with Botbat and automate your communication workload.",
      buttonText: "Click Two",
      buttonText2: "Click One",
      image: image4,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (direction === "ltr") {
        setActiveIndex((prevIndex) =>
          prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
        );
      } else {
        setActiveIndex((prevIndex) =>
          prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
        );
      }
    }, 3000); // Rotate every 5 seconds (5000 milliseconds)

    return () => clearInterval(interval);
  }, [carouselItems, direction]); // Run effect when carouselItems or direction changes

  const handleDirectionChange = () => {
    // Toggle between 'ltr' (left to right) and 'rtl' (right to left) direction
    setDirection(direction === "ltr" ? "rtl" : "ltr");
  };

  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {/* <Draggable>
        <div className='fixed flex justify-end bottom-12 right-12 mt-4 md:mt-6 z-10 gap-1'>
          {isVisible && (
            <div className='flex items-center bg-blue-200 rounded-full px-3 py-1 md:px-4 md:py-2 shadow-lg mx-0 md:mx-4'>
              <h1 className='text-center text-xs md:text-sm'>
                Hello, I'm Botbat. How can I assist you today?
              </h1>
            </div>
          )}
          <div className='flex mx-0 lg:mx-0 md:mx-0 items-center bg-blue-200 rounded-full p-1 md:p-2 shadow-lg'>
            <img
              src={icon}
              alt='Icon'
              className='w-10 h-10 md:w-12 md:h-12 cursor-pointer'
              onClick={toggleVisibility}
            />
          </div>
        </div>
      </Draggable> */}
      <div className='carousel-container'>
        <div
          className='carousel-slide'
          style={{
            transform: `translateX(${
              direction === "rtl" ? activeIndex * 100 : -activeIndex * 100
            }%)`,
            direction: direction === "rtl" ? "rtl" : "ltr",
          }}
        >
          {carouselItems.map((item, index) => (
            <div key={index} className='carousel-item'>
              <div className='flex item-center mt-24 lg:mt-24 md:mt-24 sm:mt-24 mx-auto px-4 py-2 lg:pt-12'>
                <div className='-m-1 flex flex-wrap md:-m-2'>
                  <div className='flex w-full md:w-1/2 lg:w-1/2 order-2 md:order-1 rtl:order-2'>
                    <div className='w-full p-2 md:p-4'>
                      <h1 className='text-4xl md:text-6xl font-bold mt-10 '>
                        {item.heading}
                      </h1>
                      <p className='text-lg md:text-xl mt-6'>{item.text}</p>
                      <div className='mt-8 md:mt-10 flex flex-col md:flex-row items-center'>
                        <button className='bg-blue-700 text-blue-50 rounded-md px-4 py-3 mb-2 md:mb-0 md:mr-3 w-full lg:w-1/2 md:w-1/2 sm:w-auto'>
                          {item.buttonText}
                        </button>
                        <button className='bg-white text-blue-900 border-blue-600 rounded-md px-4 py-3 mb-2 md:mb-0 md:mr-3 w-full lg:w-1/2 md:w-1/2 sm:w-auto border-2'>
                          {item.buttonText2}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='flex w-full md:w-1/2 lg:w-1/2 order-1 md:order-2 rtl:order-1'>
                    <div className='w-full p-2 md:p-4'>
                      <img
                        alt='Gallery'
                        className='block h-full w-full rounded-lg object-cover object-center transition-opacity duration-500'
                        src={item.image}
                        style={{ opacity: index === activeIndex ? 1 : 0 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className='fixed bottom-4 hidden right-4 bg-blue-500 text-white px-4 py-2 rounded-md shadow-lg'
        onClick={handleDirectionChange}
      >
        Toggle Direction
      </button>
    </div>
  );
}

export default MainCarousel;
