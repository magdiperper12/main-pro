import React from "react";
import { FaImage } from "react-icons/fa6";
interface FeatureItem {
  icon: React.ElementType;
  heading: string;
  paragraph: string;
}

const items: FeatureItem[] = [
  {
    icon: FaImage,
    heading: "Instant Response",
    paragraph:
      "Providing accurate and fast AI-powered customer service 24/7 to ensure effective response to citizen inquiries",
  },
  {
    icon: FaImage,
    heading: "Intelligent Data Analysis",
    paragraph:
      "Using advanced data analytics techniques to make data-driven decisions and improve public policies",
  },
  {
    icon: FaImage,
    heading: "Process Automation",
    paragraph:
      "Streamlining administrative procedures and reducing human errors to enhance operational efficiency",
  },
  {
    icon: FaImage,
    heading: "Service Personalization",
    paragraph:
      "Delivering customized and interactive services based on citizens' needs and preferences through AI solutions",
  },
];

function GovernmentDispatch() {
  return (
    <div>
      <section className=' py-20 mt-20'>
        <div className='container mx-auto px-0 lg:px-4 md:px-4 sm:px-0 '>
          <div className='text-center pb-20'>
            <h1 className='text-3xl md:text-3xl lg:text-4xl font-extrabold mt-5 leading-tight w-3/4 md:w-3/4 lg:w-2/4 m-auto'>
              Discover How Botbat's Innovative Technologies Transform Government
              Services
            </h1>
            <p className='text-lg md:text-xl lg:text-2xl mt-5 flex w-3/4 m-auto'>
              Learn how to transform government operations and increase citizen
              satisfaction using advanced AI solutions safely and reliably
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5 items-start w-11/12 m-auto'>
            {items.map((item, index) => (
              <div
                key={index}
                className='text-center bg-blue-50 shadow-md shadow-blue-100 p-7 sm:p-16  md:p-3   h-auto lg:min-h-96 md:min-h-80 sm:min-h-52 rounded-xl  hover:rotate-3 hover:shadow-blue-200 hover:shadow-xl  duration-300 mb-7 '
              >
                <item.icon className='text-5xl md:text-5xl lg:text-8xl text-blue-600  mx-auto my-8  hover:scale-105 duration-300 hover:drop-shadow-lg' />
                <p className='text-3xl font-bold text-gray-800 mb-3'>
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

export default GovernmentDispatch;
