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
    heading: "Start with Registration and Subscription",
    text: "Begin your journey with us by creating a new account and choosing the package that suits your needs",
    image: image1,
    list: [
      "     Quick and easy registration on Botbat platform",
      "   Select the appropriate package for your business    from multiple options",
      "    Start immediately with our specialized team upon subscription",
    ],
  },
  {
    heading: "Identify Your Needs and Customize the Plan",
    text: "Define the goals and tasks you want to delegate to our team, and we'll work on tailoring a work plan that meets your needs",
    image: image2,
    list: [
      "    Comprehensive analysis of your business requirements",
      "    Assigning a work team that aligns with your goals",
      "    Developing a clear implementation plan",
    ],
  },
  {
    heading: "Task Execution with Full Supervision",
    text: "Once your needs are identified, our team begins executing the required tasks efficiently and under our full supervision",
    image: image4,
    list: [
      "   Setting up communication channels and work tools",
      "   Establishing Key Performance Indicators (KPIs)",
      "    Initiating operational processes under our supervision",
      "  Providing transparent performance reports on work results"
    ],
  },
  {
    heading: "Performance Monitoring and Continuous Improvement",
    text: "Regular review of team performance and work results to ensure the best outcomes and continuous development",
    image: image3,
    list: [
      "    Continuous monitoring of work quality and performance",
      "   Providing periodic reports on work progress",
      "    Offering recommendations for continuous improvement",
    ],
  },
];

function Agentexperience() {
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

export default Agentexperience;
