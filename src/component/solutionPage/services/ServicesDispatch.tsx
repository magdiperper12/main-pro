import React from "react";
import { FaImage, FaCircleArrowRight } from "react-icons/fa6";

interface FeatureItem {
  icon: React.ElementType; // This defines the type for the icon component
  arrow: React.ElementType; // This defines the type for the icon component
  heading: string;
  paragraph: string;
  explor: string;
  url: string;
}
// <FaImage />
const items: FeatureItem[] = [
  {
    icon: FaImage,
    heading: "Professional Services",
    paragraph:
      "We provide you with a team of specialized experts to support your projects in improving your operational processes and technological integration, from planning to implementation",
    explor: "explor solution",
    arrow: FaCircleArrowRight,
    url: "solution-channel/Conversational-Solutions",
  },
  {
    icon: FaImage,
    heading: "Digital Transformation Services",
    paragraph:
      "We help you modernize your operations, improve efficiency, and transform your organization into an integrated digital environment using the latest AI technologies",
    explor: "explor solution",
    arrow: FaCircleArrowRight,
    url: "solution-channel/Gen-AI",
  },
  {
    icon: FaImage,
    heading: "Customer Experience Consultancy",
    paragraph:
      "We design innovative strategies to enhance customer experience and increase satisfaction using AI solutions.",
    explor: "explor solution",
    arrow: FaCircleArrowRight,
    url: "solution-channel/Services",
  },
  {
    icon: FaImage,
    heading: "Agent Offshoring Services",
    paragraph:
      "Increase efficiency and reduce costs by providing agent offshoring services powered by AI technologies",
    explor: "explor solution",
    arrow: FaCircleArrowRight,
    url: "solution-channel/Industries",
  },
];

function ServicesDispatch() {
  return (
    <section className=' sm:my-10 md:my-16 pb-24 '>
      <div className='container mx-auto  px-0 lg:px-4 md:px-4 sm:px-0'>
        <div className='text-center pb-20'>
          <h1 className='text-3xl md:text-3xl lg:text-4xl font-extrabold mt-5 leading-tight w-3/4 md:w-3/4 lg:w-2/4 m-auto'>
            Unique Advantages That Make Our Service Your Optimal Choice
          </h1>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-10 items-start w-11/12 m-auto'>
          {items.map((item, index) => (
            <div
              key={index}
              className='hover:shadow-lg duration-200  text-center bg-zinc-100  p-2 rounded-lg min-h-96'
            >
              <item.icon className='text-5xl md:text-5xl lg:text-8xl text-blue-600  mx-auto my-8  hover:scale-105 duration-300 hover:drop-shadow-lg' />
              <h2 className='text-2xl font-bold text-gray-800 py-4 text-start border-t-2 border-zinc-200 px-3 hover:text-blue-800'>
                {item.heading}
              </h2>
              <p className='text-lg text-gray-600 text-start px-3 pb-5'>
                {item.paragraph}
              </p>
              <div>
                <a
                  href={item.url}
                  className='text-lg text-start px-3 pb-5 flex gap-3 items-center  '
                >
                  <span className=' underline text-blue-500  hover:text-blue-800 cursor-pointer'>
                    {item.explor}
                  </span>
                  <item.arrow className='  rtl:rotate-180 text-blue-500  hover:text-blue-800 cursor-pointer' />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesDispatch;
