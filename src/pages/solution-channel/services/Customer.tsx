import React from "react";
import type { HeadFC, PageProps } from "gatsby";

import { FaImage } from "react-icons/fa6";
import image1 from "../../../images/header.jpg";
import image2 from "../../../images/campaign.webp";
import image3 from "../../../images/customer_support.webp";
import image4 from "../../../images/robotic.webp";
import ChannelHeader from "../../../component/channel/channel-header";
import SecoundDispatch from "../../../component/channel/secound-dispach";
import Channelfooter from "../../../component/channel/channel-footer";
import Experience from "../../../component/channel/experience";
import Layout from "../../../component/layout/layout";
import "../../../styles/global.css";
import ChannelFooter from "../../../component/channel/channel-footer";

const dispachitems = [
  {
    icon: FaImage,
    heading: "In-depth CX Analysis",
    paragraph:
      "Comprehensive analysis of the customer journey using advanced tools to identify strengths and areas for improvement",
  },
  {
    icon: FaImage,
    heading: "Customized Strategies",
    paragraph:
      "Development of strategies specifically designed to meet your needs and the aspirations of your customers",
  },
  {
    icon: FaImage,
    heading: "Seamless Integration",
    paragraph:
      "Smooth implementation of changes to enhance customer experience without disrupting operations, ensuring increased efficiency",
  },
  {
    icon: FaImage,
    heading: "Performance Analysis",
    paragraph:
      "Detailed reports on your service performance with recommendations for continuous improvement",
  },
];

const experianceitems = [
  {
    heading: "Analyze Current CX and Assess the Situation",
    text: "Conduct a thorough examination of all customer touchpoints to understand the current experience and identify opportunities for improvement",
    image: image1,
    list: [
      "   Comprehensive analysis of customer touchpoints",
      "   Collect and analyze customer satisfaction data",
      "   Identify strengths and weaknesses in the current cx",
    ],
  },
  {
    heading: "Develop Customized Strategies to Improve CX",
    text: "Design tailored strategies based on initial analysis results to ensure maximum benefit from proposed improvements",
    image: image2,
    list: [
      "    Set measurable goals for CX improvement",
      "    Develop a detailed action plan and implementation phases",
      "   Identify technologies and tools necessary",
    ],
  },
  {
    heading: "Implement Solutions to Achieve Desired Results",
    text: "We work closely with you to apply the strategy and implement the necessary changes to improve customer interaction and operational efficiency",
    image: image4,
    list: [
      "   Train your team on new practices",
      "  Integrate new technologies and tools",
      "   Make gradual adjustments to ensure smooth transition",
    ],
  },
  {
    heading: "Monitor Performance and Continuous Improvement",
    text: "Monitor CX strategy performance and provide recommendations for continuous improvement, achieving desired results, and making necessary enhancements",
    image: image3,
    list: [
      "   Continuously collect and analyze CX performance data",
      "   Make ongoing adjustments based on results",
      "    Provide regular reports and recommendations for improvement",
    ],
  },
];

const CustomerPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <ChannelHeader
        title='  Elevate Customer Experience to New Heights with AI'
        paragraph='  We offer innovative and tailored solutions to enhance customer
              experience, helping you achieve customer satisfaction and foster
              long-term loyalty'
        image={image1}
        sbtn=' Get a Free Demo'
        fbtn='Contact an Expert'
      />
      <SecoundDispatch
        theheader='  Leverage a Wide Range of Features to Enhance Your Customer
              Experience'
        thescoundheader="  We provide you with customized solutions to improve customer
              experience, based on deep analysis and a thorough understanding of
              your customers' needs"
        dispachitems={dispachitems}
      />
      <Experience experianceitems={experianceitems} />
      <ChannelFooter
        title='Transform Your Customer Experience into a Competitive Advantage'
        secoundTitle=' With CX Consultancy service, you can turn customer experience into  a differentiating factor that drives your business growth'
        button='Start for free'
        secoundButton='see price'
      />
    </Layout>
  );
};

export default CustomerPage;

export const Head: HeadFC = () => <title>service-Customer</title>;
