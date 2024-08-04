import React from "react";
import { IoIosArrowDropup } from "react-icons/io";

function Frequently() {
  return (
    <div className='my-20'>
      <h1 className='text-2xl lg:text-5xl md:text-3xl sm:text-2xl font-bold text-blue-950 mb-16 text-center'>
        Frequently Asked Quistion
      </h1>
      <div className='w-full space-y-16'>
        <div className='p-8 space-y-4 shadow-lg shadow-blue-200 text-start m-auto w-10/12 rounded-md'>
          <div className='flex justify-between'>
            <h2 className='text-xl lg:text-3xl md:text-2xl sm:text-xl  font-bold text-blue-950'>
              What does Botbat AI include?
            </h2>
            <IoIosArrowDropup className='text-blue-600 text-3xl cursor-pointer hover:text-black hover:rotate-180 duration-300' />
          </div>
          <p className='text-base lg:text-xl md:text-lg sm:text-base   text-blue-900'>
            Botbat AI adds advanced features to your Pro plan for an additional
            $29 per month. These features include AI Step, Intention
            Recognition, Flow Builder Assistant, and Text Improver, designed to
            create smarter automations and better conversations.
          </p>
        </div>
        <div className='p-8 space-y-4 shadow-lg shadow-blue-200 text-start m-auto w-10/12 rounded-md'>
          <div className='flex justify-between'>
            <h2 className='text-xl lg:text-3xl md:text-2xl sm:text-xl  font-bold text-blue-950'>
              Who is Botbat AI for?
            </h2>
            <IoIosArrowDropup className='text-blue-600 text-3xl cursor-pointer hover:text-black hover:rotate-180 duration-300' />
          </div>
          <p className='text-base lg:text-xl md:text-lg sm:text-base   text-blue-900'>
            Ideal for business owners, marketers, and agency leaders looking to
            enhance their communication strategies with advanced AI tools and
            more sophisticated automation capabilities.
          </p>
        </div>
        <div className='p-8 space-y-4 shadow-lg shadow-blue-200 text-start m-auto w-10/12 rounded-md'>
          <div className='flex justify-between'>
            <h2 className='text-xl lg:text-3xl md:text-2xl sm:text-xl  font-bold text-blue-950'>
              How much does Botbat AI cost?
            </h2>
            <IoIosArrowDropup className='text-blue-600 text-3xl cursor-pointer hover:text-black hover:rotate-180 duration-300' />
          </div>
          <p className='text-base lg:text-xl md:text-lg sm:text-base   text-blue-900'>
            Botbat offers various plans to suit different business needs and
            requirements, allowing you to choose the one that best fits your
            needs.
          </p>
        </div>
        <div className='p-8 space-y-4 shadow-lg shadow-blue-200 text-start m-auto w-10/12 rounded-md'>
          <div className='flex justify-between'>
            <h2 className='text-xl lg:text-3xl md:text-2xl sm:text-xl  font-bold text-blue-950'>
              How do I upgrade to the next tier of Pro?
            </h2>
            <IoIosArrowDropup className='text-blue-600 text-3xl cursor-pointer hover:text-black hover:rotate-180 duration-300' />
          </div>
          <p className='text-base lg:text-xl md:text-lg sm:text-base   text-blue-900'>
            Botbat automatically adjusts your tier based on your number of
            contacts, ensuring you only pay for what you use.
          </p>
        </div>
        <div className='p-8 space-y-4 shadow-lg shadow-blue-200 text-start m-auto w-10/12 rounded-md'>
          <div className='flex justify-between'>
            <h2 className='text-xl lg:text-3xl md:text-2xl sm:text-xl  font-bold text-blue-950'>
              Can I cancel my payment plan options at any time?
            </h2>
            <IoIosArrowDropup className='text-blue-600 text-3xl cursor-pointer hover:text-black hover:rotate-180 duration-300' />
          </div>
          <p className='text-base lg:text-xl md:text-lg sm:text-base   text-blue-900'>
            Yes, you can cancel at any time by following the provided
            instructions.
          </p>
        </div>
        <div className='p-8 space-y-4 shadow-lg shadow-blue-200 text-start m-auto w-10/12 rounded-md'>
          <div className='flex justify-between'>
            <h2 className='text-xl lg:text-3xl md:text-2xl sm:text-xl  font-bold text-blue-950'>
              What payment forms are accepted?
            </h2>
            <IoIosArrowDropup className='text-blue-600 text-3xl cursor-pointer hover:text-black hover:rotate-180 duration-300' />
          </div>
          <p className='text-base lg:text-xl md:text-lg sm:text-base   text-blue-900'>
            We accept most major credit cards, including Visa, Mastercard,
            American Express, and Discover.
          </p>
        </div>
        <div className='p-8 space-y-4 shadow-lg shadow-blue-200 text-start m-auto w-10/12 rounded-md'>
          <div className='flex justify-between'>
            <h2 className='text-xl lg:text-3xl md:text-2xl sm:text-xl  font-bold text-blue-950'>
              What is your refund policy for billing?
            </h2>
            <IoIosArrowDropup className='text-blue-600 text-3xl cursor-pointer hover:text-black hover:rotate-180 duration-300' />
          </div>
          <p className='text-base lg:text-xl md:text-lg sm:text-base   text-blue-900'>
            We offer a no-questions-asked refund within 30 days of purchase if
            you are unhappy with Botbat for any reason. More details are
            available in our Terms of Service.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Frequently;
