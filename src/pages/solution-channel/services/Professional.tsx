import React from "react";
import type { HeadFC, PageProps } from "gatsby";

import { FaImage } from "react-icons/fa6";
import image1 from "../../../images/header.jpg";
import image2 from "../../../images/campaign.webp";
import image3 from "../../../images/customer_support.webp";
import image4 from "../../../images/robotic.webp";
import ChannelHeader from "../../../component/channel/channelheader";
import SecoundDispatch from "../../../component/channel/secounddispach";
import Channelfooter from "../../../component/channel/channelfooter";
import Experience from "../../../component/channel/experience";
import Layout from "../../../component/layout/layout";
import "../../../styles/global.css";

const dispachitems = [
  {
    icon: FaImage,
    heading: "customized solutions",
    paragraph:
      "AI strategies specifically tailored to align with  your business goals and indusry requirements",
  },
  {
    icon: FaImage,
    heading: "expertise and efficiency",
    paragraph:
      "our team of expert ensure you receive accurate and tailored solution to meet your specific needs",
  },
  {
    icon: FaImage,
    heading: "seamless integration",
    paragraph:
      "smooth integration of ai technologies into your existing systems and workflows",
  },
  {
    icon: FaImage,
    heading: "continuous support",
    paragraph:
      "ongoing assistance and update to ensure optimal performance and adaptability",
  },
];
const experianceitems = [
  {
    heading: "consultation , assessment and business needs analysis",
    text: "conducting a comperhensive evaluation , understanding and analysis of your business need to ensure solution that fit ",
    image: image1,
    list: [
      "in-depth analysis of current operation ",
      "   identification of challenges you face",
      "    recognition of oppotunities for performance improvementt",
      " development of a clear action plan",
    ],
  },
  {
    heading: "Solution Development and Customization",
    text: "Our experts formulate a customized AI implementation strategy to meet your specific needs",
    image: image2,
    list: [
      "     Selection of appropriate technologies",
      "  Building prototypes",
      "   Solution testing",
    ],
  },
  {
    heading: "Solution Implementationand Performance Monitoring",
    text: "After developing solutions, we implement them with careful monitoring to ensure their effectiveness and integration with your existing business systems",
    image: image4,
    list: [
      "   Applying agreed solutions in the work environment",
      "   Monitoring performance to ensure goal achievement",
      "   Making necessary adjustments based on feedback",
    ],
  },
  {
    heading: "Providing Supportand Continuous Development",
    text: "Incorporating continuous improvement and expanding AI capabilities to ensure sustainable success and ongoing development",
    image: image3,
    list: [
      "   Providing technical support services and team training",
      "   Continuous monitoring of solution performance and providing     ongoing improvements",
      "   Offering periodic consultations for performance development",
    ],
  },
];

const Professionalpage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <ChannelHeader
        title=' Professional Servicesto Enhance Your Operational Performance'
        paragraph=" Elevate your business operations through our advanced AI-powered professional services, custom-designed to meet your organization's unique needs"
        image={image1}
        sbtn=' Get a Free Demo'
        fbtn='Contact an Expert'
      />
      <SecoundDispatch
        theheader=' customized professional solution for your business needs'
        thescoundheader='we are committed delivering added value to your business through our professional services ,which are distinguished by their quality and flexbility'
        dispachitems={dispachitems}
      />
      <Experience experianceitems={experianceitems} />
      <Channelfooter
        title=' Transform Your Business with
AI-Powered Professional Services'
        secoundTitle=' Make the decision now and leverage our professional services to achieve your goals'
        button='Start for free'
        secoundButton='see price'
      />
    </Layout>
  );
};
export default Professionalpage;

export const Head: HeadFC = () => <title>service-Professional</title>;
