
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
      <div className='flex item-center w-full my-24 lg:my-24 md:my-24 sm:my-24 mx-auto lg:px-12 py-2 lg:pt-12'>
        <div className='flex w-full md:w-1/2 lg:w-1/2 order-2 md:order-1 rtl:order-2'>
          <div className='w-full p-2 md:p-4'>
            <p>Introducing the Omni-Channel AI Bot Platform</p>
            <h1 className='text-4xl md:text-6xl font-bold mt-10 '>
              {/* {item.heading} */}
              Empower Your Customer Engagement with Botbat
            </h1>
            <p className='text-lg md:text-xl mt-6'> Transforming your communication Experience with AI-powered solutions. Connect effortlessly across omni-channel platforms, and automate your communication workload. </p>
            <div className="mt-8 md:mt-10 flex flex-col md:flex-row justify-end items-end space-y-4 md:space-y-0 md:space-x-4">
              <button className="bg-blue-700 hover:bg-blue-800 text-white rounded-md px-4 py-3 md:px-6 md:py-4 w-full lg:w-auto md:w-auto transition duration-300 ease-in-out">
                Join Now for Free
              </button>
              <button className="bg-white hover:bg-blue-50 text-blue-900 border border-blue-600 rounded-md px-4 py-3 md:px-6 md:py-4 w-full lg:w-auto md:w-auto transition duration-300 ease-in-out">
                Contact an Expert
              </button>
            </div>

          </div>
        </div>
        <div className='flex w-full md:w-1/2 lg:w-1/2 order-1 md:order-2 rtl:order-1'>
          <div className='w-full p-2 md:p-4'>
            <iframe src="https://www.youtube.com/embed/7e90gBu4pas" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className='w-full h-96 md:h-96 lg:h-96'></iframe>

          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCarousel;
