import React, { useState } from "react";
import { IoIosArrowDropup, IoIosArrowDropdownCircle } from "react-icons/io";

interface FeatureItem {
  answer: string;
  question: string;
}
interface DispatchProps {
  theheader: string;
  items: FeatureItem[];
}

const Question: React.FC<DispatchProps> = ({ theheader, items }) => {
  // State to manage which FAQ is expanded
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Toggle function to expand or collapse the FAQ item
  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className='my-20 px-4'>
      <h1 className='text-2xl lg:text-5xl md:text-3xl sm:text-2xl font-bold text-blue-950 mb-16 text-center'>
        {theheader}
      </h1>
      <div className='space-y-16'>
        {items.map((faq, index) => (
          <div
            key={index}
            className='pt-7 px-5  space-y-4 shadow-lg shadow-blue-50 text-start mx-auto w-full md:w-10/12 rounded-md'
          >
            <div
              className='flex justify-between items-center cursor-pointer'
              onClick={() => handleToggle(index)}
            >
              <h2 className='text-xl lg:text-3xl md:text-2xl sm:text-xl font-bold text-blue-950'>
                {faq.question}
              </h2>
              {expandedIndex === index ? (
                <IoIosArrowDropdownCircle className='text-blue-700 text-3xl transition-transform transform rotate-180 hover:text-black' />
              ) : (
                <IoIosArrowDropup className='text-blue-600 text-3xl transition-transform hover:text-black rotate-180' />
              )}
            </div>

            <div
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                expandedIndex === index
                  ? "max-h-64 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className='text-base lg:text-xl md:text-lg sm:text-base text-blue-900 mt-4'>
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
