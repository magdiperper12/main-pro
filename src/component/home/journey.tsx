import React from "react";
import image1 from "../../images/header.jpg";
import image2 from "../../images/campaign.webp";
import image3 from "../../images/customer_support.webp";
import image4 from "../../images/robotic.webp";

const items = [
  {
    heading: "Automate your communication workload with Botbat",
    text: "Build Event Driven Flows and Bots to automate your communication workload. Connect your apps and services with Botbat and automate your communication workload.",
    image: image1,
  },
  {
    heading: "Support with our AI chatbot by your side.",
    text: "AI chatbot assists you in handling customer queries efficiently. Enhance customer support with our intelligent chatbot solutions.",
    image: image2,
  },
  {
    heading: "Engage Better with your Customers",
    text: "Use our tools to engage with your customers on a deeper level. Understand their needs and preferences to offer personalized solutions.",
    image: image3,
  },
  {
    heading: "Involve your Agent whenever you need.",
    text: "Seamlessly transition from automated bots to human agents whenever necessary. Ensure your customers get the best support experience.",
    image: image4,
  },
];

function Journey() {
  return (
    <div className='py-9 md:py-16'>
      <div className='container mx-auto  md:px-4 text-center'>
        <div className='flex flex-col space-y-10 md:space-y-20'>
          {items.map((item, index) => (
            <div
              className={`flex flex-col ${
                index % 2 == 0 ? "md:flex-row-reverse" : "md:flex-row"
              } items-start  md:space-x-8 `}
            >
              <div className='w-full md:w-1/2 px-4 md:px-14'>
                <img
                  src={item.image}
                  alt='Automate communication'
                  className='rounded-lg object-cover object-center'
                />
              </div>
              <div
                className={`w-full px-8  md:px-12 md:w-1/2 text-start   md:mt-0`}
              >
                <p className='relative px-8 font-bold my-1'>
                  <span className='absolute start-0 top-0 h-full w-3 bg-blue-500'></span>
                  Product Name
                </p>

                <h2 className='text-xl md:text-2xl font-semibold my-1'>
                  {item.heading}
                </h2>
                <p className='text-md md:text-lg my-1'>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Journey;
