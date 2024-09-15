import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { TiFlowMerge } from "react-icons/ti";

interface Item {
  answer: string;
  question: string;
}

interface FeatureItem {
  heading: string;
  text: string;
  image?: string;
  items: Item[];
}

interface ExperienceProps {
  experienceItems: FeatureItem[];
}

const SupportExplor: React.FC<ExperienceProps> = ({ experienceItems }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className='mb-10 md:mb-16 -mt-10 md:-mt-0'>
      <div className='container mx-auto lg:px-4 sm:px-1 text-center'>
        <div className='flex flex-col space-y-4 '>
          {experienceItems.map((item, index) => (
            <div
              className='flex flex-col md:flex-row-reverse md:space-x-8  '
              key={index}
            >
              {item.image ? (
                <div className='w-full md:w-1/2 lg:px-14 sm:px-3 pt-20'>
                  <img
                    src={item.image}
                    alt={item.heading}
                    className='rounded-lg object-cover object-center hover:scale-105 duration-200 '
                  />
                </div>
              ) : (
                <div className='w-full md:w-0 px-14'></div>
              )}

              <div
                className={`w-full px-4 md:px-0 lg:px-12 ${item.image ? "md:w-1/2" : "md:w-full"
                  } text-start mt-8 md:mt-12`}
              >
                <h2 className='text-2xl md:text-3xl font-semibold mb-4'>
                  {item.heading}
                </h2>
                <p className='text-lg'>{item.text}</p>
                <div className='space-y-3'>
                  {item.items.map((faq, faqIndex) => (
                    <div
                      key={faqIndex}
                      className='pt-7 lg:px-5 sm:px-2 pb-1 space-y-4 shadow-lg shadow-blue-50 text-start mx-auto w-full md:w-full rounded-md'
                    >
                      <div
                        className='flex justify-between items-center cursor-pointer'
                        onClick={() => handleToggle(faqIndex)}
                      >
                        <h2 className=' text-md md:text-xl  font-bold text-blue-950 flex'>
                          <TiFlowMerge className='bg-blue-600  shadow-lg shadow-blue-200 rounded-full p-3 hover:-rotate-45 duration-500 inline-block text-start mx-2 lg:mx-3 ' />
                          {faq.question}
                        </h2>
                        {expandedIndex === faqIndex ? (
                          <FaCaretDown className='text-blue-700 text-2xl transition-transform transform rotate-180 hover:text-black' />
                        ) : (
                          <FaCaretUp className='text-blue-600 text-2xl transition-transform hover:text-black rotate-180' />
                        )}
                      </div>

                      <div
                        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${expandedIndex === faqIndex
                          ? "max-h-64 opacity-100"
                          : "max-h-0 opacity-0"
                          }`}
                      >
                        <p className='text-base  md:text-lg sm:text-base text-blue-900 '>
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportExplor;
