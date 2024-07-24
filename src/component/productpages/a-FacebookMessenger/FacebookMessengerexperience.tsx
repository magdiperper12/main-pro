import React from "react";
import image1 from "../../images/header.jpg";
import image2 from "../../images/campaign.webp";
import image3 from "../../images/customer_support.webp";
import image4 from "../../images/robotic.webp";

interface FeatureItem {
  heading: string;
  text: string;
  list: string[];
  image: React.ElementType;
}
const items: FeatureItem[] = [
  {
    heading: "Seamlessly connect with existing tools and platforms",
    text: "Enhance your operational efficiency by seamlessly connecting our platform with all your existing tools and systems, creating a unified and effective experience",
    image: image1,
    list: [
      " Flexible APIs to ensure smooth integration.",
      "  Data synchronization to ensure information consistency",
      "Consolidating data from all sources in one place",
      "Process automation across systems to reduce errors and increase efficiency",
    ],
  },
  {
    heading: "Create smart chatbots for efficient automated support",
    text: "Create a Messenger bot for automated, AI-powered support that provides uninterrupted customer service and evolves with each interaction.",
    image: image2,
    list: [
      " Advanced NLP for Accurate Request Handling",
      " Dynamic Customization Based on Customer History",
      "Multilingual Capabilities for Global Reach",
      "Seamless Integration with Booking and Payment Systems",
    ],
  },
  {
    heading: "Optimizing Customer Support with Cutting-Edge Cloud Solutions",
    text: "Elevate your customer support experience to new horizons with our advanced cloud system that combines efficiency and personalization",
    image: image4,
    list: [
      "understanding and anticipating customer needs.",
      "Unified dashboard for efficiently managing all interactions.",
      " Integrated support with existing systems.",
      "Improved customer experience.",
    ],
  },
  {
    heading: "Innovative Strategies to Convert Hesitant Shoppers",
    text: "Turn missed opportunities into successes with our smart approach to abandoned cart recovery and re-engaging hesitant customers.",
    image: image3,
    list: [
      " Automated reminder messages for re-engagement.",
      " Special offers for customers based on previous browsing.",
      " Analyze shopping behavior to increase conversion chances.",
      "Integration with e-commerce platforms.",
    ],
  },
];

function FacebookMessengerexperience() {
  return (
    <div className='py-16'>
      <div className='container mx-auto px-4 text-center'>
        <div className='flex flex-col space-y-24'>
          {/* Step 1 */}
          {items.map((item, index) => (
            <div
              className={`flex flex-col md:flex-row-reverse
               items-start md:space-x-8 `}
              key={index}
            >
              <div className='w-full md:w-1/2 px-14'>
                <img
                  src={item.image}
                  alt='Automate communication'
                  className='rounded-lg object-cover object-center hover:scale-105 duration-200'
                />
              </div>
              <div
                className={`w-full px-12 md:w-1/2 text-start  mt-8 md:mt-24`}
              >
                <h2 className='text-2xl md:text-3xl font-semibold mb-4'>
                  {item.heading}
                </h2>
                <p className='text-lg'>{item.text}</p>
                <ul className='text-lg text-gray-600 list-disc text-start px-0 md:px-4 lg:px-8  list-inside my-5 marker:text-blue-800 '>
                  {item.list.map((listItem, idx) => (
                    <li
                      key={idx}
                      className='hover:translate-x-2 duration-200 hover:text-blue-900 cursor-pointer'
                    >
                      {listItem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FacebookMessengerexperience;
