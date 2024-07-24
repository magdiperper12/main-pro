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
    heading: "An integrated system for managing interactions",
    text: "Elevate your customer service to a new level that combines advanced technology with ease of use to improve customer interactions",
    image: image1,
    list: [
      "  Unified integrated management",
      " Advanced AI for improved response",
      "Analytics to enhance service quality",
      "High security for customer data",
    ],
  },
  {
    heading: "Instantly Engage with Smart Chatbots",
    text: "Our smart assistant Provide instant and personalized responses to customers using AI-powered, offering quick and efficient customer interactions",
    image: image2,
    list: [
      "Instant response to customer inquiries.",
      "Personalized experience for each customer.",
      "Easy and quick chatbot setup.",
      "Save time and human resources through automation",
    ],
  },
  {
    heading: "Strengthen Connections with Direct Messaging",
    text: "Enable your customers to start conversations with you directly through Instagram messages, enhancing their engagement and loyalty to your brand",
    image: image3,
    list: [
      "Easy conversation initiation from Instagram.",
      " Increased engagement and stronger customer relationships.",
      "  Continuous interaction with customers.",
      " Smooth and efficient customer service.",
    ],
  },
  {
    heading: "Elevate Strategies with Insightful Analytics",
    text: "Our analytics tools allow you to track and analyze conversation performance to better understand customer interactions and deliver improved experiences",
    image: image4,
    list: [
      "Monitor and analyze conversation performance",
      "Improve communication strategies",
      "Make data-driven decisions",
      "Provide enhanced customer experiences",
    ],
  },
];

function Instagramexperience() {
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

export default Instagramexperience;
