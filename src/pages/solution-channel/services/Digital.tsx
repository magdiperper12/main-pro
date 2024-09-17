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
    heading: "Improving Operational Efficiency",
    paragraph:
      "Providing digital solutions that help streamline processes and reduce time and effort spent on daily tasks",
  },
  {
    icon: FaImage,
    heading: "Enhancing Innovation",
    paragraph:
      "Enabling you to use modern technological tools that help in developing new products or improving existing ones",
  },
  {
    icon: FaImage,
    heading: "Improving Customer Experience",
    paragraph:
      "Enabling you to provide more interactive and value-added services to your customers through advanced and user-friendly digital platforms",
  },
  {
    icon: FaImage,
    heading: "Continuous Support and Training",
    paragraph:
      "We provide ongoing technical support and necessary training to ensure the success of the digital transformation process",
  },
];

const experianceitems = [
  {
    heading: "Assessing the Current Situation ",
    text: "We analyze your current infrastructure and digital operations to identify areas needing improvement",
    image: image1,
    list: [
      "    Review current systems and processes",
      "    Identify strengths and weaknesses in the digital infrastructure",
      "   Develop a clear digital transformation strategy",
    ],
  },
  {
    heading: "Designing the Digital Transformation Strategy",
    text: "Creating a comprehensive digital transformation plan that covers all aspects of the business based on the assessment results",
    image: image2,
    list: [
      "    Identify priorities and key transformation points",
      "   Select appropriate technologies and solutions",
      "  Develop an implementation and testing roadmap",
    ],
  },
  {
    heading: "Implementing Digital Solutions",
    text: "Working on implementing solutions and integrating them with your current systems in a systematic and well-planned manner while providing necessary training for the team",
    image: image4,
    list: [
      "    Ensure installation and integration of new systems",
      "    Train employees on new tools and technologies",
      "  Monitor performance and ensure transition integration",
    ],
  },
  {
    heading: "Continuous Monitoring and Improvement",
    text: "We continue to monitor the performance of digital solutions and provide ongoing support to ensure achieving the desired goals",
    image: image3,
    list: [
      "    Collect and analyze data to measure performance",
      "    Identify opportunities for improvement and development",
      "    Implement updates and improvements periodically",
    ],
  },
];
const DigitalPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <ChannelHeader
        title="   Comprehensive Digital Transformation Services"
        paragraph="  Elevate your organization to the digital age with our
              comprehensive digital transformation solutions, powered by the
              latest AI technologies"
        image={image1}
        sbtn=" Get a Free Demo"
        fbtn="Contact an Expert"
      />{" "}
      <div className="md:-mt-10 lg:-mt-20  "></div>
      <SecoundDispatch
        theheader="   Benefit from a wide range of features that make us your ideal
              partner"
        thescoundheader="   We provide integrated solutions ensuring a seamless and effective
              digital transformation for your organization"
        dispachitems={dispachitems}
      />
      <Experience experianceitems={experianceitems} />
      <ChannelFooter
        title=" It's time to transform your organization into an integrated
              digital entity"
        secoundTitle="  Start your journey towards digital transformation with us and
              achieve the growth you deserve"
        button="Start for free"
        secoundButton="see price"
      />
    </Layout>
  );
};

export default DigitalPage;

export const Head: HeadFC = () => <title>service-Digital</title>;
