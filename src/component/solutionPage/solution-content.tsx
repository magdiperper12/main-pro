import React from "react";
import { FaImage, FaCircleArrowRight } from "react-icons/fa6";

interface FeatureItem {
  icon: React.ElementType; // This defines the type for the icon component
  arrow: React.ElementType; // This defines the type for the icon component
  heading: string;
  paragraph: string;
  explor: string;
}
// <FaImage />
const items: FeatureItem[] = [
  {
    icon: FaImage,
    heading: "Conversational Solutions",
    paragraph:
      "Transform customer interactions with AI-powered technologies, delivering personalized, seamless, and impactful experiences across every touchpoint.",
    explor: "explor solution",
    arrow: FaCircleArrowRight,
  },
  {
    icon: FaImage,
    heading: "Gen AI Applications",
    paragraph:
      "Unlock the power of Gen AI Applications: Predict trends, optimize operations, and deliver personalized customer experiences that drive productivity.",
    explor: "explor solution",
    arrow: FaCircleArrowRight,
  },
  {
    icon: FaImage,
    heading: "Services",
    paragraph:
      "Tailored solutions through Professional Services, Digital Transformation, CX Consultancy, and Agent Offshoring to elevate your business.",
    explor: "explor solution",
    arrow: FaCircleArrowRight,
  },
  {
    icon: FaImage,
    heading: "Industries",
    paragraph:
      "Achieve unparalleled outcomes with customized solutions that deliver measurable results in healthcare, retail, and more.",
    explor: "explor solution",
    arrow: FaCircleArrowRight,
  },
];

function Solutioncontent() {
  return (
    <section className=' sm:my-10 md:my-16 pb-24 '>
      <div className='container mx-auto  px-0 lg:px-4 md:px-4 sm:px-0'>
        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-10 items-start w-11/12 m-auto'>
          {items.map((item, index) => (
            <div
              key={index}
              className='hover:shadow-lg duration-200  text-center bg-zinc-100  p-2 rounded-lg '
            >
              <item.icon className='text-5xl md:text-5xl lg:text-8xl text-blue-600  mx-auto my-8  hover:scale-105 duration-300 hover:drop-shadow-lg' />
              <h2 className='text-2xl font-bold text-gray-800 py-4 text-start border-t-2 border-zinc-200 px-3 hover:text-blue-800'>
                {item.heading}
              </h2>
              <p className='text-lg text-gray-600 text-start px-3 pb-5'>
                {item.paragraph}
              </p>
              <div className='text-lg text-start px-3 pb-5 flex gap-3 items-center  '>
                <span className=' underline text-blue-500  hover:text-blue-800 cursor-pointer'>
                  {item.explor}
                </span>
                <item.arrow className='  rtl:rotate-180 text-blue-500  hover:text-blue-800 cursor-pointer' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Solutioncontent;
