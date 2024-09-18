import React, { useEffect } from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../styles/global.css";
import { FaImage } from "react-icons/fa";
import { GrSecure, GrShieldSecurity } from "react-icons/gr";
import { SiSpringsecurity } from "react-icons/si";
import { HiMiniSun } from "react-icons/hi2";
import Layout from "../../component/layout/layout";
import image1 from "../../images/image 19.png";
import image2 from "../../images/image 20.png";
import image3 from "../../images/image 21 (3).png";
import image from "../../images/campaign.webp";
import Question from "../../component/conversation/Question";
import ImageHead from "../../component/conversation/image-head";
import ConvContent from "../../component/conversation/conv-content";

const serviceFeatures = [
  {
    icon: GrSecure,
    heading: "Security",
    paragraph:
      "We are committed to maintaining the security of our customers' data, in line with the most stringent security measures available in the market",
  },
  {
    icon: SiSpringsecurity,
    heading: "Risk Management",
    paragraph:
      "Botbat combines best practices in risk management with a tailored organizational and cultural approach, ensuring freedom where possible and controls where necessary",
  },
  {
    icon: GrShieldSecurity,
    heading: "Privacy",
    paragraph:
      "Our privacy program focuses on protecting privacy, ensuring transparency, and building trust",
  },
  {
    icon: HiMiniSun,
    heading: "Incident Response and Transparency",
    paragraph:
      " In the unlikely event of a security breach, our incident response team is ready to take immediate action",
  },
];

const items = [
  {
    question: "How does Botbat secure conversation data?",
    answer:
      "Conversation data in Botbat is secured using strong encryption techniques during data transfer and at rest, along with multiple layers of security to protect data from breaches.",
  },
  {
    question: "What biometric authentication technologies are used in Botbat?",
    answer:
      "Botbat uses advanced biometric authentication technologies that include liveness detection to ensure that only authorized users can access the system.",
  },
  {
    question: "Does Botbat comply with international security standards?",
    answer:
      "Yes, Botbat complies with global security standards such as ISO 27001 and GDPR to ensure data protection and adherence to the highest standards.",
  },
  {
    question: "How does Botbat handle potential security incidents?",
    answer:
      "In the event of a security incident, Botbat's response team takes immediate action to manage the incident and provide necessary transparency to customers.",
  },
];
const Secure: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="my-10 md:my-16">
        <div className="  w-10/12 m-auto text-center   space-y-1">
          <h1 className="text-xl md:text-3xl lg:text-5xl font-extrabold mt-5 w-10/12 leading-tight m-auto">
            Secure Your Conversation Data with Botbat with Robust Encryption
            Algorithms
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl m-auto w-11/12 p-3">
            At Botbat, data security is at the forefront of our entire system.
            Botbat encrypts any content transmitted to and from our AI-powered
            virtual assistants. Additionally, the platform provides an extra
            layer of security so that you and your clients can rest assured that
            your data remains safe from any harm
          </p>
        </div>
        <div className="flex flex-col gap-5 mt-5 items-center justify-center w-full ">
          <div className=" flex flex-row py-3 shadow-custom shadow-gray-400  m-auto md:py-1   w-11/12 md:w-3/4 lg:w-7/12 ps-3   text-start rounded-lg hover:shadow-xl duration-150 space-x-5">
            <img
              src={image3}
              className=" text-blue-600 w-10 h-10 md:w-auto md:h-auto  hover:scale-105 duration-300  inline mx-1 md:mx-3"
            />
            <div className="text-sm md:text-xl lg:text-xl text-slate-500  font-semibold   inline mx-2  md:mx-5 ">
              End-to-end encryption for all sensitive data
            </div>
          </div>
          <div className=" flex flex-row py-3 shadow-custom shadow-gray-400  m-auto md:py-1   w-11/12 md:w-3/4 lg:w-7/12 ps-3   text-start rounded-lg hover:shadow-xl duration-150 space-x-5">
            <img
              src={image2}
              className=" text-blue-600 w-10 h-10 md:w-auto md:h-auto  hover:scale-105 duration-300  inline mx-1 md:mx-3"
            />
            <div className="text-sm md:text-xl lg:text-xl text-slate-500  font-semibold   inline mx-2  md:mx-5 ">
              Continuous monitoring and threat detection
            </div>
          </div>
          <div className=" flex flex-row py-3 shadow-custom shadow-gray-400  m-auto md:py-1   w-11/12 md:w-3/4 lg:w-7/12 ps-3   text-start rounded-lg hover:shadow-xl duration-150 space-x-5">
            <img
              src={image1}
              className=" text-blue-600 w-10 h-10 md:w-auto md:h-auto  hover:scale-105 duration-300  inline mx-1 md:mx-3"
            />
            <div className="text-sm md:text-xl lg:text-xl text-slate-500  font-semibold   inline mx-2  md:mx-5 ">
              Regular security audits and updates
            </div>
          </div>
        </div>
      </div>

      <div>
        <ImageHead
          image={image}
          title="Access Control and Organizational Synchronization"
          paragraph="Thanks to advanced security features, the Botbat platform allows your team to have full control over who can access what by defining roles that align with your organizational structure. Additionally, the platform offers options to configure permissions for each user role"
        />
      </div>

      <ConvContent
        theheader="Quality and Trustworthiness are at the Core of Our Products"
        thescoundheader="At Botbat, we empower organizations to communicate with their customers and deliver an exceptional customer experience through our advanced cloud-based software."
        dispachitems={serviceFeatures}
      />
      <div className="">
        <div className="    shadow-custom shadow-gray-400  w-10/12 m-auto text-center my-7 md:my-12 space-y-5 p-5 ">
          <h1 className=" md:w-9/12 sm:w-12/12  text-xl md:text-3xl lg:text-5xl font-extrabold mt-5 leading-tight m-auto">
            Enhance User Experience with Botbat's AI Conversation and Automation
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl m-auto w-3/4 ">
            While we provide robust security measures, it's also crucial to
            follow best practices such as using strong passwords and enabling
            two-factor authentication
          </p>
          <div className=" flex flex-col md:flex-row justify-center items-center mx-3 md:mx-0 lg:mx-0 gap-5">
            <button className="bg-blue-700 text-white rounded-lg px-4 py-3 mb-2 md:mb-0  w-full lg:w-1/6 md:w-auto">
              Get a Free Demo
            </button>
            <button className="bg-white text-blue-900 border border-blue-600 rounded-lg px-4 py-3 mb-2 md:mb-0  w-full lg:w-1/6 md:w-auto">
              Contact an Expert
            </button>
          </div>
        </div>
      </div>

      <Question items={items} theheader="" />

      <div className=" my-10 md:my-16 md:w-9/12 sm:w-11/12 m-auto text-center  space-y-3 pb-10">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-extrabold mt-5 leading-tight">
          Join the elite organizations that trust Botbat to secure their data
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl m-auto w-3/4 mt-3 md:mt-4 lg:7">
          Start Now and Benefit from Our Leading Technologies That Put Your
          Security First to protect your conversations and ensure a smooth and
          safe user experience
        </p>
        <div className="mt-3 md:mt-4 lg:7 flex flex-col md:flex-row justify-center items-center mx-3 md:mx-0 lg:mx-0 gap-5">
          <button className="bg-blue-700 text-white rounded-md px-4 py-3 mb-2 md:mb-0  w-full lg:w-1/6 md:w-1/3">
            Start for free
          </button>
          <button className="bg-white text-blue-900 border border-blue-600 rounded-md px-4 py-3 mb-2 md:mb-0  w-full lg:w-1/6 md:w-1/3">
            Contact an Expert
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Secure;

export const Head: HeadFC = () => <title>Secure</title>;
