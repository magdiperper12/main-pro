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
    heading: "Identifying Challenges and Opportunities",
    text: "We conduct a comprehensive analysis of the current situation and identify opportunities and challenges to achieve tangible and measurable improvements",
    image: image1,
    list: [
      "      Comprehensive analysis of current processes",
      "    Identification of key improvement areas",
      "    Setting measurable goals",
    ],
  },
  {
    heading: "Developing Customized Solutions Based on Specific Needs",
    text: "Develop a customized solution that meets specific needs and achieves seamless integration with existing systems, focusing on data security and privacy",
    image: image2,
    list: [
      "   Designing a tailored implementation plan",
      "   Developing initial solution prototypes",
      "    Ensuring compliance with local legislation and policies",
    ],
  },
  {
    heading: "Implementing Solutions and Training Teams",
    text: "Efficiently implement new solutions while providing comprehensive team training to ensure rapid adaptation and optimal use of modern technologies",
    image: image4,
    list: [
      "   Seamless integration with existing government systems",
      "    Providing specialized training for different teams",
      "    Continuous support to ensure the sustainability of solutions",
    ],
  },
  {
    heading: "Continuous Analysis and Improvement",
    text: "Provide ongoing evaluation services to ensure achievement of desired goals and deliver periodic improvements to implemented solutions",
    image: image3,
    list: [
      "    Post-implementation performance monitoring",
      "    Providing periodic analytical system reports",
      "    Implementing necessary improvements based on results",
    ],
  },
];

function Governmentexperience() {
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

export default Governmentexperience;
