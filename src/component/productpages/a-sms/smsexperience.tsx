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
    heading: "Send Your Messages Anywhere in the World with BOTBAT",
    text: "Propel your business to new horizons with BOTBAT's network. Discover the power of intelligent connectivity that transcends borders and delivers tangible results anywhere",
    image: image1,
    list: [
      " Vast global carrier network",
      " Local sender IDs",
      "International regulatory compliance",
      "High delivery rates",
    ],
  },
  {
    heading: "Strategic Insights to Boost Your Campaign Performance",
    text: "ransform your data into a driving force for growth. Uncover the full potential of your SMS campaigns with BOTBAT's intelligent analytics tools",
    image: image2,
    list: [
      "Real-time data",
      "Detailed reports",
      " Custom dashboards",
      "API integration",
    ],
  },
  {
    heading: "Smart Protection for Your Sensitive Communications",
    text: "Trust BOTBAT to safeguard your valuable information. We provide you with an advanced digital shield ensuring the confidentiality and integrity of every message",
    image: image3,
    list: [
      "Advanced encryption",
      "Two-factor authentication",
      "Global compliance",
      "Fraud prevention",
    ],
  },
  {
    heading: "Craft the Perfect SMS Experience for Your Business",
    text: "Craft a unique communication experience that reflects your business identity. With BOTBAT, your vision becomes reality through flexible and innovative SMS solutions",
    image: image4,
    list: [
      " Flexible API",
      "Personalized messaging",
      "Scalability",
      "Custom support",
    ],
  },
];

function Smsexperience() {
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

export default Smsexperience;
