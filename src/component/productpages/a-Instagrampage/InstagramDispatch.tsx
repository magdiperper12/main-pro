import React from "react";

interface FeatureItem {
  heading: string;
  paragraph: string;
}

const items: FeatureItem[] = [
  {
    heading: "Cloud Contact Center",
    paragraph:
      "Efficiently manage customer interactions through an integrated system that enhances customer experience",
  },
  {
    heading: "Smart Chatbots",
    paragraph:
      "Provide instant and personalized responses to customers using AI, enabling excellent and rapid service",
  },
  {
    heading: "Superior Customer Experience",
    paragraph:
      "Empower customers to easily initiate conversations via Instagram, enhancing engagement and loyalty",
  },
  {
    heading: "Data Analytics",
    paragraph:
      "Track and analyze conversation performance to improve strategies and make informed decisions",
  },
];

function InstagramDispatch() {
  return (
    <div>
      <section className=' py-20 mt-20'>
        <div className='container mx-auto px-0 lg:px-4 md:px-4 sm:px-0 '>
          <div className='text-center pb-20'>
            <h1 className='text-3xl md:text-3xl lg:text-4xl font-extrabold mt-5 leading-tight w-3/4 md:w-3/4 lg:w-2/4 m-auto'>
              Transform Your Instagram Account into an Integrated Marketing and
              Customer Service Hub
            </h1>
            <p className='text-lg md:text-xl lg:text-2xl mt-5 flex w-3/4 m-auto'>
              Turn your company's Instagram account into an interactive platform
              for marketing and customer service. Boost sales and enhance
              customer experience
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

export default InstagramDispatch;
