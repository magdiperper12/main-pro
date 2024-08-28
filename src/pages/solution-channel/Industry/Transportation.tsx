import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../../styles/global.css";
import Layout from "../../../component/layout/layout";
import { FaImage } from "react-icons/fa6";
import image1 from "../../../images/header.jpg";
import image2 from "../../../images/campaign.webp";
import image3 from "../../../images/customer_support.webp";
import image4 from "../../../images/robotic.webp";
import ChannelHeader from "../../../component/channel/channel-header";
import SecoundDispatch from "../../../component/channel/secound-dispach";
import Channelfooter from "../../../component/channel/channel-footer";
import Experience from "../../../component/channel/experience";
import ChannelFooter from "../../../component/channel/channel-footer";

const dispachitems = [
  {
    icon: FaImage,
    heading: "Operational Efficiency Improvement",
    paragraph:
      "Automate communication processes to enhance operational performance and effectively reduce costs",
  },
  {
    icon: FaImage,
    heading: "Secure and Reliable Communications",
    paragraph:
      "Get secure and flexible communication solutions, integrated with your existing systems to ensure maximum security and reliability",
  },
  {
    icon: FaImage,
    heading: "Scalable Solutions",
    paragraph:
      "Advanced intelligent systems using AI for early risk detection and proactive accident reduction",
  },
  {
    icon: FaImage,
    heading: "24/7 Global Support",
    paragraph:
      "Benefit from continuous technical support in your local language to ensure uninterrupted business continuity",
  },
];

const experianceitems = [
  {
    heading: "Comprehensive Analysis of Your Logistics Needs",
    text: "We start with a detailed analysis of your transportation operations to deliver tailored solutions that ensure your goals are achieved efficiently",
    image: image1,
    list: [
      "     Evaluate current operations and improvement opportunities",
      "    Set clear goals to achieve optimal performance",
      "   Develop objectives to achieve the desired performance",
    ],
  },
  {
    heading: "Selecting Optimal Solutions for Your Use Case",
    text: "We utilize AI to design solutions that accurately fit your needs and seamlessly integrate with your existing systems",
    image: image2,
    list: [
      "  Select appropriate technologies to meet your requirements",
      "  Continuously improve solutions to ensure best results",
      "  Seamless integration with existing operating systems",
    ],
  },
  {
    heading: "Implementing the Solution and Training Your Team",
    text: "We apply the solutions and ensure your team is equipped with the knowledge and tools necessary to use our solutions, guaranteeing the highest levels of efficiency and performance",
    image: image4,
    list: [
      "   Efficient solution implementation and team training",
      "   Ongoing technical support to ensure successful operations",
      "   Performance monitoring and necessary adjustments",
    ],
  },
  {
    heading: "Continuous Improvement and Ensuring Security and Performance",
    text: "We monitor performance and continuously improve solutions to ensure they remain updated and adapt to evolving challenges",
    image: image3,
    list: [
      "   Regularly monitor performance and provide innovative solutions",
      "   Data analysis and recommending necessary improvements",
      "   Ensure service continuity and ongoing technical support",
    ],
  },
];

const TransportationPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <ChannelHeader
        title='  Smart and Secure Transportation Solutions with Botbat'
        paragraph='Empower your transportation and logistics operations with intelligent, multi-channel communication solutions that enhance efficiency, security, and superior customer experience'
        image={image1}
        sbtn=' Get a Free Demo'
        fbtn='Contact an Expert'
      />
      <SecoundDispatch
        theheader='Innovation at Every Step with Our Transportation Solutions'
        thescoundheader="Benefit from an integrated experience with Botbat's smart solutions that combine security, flexibility, and seamless integration to meet all your transportation industry needs"
        dispachitems={dispachitems}
      />
      <Experience experianceitems={experianceitems} />
      <ChannelFooter
        title=' Leverage Smart Transportation Solutions Today'
        secoundTitle="Take the first step towards enhancing operational efficiency and increasing security with Botbat's innovative transportation solutions"
        button='Start for  free'
        secoundButton='see price'
      />
    </Layout>
  );
};
export default TransportationPage;

export const Head: HeadFC = () => <title>Industries-Transportation</title>;
