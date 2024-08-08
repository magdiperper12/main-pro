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
    heading: "Fast and Flexible Integration",
    paragraph:
      "Easy integration with existing systems and applications to ensure seamless operations",
  },
  {
    icon: FaImage,
    heading: "Comprehensive Customization",
    paragraph:
      "Design solutions tailored to your unique business needs with extensive customization capabilities",
  },
  {
    icon: FaImage,
    heading: "Continuous Supportand Training",
    paragraph:
      "Benefit from specialized support and ongoing training to maximize your use of the service",
  },
  {
    icon: FaImage,
    heading: "Advanced Analytics",
    paragraph:
      "Gain precise insights from data to make well-informed decisions",
  },
];

function GenaiDispatch() {
  return (
    <div>
      <section className=' py-20 mt-20'>
        <div className='container mx-auto px-0 lg:px-4 md:px-4 sm:px-0 '>
          <div className='text-center pb-20'>
            <h1 className='text-3xl md:text-3xl lg:text-4xl font-extrabold mt-5 leading-tight w-3/4 md:w-3/4 lg:w-2/4 m-auto'>
              Unique Advantages That Make Our Service Your Optimal Choice
            </h1>
            <p className='text-lg md:text-xl lg:text-2xl mt-5 flex w-3/4 m-auto'>
              A suite of advanced features designed to support your business,
              deliver customized solutions to your needs, and ensure a smooth
              and efficient user experience
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

export default GenaiDispatch;
