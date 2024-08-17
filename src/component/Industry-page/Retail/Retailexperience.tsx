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
    heading: "Consultation, Assessment , and Buisness Needs Analysis",
    text: "Conducting a comprehensive evaluation , understanding, and analysis of your buisiness need to ensour sulution that fit",
    image: image1,
    list: [
      "   in-depth analysis current operation",
      "   identification of challenges you face",
      " Recognition of oppotunities for performance improvement",
      "Development of clear action plan",
    ],
  },
  {
    heading: "Solution Development and Customization",
    text: "Our experts formulate a customized AI implementation strategy to meet your specific needs",
    image: image2,
    list: [
      "     Selection of appropriate technologies",
      "   Building prototypes",
      "   Solution testing",
    ],
  },
  {
    heading: "Solution Implementationand Performance Monitoring",
    text: "After developing solutions, we implement them with careful monitoring to ensure their effectiveness and integration with your existing business systems",
    image: image4,
    list: [
      "   Applying agreed solutions in the work environment",
      "    Monitoring performance to ensure goal achievement",
      "   Making necessary adjustments based on feedback",
    ],
  },
  {
    heading: "Providing Supportand Continuous Development",
    text: "Incorporating continuous improvement and expanding AI capabilities to ensure sustainable success and ongoing development",
    image: image3,
    list: [
      "    Providing technical support services and team training",
      "   Continuous monitoring of solution performance and providing     ongoing improvements",
      "     Offering periodic consultations for performance development",
    ],
  },
];

function Retailexperience() {
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

export default Retailexperience;
