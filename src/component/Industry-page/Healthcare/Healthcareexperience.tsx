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
    heading: "Assessing the Current Situation ",
    text: "We analyze your current infrastructure and digital operations to identify areas needing improvement",
    image: image1,
    list: [
      "    Review current systems and processes",
      "    Identify strengths and weaknesses in the digital infrastructure",
      "   Develop a clear digital transformation strategy",
    ],
  },
  {
    heading: "Designing the Digital Transformation Strategy",
    text: "Creating a comprehensive digital transformation plan that covers all aspects of the business based on the assessment results",
    image: image2,
    list: [
      "    Identify priorities and key transformation points",
      "   Select appropriate technologies and solutions",
      "  Develop an implementation and testing roadmap",
    ],
  },
  {
    heading: "Implementing Digital Solutions",
    text: "Working on implementing solutions and integrating them with your current systems in a systematic and well-planned manner while providing necessary training for the team",
    image: image4,
    list: [
      "    Ensure installation and integration of new systems",
      "    Train employees on new tools and technologies",
      "  Monitor performance and ensure transition integration",
    ],
  },
  {
    heading: "Continuous Monitoring and Improvement",
    text: "We continue to monitor the performance of digital solutions and provide ongoing support to ensure achieving the desired goals",
    image: image3,
    list: [
      "    Collect and analyze data to measure performance",
      "    Identify opportunities for improvement and development",
      "    Implement updates and improvements periodically",
    ],
  },
];

function Healthcareexperience() {
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

export default Healthcareexperience;
