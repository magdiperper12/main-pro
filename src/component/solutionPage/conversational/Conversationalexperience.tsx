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
    heading: "Start building your perfect Botbat bot",
    text: "Use our user-friendly tool to customize your chatbot according to your business needs. Our simple interface allows you to design an exceptional user experience without any coding skills",
    image: image1,
    list: [
      "  Define the conversation style that aligns with your brand.",
      "  Add custom FAQs to address common customer inquiries.",
      " Integrate interactive elements to enhance user engagement.",
    ],
  },
  {
    heading: "Add Your Knowledge for Maximum Efficiency",
    text: "Equip the bot with information specific to your company and products to ensure accurate and helpful responses across various scenarios",
    image: image2,
    list: [
      "  Upload a database of FAQs and product/service details.",
      "Train the bot to understand field-specific terminology.",
      "  Develop interactive scenarios to handle complex cases.",
    ],
  },
  {
    heading: "Easily integrate your Platforms with BOTBAT",
    text: "Seamlessly integrate the assistant with your website or app. We provide smooth integration tools for various systems and platforms, ensuring your chatbot is accessible wherever your customers need it",
    image: image4,
    list: [
      "  Choose the platforms you want to integrate the bot with.",
      " Follow our guidelines to add the bot without coding expertise.",
      " Ensure the bot is fully integrated with your CRM systems.",
    ],
  },
  {
    heading: "Launch and Continuously Enhance Your Botbat",
    text: "Leverage Botbat's control panel to monitor and continuously improve your bot's performance. Once launched, you can  track the bot's effectiveness and make adjustments for optimal results.",
    image: image3,
    list: [
      "  Monitor Botbat's performance analytics.",
      "  Improve Botbat's responses based on customer feedback.",
      "  Regularly Keep your Botbat up-to-date.",
    ],
  },
];

function Conversationalexperience() {
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

export default Conversationalexperience;
