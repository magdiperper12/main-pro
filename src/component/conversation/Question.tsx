import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

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
      <div className='space-y-5'>
        {items.map((faq, index) => (
          <div
            key={index}
            className='pt-7 pb-3 px-5  space-y-1  shadow-custom shadow-gray-200 text-start mx-auto w-full md:w-10/12 rounded-md'
          >
            <div
              className='flex justify-between items-center cursor-pointer'
              onClick={() => handleToggle(index)}
            >
              <h2 className='text-lg  md:text-2xl  font-bold text-blue-950'>
                {faq.question}
              </h2>
              {expandedIndex === index ? (
                <FaCaretDown className='text-blue-600 text-3xl transition-transform hover:text-black rotate-180' />
              ) : (
                <FaCaretUp className='text-black text-3xl transition-transform transform rotate-180 hover:text-blue-700' />
              )}
            </div>

            <div
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                expandedIndex === index
                  ? "max-h-64 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className='text-base  md:text-lg sm:text-base text-blue-900 mt-4'>
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
