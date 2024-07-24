import React from "react";
import { FaImage } from "react-icons/fa6";
interface FeatureItem {
  icon: React.ElementType; // This defines the type for the icon component
  heading: string;
  paragraph: string;
}
// <FaImage />
const items: FeatureItem[] = [
  {
    icon: FaImage,
    heading: "Design with limit",
    paragraph:
      "Empower your Business. Serve user using AI Technology and make it easier Technology and make it easier.",
  },
  {
    icon: FaImage,
    heading: "make Omnipresent",
    paragraph:
      "With state of the art Workflow builder. Make your Technology and make it easier application more interactive.",
  },
  {
    icon: FaImage,
    heading: "easy to use interface",
    paragraph:
      "Enhance customer engagement with real-time chat solutions. Build interactive, seamless experiences.",
  },
  {
    icon: FaImage,
    heading: "height customizable chatbot",
    paragraph:
      "Connect your apps and services with Botbat and automate your communication  powerful API.",
  },
  {
    icon: FaImage,
    heading: "advanced ai capitalies",
    paragraph:
      "Connect your apps and services with Botbat and automate your communication  powerful API.",
  },
  {
    icon: FaImage,
    heading: "sameles multi-plateform integration",
    paragraph:
      "Connect your apps and services with Botbat and automate your communication  powerful API.",
  },
];

function CustomIntelegent() {
  return (
    <section className=' py-20 '>
      <div className='container mx-auto  px-0 lg:px-4 md:px-4 sm:px-0'>
        <div className='text-center pb-20'>
          <h1 className='text-3xl md:text-3xl lg:text-4xl font-extrabold mt-5 leading-tight'>
            Create your own intelligent chatbot with Custom Gen AI Chatbot
            Builder
          </h1>
          <p className='text-lg md:text-xl lg:text-2xl mt-5 flex w-3/4 m-auto'>
            Our Custom Gen AI Chatbot Builder allows you to create intelligent
            chatbots that cater specifically to your business requirements.
            Enhance customer engagement, automate processes, and provide 24/7
            support effortlessly.
          </p>
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
      </div>
    </section>
  );
}

export default CustomIntelegent;
