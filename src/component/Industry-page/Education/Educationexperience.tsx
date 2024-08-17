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
    heading: "Analyze Current CX and Assess the Situation",
    text: "Conduct a thorough examination of all customer touchpoints to understand the current experience and identify opportunities for improvement",
    image: image1,
    list: [
      "   Comprehensive analysis of customer touchpoints",
      "   Collect and analyze customer satisfaction data",
      "   Identify strengths and weaknesses in the current cx",
    ],
  },
  {
    heading: "Develop Customized Strategies to Improve CX",
    text: "Design tailored strategies based on initial analysis results to ensure maximum benefit from proposed improvements",
    image: image2,
    list: [
      "    Set measurable goals for CX improvement",
      "    Develop a detailed action plan and implementation phases",
      "   Identify technologies and tools necessary",
    ],
  },
  {
    heading: "Implement Solutions to Achieve Desired Results",
    text: "We work closely with you to apply the strategy and implement the necessary changes to improve customer interaction and operational efficiency",
    image: image4,
    list: [
      "   Train your team on new practices",
      "  Integrate new technologies and tools",
      "   Make gradual adjustments to ensure smooth transition",
    ],
  },
  {
    heading: "Monitor Performance and Continuous Improvement",
    text: "Monitor CX strategy performance and provide recommendations for continuous improvement, achieving desired results, and making necessary enhancements",
    image: image3,
    list: [
      "   Continuously collect and analyze CX performance data",
      "   Make ongoing adjustments based on results",
      "    Provide regular reports and recommendations for improvement",
    ],
  },
];

function Educationexperience() {
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

export default Educationexperience;
