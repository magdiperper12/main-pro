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
    heading: "Intelligent Personalization",
    paragraph:
      "AI-powered recommendation system that delivers customized experiences for each customer based on their behavior and interests",
  },
  {
    icon: FaImage,
    heading: "Advanced Inventory Management",
    paragraph:
      "Real-time inventory visibility with predictive analytics to help you optimize inventory management across all sales channels",
  },
  {
    icon: FaImage,
    heading: "Integrated Customer Service",
    paragraph:
      "Comprehensive 24/7 support through Botbat's contact center, ensuring immediate support for your customers at any time",
  },
  {
    icon: FaImage,
    heading: "Advanced Performance Analytics",
    paragraph:
      "Interactive dashboards providing deep insights into customer behavior and sales trends, helping you make smarter decisions",
  },
];
const experianceitems = [
  {
    heading: "Flexible Integration and Unparalleled Customization",
    text: "We start by understanding your business needs and identifying optimal entry points to customize our solutions to meet your customers expectations and achieve your goals",
    image: image1,
    list: [
      "    Comprehensive assessment of business needs",
      "     Customization of solutions to fit your requirements",
      "   Seamless integration with existing systems",
    ],
  },
  {
    heading: "Effectively Activate Multi-Channel Communications",
    text: "We help you launch multi-channel communication strategies to provide a consistent and effective shopping experience for customers across different channels",
    image: image2,
    list: [
      "    Set up strategies for SMS, email, and chat",
      "   Comprehensive team training to deliver outstanding experiences",
      "   Launch marketing campaigns across preferred channels",
    ],
  },
  {
    heading: "Customize the Experience to Enhance Engagement",
    text: "We enhance customer interactions through dynamic experience customization based on data and AI, raising the level of engagement and loyalty",
    image: image4,
    list: [
      "   Dynamic customization based on customer behavior",
      "   Create personalized journeys across all shopping stages",
      "   Use analytics to understand customer needs",
    ],
  },
  {
    heading: "Optimization and Innovation for Continued Success",
    text: "We continuously work on improving your performance and updating solutions to keep pace with market developments, ensuring you stay at the forefront",
    image: image3,
    list: [
      "    Regular performance analysis and customer behavior ",
      "   Regular technical updates to enhance efficiency",
      "   Ongoing consultations to meet market needs",
    ],
  },
];

const RetailPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <ChannelHeader
        title=' Deliver Unparalleled Digital Shopping Experiences with AI'
        paragraph='Elevate your business to new heights using advanced AI solutions
We offer an integrated shopping experience across all channels, enhancing customer satisfaction and growing your business'
        image={image1}
        sbtn=' Get a Free Demo'
        fbtn='Contact an Expert'
      />
      <SecoundDispatch
        theheader='Discover the Power of AI in Enhancing Retail'
        thescoundheader=' Our solutions combine cutting-edge technology with a deep understanding of customer behavior, allowing you to deliver the best shopping experience'
        dispachitems={dispachitems}
      />
      <Experience experianceitems={experianceitems} />
      <ChannelFooter
        title=' Get Ready to Transform Your Business Future Now'
        secoundTitle=' Join market leaders and start your journey towards exceptional success in retail and e-commerce'
        button='Start for free'
        secoundButton='see price '
      />
    </Layout>
  );
};
export default RetailPage;

export const Head: HeadFC = () => <title>Industries-Retail</title>;
