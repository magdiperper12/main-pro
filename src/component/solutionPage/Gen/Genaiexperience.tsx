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
    heading: "Begin Your Journey with Generative AI",
    text: "A simple and quick registration process that allows you to start using our service immediately and access advanced tools",
    image: image1,
    list: [
      "   Create an account in minutes",
      "   Choose the package that suits your business needs",
      "  Easily customize initial settings and explore tools",
    ],
  },
  {
    heading: "Tailor the Solutions to Fit Your Business Needs and Capabilities",
    text: "Explore the wide range of available tools and features and learn how to use them to enhance your business",
    image: image2,
    list: [
      "   Select appropriate settings",
      "  Practical examples of different use cases in your field",
      "  Integration with existing business systems",
    ],
  },
  {
    heading: "Integrate AI into Your Workflow",
    text: "We assist you in seamlessly implementing Generative AI solutions across various aspects of your business",
    image: image4,
    list: [
      "  Customized implementation plan for your business",
      "  Specialized technical support during the integration process",
      "  Employee training on using new tools",
    ],
  },
  {
    heading: "Monitor Results andImprove Performance",
    text: "Leverage advanced analytics to track the performance of AI solutions and continuously improve them to achieve the best results",
    image: image3,
    list: [
      "  Comprehensive dashboard for performance monitoring",
      "  Periodic reports with insights and recommendations",
      "   Continuous updates to improve the service based on data",
    ],
  },
];

function Genaiexperience() {
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

export default Genaiexperience;
