import React from "react";
import { FaImage } from "react-icons/fa6";
import image1 from "../../images/customer_support.webp";
interface FeatureItem {
  icon: React.ElementType; // This defines the type for the icon component
  heading: string;
  paragraph: string;
}
// <FaImage />
const items: FeatureItem[] = [
  {
    icon: FaImage,
    heading: "Intelligent Navigation",
    paragraph:
      "Empower your Business. Serve user using AI Technology and make it easier Technology and make it easier.",
  },
  {
    icon: FaImage,
    heading: "Enhanced User Experience",
    paragraph:
      "With state of the art Workflow builder. Make your Technology and make it easier application more interactive.",
  },
  {
    icon: FaImage,
    heading: "Ease of Use",
    paragraph:
      "Enhance customer engagement with real-time chat solutions. Build interactive, seamless experiences.",
  },
  {
    icon: FaImage,
    heading: "Advanced Reporting and Analytics",
    paragraph:
      "Connect your apps and services with Botbat and automate your communication  powerful API.",
  },
];

function NavigationDev() {
  return (
    <section className=' py-20 '>
      <div className='container mx-auto  px-0 lg:px-4 md:px-4 sm:px-0'>
        <div className='text-center pb-20'>
          <h1 className='text-3xl md:text-3xl lg:text-4xl font-extrabold mt-5 leading-tight'>
            Seamless navigation and enhanced experience with Gen Al Website
            Navigator
          </h1>
          <p className='text-lg md:text-xl lg:text-2xl mt-5 flex w-3/4 m-auto'>
            Analyze and guide your website visitors effectively with Gen AI
            Website Navigator, helping them find what they are looking for
            quickly and easily. This improves the user experience, increases
            visitor satisfaction, and extends their time spent on your site.
          </p>
        </div>
        <div className='flex  items-center  m-auto mb-20 w-3/4 bg-zinc-100 rounded-xl '>
          <img src={image1} alt='' />
        </div>
      </div>
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default NavigationDev;
