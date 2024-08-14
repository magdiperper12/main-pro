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
    heading: "Government Solutions",
    paragraph:
      "Implementing AI technologies enables governments to improve public services, increase transparency, and enhance administrative efficiency",
    explor: "explor solution",
    arrow: FaCircleArrowRight,
    url: "/solution-channel/services/Professional",
  },
  {
    icon: FaImage,
    heading: "Healthcare Solutions",
    paragraph:
      "Our solutions support doctors and nurses in providing better care to enhance healthcare quality, manage health records, and improve patient experience",
    explor: "explor solution",
    arrow: FaCircleArrowRight,
    url: "/solution-channel/services/Digital",
  },
  {
    icon: FaImage,
    heading: "Education Solutions",
    paragraph:
      "Personalize learning experiences, improve educational outcomes, assess performance, and support students through intelligent performance analysis tools",
    explor: "explor solution",
    arrow: FaCircleArrowRight,
    url: "/solution-channel/services/Customer",
  },
  {
    icon: FaImage,
    heading: "Transportation Solutions",
    paragraph:
      "Improve transportation operations and traffic management through smart solutions that reduce congestion, increase efficiency and safety, and enhance the mobility experience for everyone",
    explor: "explor solution",
    arrow: FaCircleArrowRight,
    url: "/solution-channel/services/Agent",
  },
  {
    icon: FaImage,
    heading: "Retail and E-commerce Solutions",
    paragraph:
      "Advanced consumer behavioral analytics and intelligent inventory management to increase sales and personalize the shopping experience for customers",
    explor: "explor solution",
    arrow: FaCircleArrowRight,
    url: "/solution-channel/services/Agent",
  },
];

function IndustriesDispatch() {
  return (
    <section className=' sm:my-10 md:my-16 pb-24 '>
      <div className='container mx-auto  px-0 lg:px-4 md:px-4 sm:px-0'>
        <div className='text-center pb-20'>
          <h1 className='text-3xl md:text-3xl lg:text-4xl font-extrabold mt-5 leading-tight w-3/4 md:w-3/4 lg:w-2/4 m-auto'>
            Leverage advanced solutions tailored to each Industry, ensuring your
            excellence and leadership in your field
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

export default IndustriesDispatch;
