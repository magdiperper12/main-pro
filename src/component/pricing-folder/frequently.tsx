import React, { useState } from "react";
import { IoIosArrowDropup, IoIosArrowDropdownCircle } from "react-icons/io";

// Define the type for FAQ items
interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What does Botbat AI include",
    answer:
      "Botbat AI adds advanced features to your Pro plan for an additional $29 per month. These features include AI Step, Intention Recognition, Flow Builder Assistant, and Text Improver, designed to create smarter automations and better conversations.",
  },
  {
    question: "Who is Botbat AI for",
    answer:
      "Ideal for business owners, marketers, and agency leaders looking to enhance their communication strategies with advanced AI tools and more sophisticated automation capabilities.",
  },
  {
    question: "How much does Botbat AI cost",
    answer:
      "Botbat offers various plans to suit different business needs and requirements, allowing you to choose the one that best fits your needs.",
  },
  {
    question: "How do I upgrade to the next tier of Pro",
    answer:
      "Botbat automatically adjusts your tier based on your number of contacts, ensuring you only pay for what you use.",
  },
  {
    question: "Can I cancel my payment plan options at any time",
    answer:
      "Yes, you can cancel at any time by following the provided instructions.",
  },
  {
    question: "What payment forms are accepted",
    answer:
      "We accept most major credit cards, including Visa, Mastercard, American Express, and Discover.",
  },
  {
    question: "What is your refund policy for billing",
    answer:
      "We offer a no-questions-asked refund within 30 days of purchase if you are unhappy with Botbat for any reason.",
  },
];

const Frequently: React.FC = () => {
  // State to manage which FAQ is expanded
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Toggle function to expand or collapse the FAQ item
  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className='my-20 px-4'>
      <h1 className='text-2xl lg:text-5xl md:text-3xl sm:text-2xl font-bold text-blue-950 mb-16 text-center'>
        Frequently Asked Questions
      </h1>
      <div className='space-y-16'>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className='p-8  space-y-4 shadow-lg shadow-blue-50 text-start mx-auto w-full md:w-10/12 rounded-md'
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

export default Frequently;
