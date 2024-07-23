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
    heading: "Unmatched Security Full Encryption and Total Protection",
    text: "Enjoy comprehensive protection and unparalleled security for your data and conversations with advanced encryption technologies.",
    image: image1,
    list: [
      "  Protection Against Hacks",
      " Enhanced Customer Trust",
      "End-to-End Encryption",
      "Compliance with Data Protection Regulations",
    ],
  },
  {
    heading: "Bot Building Made Easy: Smooth Design and Fast Execution",
    text: "Take control of creating complex bots effortlessly with an easy-to-use interface and innovative tools that enable quick and efficient execution",
    image: image2,
    list: [
      " Drag-and-Drop Interface",
      "  Ready-to-Use Templates",
      " Multilingual Support",
      "Easy Function Customization",
    ],
  },
  {
    heading: "Effortless Integration Easy System Connectivity",
    text: "Enhance your workflow efficiency by seamlessly integrating Telegram bots with CRM systems and other platforms to simplify message management and coordination effortlessly",
    image: image3,
    list: [
      " Flexible API Integration",
      " CRM and Customer Service Integration",
      " Database Connectivity",
      " Process Automation",
    ],
  },
  {
    heading: "Advanced Analytics to Enhance Your Strategies",
    text: "Gain deep insights into your message performance and audience engagement using advanced analytics tools to understand user behavior and improve your bot performance",
    image: image4,
    list: [
      " Interactive Dashboards",
      "Detailed analysis of user interactions",
      " Customizable and Exportable Reports",
      " Improve communication strategies based on data",
    ],
  },
];

function Telegramexperience() {
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

export default Telegramexperience;
