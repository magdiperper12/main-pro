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
    heading: "Specialized and Trained Team",
    paragraph:
      "Experts at the highest level to manage your account efficiently, ensuring accuracy and speed in execution",
  },
  {
    icon: FaImage,
    heading: "Comprehensive Management",
    paragraph:
      "Handling all aspects of management from training to execution, allowing you to focus on other areas of your business and growth",
  },
  {
    icon: FaImage,
    heading: "Flexible Solutions",
    paragraph:
      "Customizing our services to precisely fit your needs, saving you time and effort while eliminating the burden of hiring and training",
  },
  {
    icon: FaImage,
    heading: "Cost-Effective",
    paragraph:
      "Get high-quality services at competitive costs, allowing you to maximize your investment returns",
  },
];
const experianceitems = [
  {
    heading: "Start with Registration and Subscription",
    text: "Begin your journey with us by creating a new account and choosing the package that suits your needs",
    image: image1,
    list: [
      "     Quick and easy registration on Botbat platform",
      "   Select the appropriate package for your business    from multiple options",
      "    Start immediately with our specialized team upon subscription",
    ],
  },
  {
    heading: "Identify Your Needs and Customize the Plan",
    text: "Define the goals and tasks you want to delegate to our team, and we'll work on tailoring a work plan that meets your needs",
    image: image2,
    list: [
      "    Comprehensive analysis of your business requirements",
      "    Assigning a work team that aligns with your goals",
      "    Developing a clear implementation plan",
    ],
  },
  {
    heading: "Task Execution with Full Supervision",
    text: "Once your needs are identified, our team begins executing the required tasks efficiently and under our full supervision",
    image: image3,
    list: [
      "   Setting up communication channels and work tools",
      "   Establishing Key Performance Indicators (KPIs)",
      "    Initiating operational processes under our supervision",
      "  Providing transparent performance reports on work results",
    ],
  },
  {
    heading: "Performance Monitoring and Continuous Improvement",
    text: "Regular review of team performance and work results to ensure the best outcomes and continuous development",
    image: image1,
    list: [
      "    Continuous monitoring of work quality and performance",
      "   Providing periodic reports on work progress",
      "    Offering recommendations for continuous improvement",
    ],
  },
];

const AgentPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <ChannelHeader
        title="    Elevate Your Business Management with AI from Botbat"
        paragraph=" With Botbat’s Agent Offshoring service, we provide you with a specialized AI team to handle all aspects of your account management, from training to execution, allowing you to focus on growing your business"
        image={image1}
        sbtn=" Get a Free Demo"
        fbtn="Contact an Expert"
      />
      <div className="md:-mt-10 lg:-mt-20  "></div>
      <SecoundDispatch
        theheader=" Why is Agent Offshoring the Perfect Solution for Your Business?"
        thescoundheader=" Discover how Agent Offshoring can improve your operational
              efficiency, save time, and optimize resources."
        dispachitems={dispachitems}
      />
      <Experience experianceitems={experianceitems} />
      <ChannelFooter
        title="  Elevate Your Business to Success with Agent Offshoring"
        secoundTitle="  Start now and take advantage of the free trial to enhance your
              business, save time, and focus on growth using a specialized team
              that professionally manages your account"
        button="Start for free"
        secoundButton="see price"
      />
    </Layout>
  );
};
export default AgentPage;

export const Head: HeadFC = () => <title>service-Agent</title>;
