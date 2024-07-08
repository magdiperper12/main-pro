import React from 'react';
import { HiOutlineMailOpen } from "react-icons/hi";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookMessenger,
  FaTelegram,
  FaEnvelope,

} from "react-icons/fa";


interface FeatureItem {
  icon: React.ElementType; // This defines the type for the icon component
  heading: string;
  paragraph: string;
  list: string[]; // This will contain strings for list items
}

const items: FeatureItem[] = [
  {
    icon: HiOutlineMailOpen,
    heading: "E-mail",
    paragraph: "Empower your Business. Serve user using AI Technology and make it easier Technology and make it easier.",
    list: [
      "integration tracking",
      "platform tracking",
      "platform integration tracking",
      "platform tracking"
    ]
  },
  {
    icon: FaWhatsapp,
    heading: "Whattsapp",
    paragraph: "With state of the art Workflow builder. Make your Technology and make it easier application more interactive.",
    list: [
      "integration tracking",
      "platform tracking",
      "platform integration tracking",
      "platform tracking"
    ]
  },
  {
    icon: FaInstagram,
    heading: "Instagrame",
    paragraph: "Enhance customer engagement with real-time chat solutions. Build interactive, seamless experiences.",
    list: [
      "integration tracking",
      "platform tracking",
      "platform integration tracking",
      "platform tracking"
    ]
  },
  {
    icon: FaFacebookMessenger,
    heading: "Facebook_Messenger",
    paragraph: "Connect your apps and services with Botbat and automate your communication  powerful API.",
    list: [
      "integration tracking",
      "platform tracking",
      "platform integration tracking",
      "platform tracking"
    ]
  },
  {
    icon: FaTelegram,
    heading: "Telegram",
    paragraph: "Connect your apps and services with Botbat and automate your communication  powerful API.",
    list: [
      "integration tracking",
      "platform tracking",
      "platform integration tracking",
      "platform tracking"
    ]
  },
  {
    icon: FaEnvelope,
    heading: "SMS",
    paragraph: "Connect your apps and services with Botbat and automate your communication  powerful API.",
    list: [
      "integration tracking",
      "platform tracking",
      "platform integration tracking",
      "platform tracking"
    ]
  },
];

function Massaging() {
  return (
    <section className=" py-20 mt-20">
      <div className="container mx-auto  px-0 lg:px-4 md:px-4 sm:px-0">
        <div className="text-center pb-20">

          <h1 className="text-3xl md:text-3xl lg:text-4xl font-extrabold mt-5 leading-tight">
           Messaging API'S
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mt-5 flex w-3/4 m-auto">
         Utilize Botbat to engage with customer throught their preferred channal , ensure flexibility and global reach for your project 
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 items-start w-11/12 m-auto">
          {items.map((item, index) => (
            <div key={index} className="text-center">
              <item.icon className="text-6xl text-blue-600 mb-4 mx-auto" />
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{item.heading}</h2>
              <p className="text-lg text-gray-600">
                {item.paragraph}
              </p>
              <ul className="text-lg text-gray-600 list-disc text-start px-3 md:px-4 lg:px-8 list-inside my-5 ">
                {item.list.map((listItem, idx) => (
                  <li key={idx}>{listItem}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Massaging;
