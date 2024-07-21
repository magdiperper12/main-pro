import React from "react";

interface FeatureItem {
  heading: string;
  paragraph: string;
}

const items: FeatureItem[] = [
  {
    heading: "System Integration",
    paragraph:
      "Smart connectivity ensuring smooth information flow across all your platforms and tools",
  },
  {
    heading: "Intelligent Chatbots Building",
    paragraph:
      "Create a Messenger bot AI-powered virtual assistants serving your customers around the clock",
  },
  {
    heading: "Cloud Customer Support",
    paragraph:
      "A sophisticated system combining speed and intelligence for instant, personalized support",
  },
  {
    heading: " Sales Recovery Strategies",
    paragraph:
      "Innovative techniques to convert hesitant shoppers into satisfied, loyal customers",
  },
];

function FacebookMessengerDispatch() {
  return (
    <div>
      <section className=' py-20 mt-20'>
        <div className='container mx-auto px-0 lg:px-4 md:px-4 sm:px-0 '>
          <div className='text-center pb-20'>
            <h1 className='text-3xl md:text-3xl lg:text-4xl font-extrabold mt-5 leading-tight w-3/4 md:w-3/4 lg:w-2/4 m-auto'>
              Integrated Solutions to Enhance Customer Satisfaction and Increase
              Loyalty
            </h1>
            <p className='text-lg md:text-xl lg:text-2xl mt-5 flex w-3/4 m-auto'>
              Discover the power of effective customer communication by
              transforming your Facebook page into an advanced support center to
              deliver an unforgettable, exceptional experience
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10 items-start w-11/12 m-auto'>
            {items.map((item, index) => (
              <div
                key={index}
                className='text-center bg-zinc-100 p-10  h-72 rounded-xl border-2 border-zinc-200 hover:rotate-3 hover:shadow-xl duration-300'
              >
                <p className='text-3xl font-bold text-gray-800 mb-4'>
                  {item.heading}
                </p>
                <p className='text-lg text-gray-600'>{item.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FacebookMessengerDispatch;
