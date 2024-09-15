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
    heading: "Instant Response",
    paragraph:
      "Providing accurate and fast AI-powered customer service 24/7 to ensure effective response to citizen inquiries",
  },
  {
    icon: FaImage,
    heading: "Intelligent Data Analysis",
    paragraph:
      "Using advanced data analytics techniques to make data-driven decisions and improve public policies",
  },
  {
    icon: FaImage,
    heading: "Process Automation",
    paragraph:
      "Streamlining administrative procedures and reducing human errors to enhance operational efficiency",
  },
  {
    icon: FaImage,
    heading: "Service Personalization",
    paragraph:
      "Delivering customized and interactive services based on citizens' needs and preferences through AI solutions",
  },
];

const experianceitems = [
  {
    heading: "Identifying Challenges and Opportunities",
    text: "We conduct a comprehensive analysis of the current situation and identify opportunities and challenges to achieve tangible and measurable improvements",
    image: image1,
    list: [
      "      Comprehensive analysis of current processes",
      "    Identification of key improvement areas",
      "    Setting measurable goals",
    ],
  },
  {
    heading: "Developing Customized Solutions Based on Specific Needs",
    text: "Develop a customized solution that meets specific needs and achieves seamless integration with existing systems, focusing on data security and privacy",
    image: image2,
    list: [
      "   Designing a tailored implementation plan",
      "   Developing initial solution prototypes",
      "    Ensuring compliance with local legislation and policies",
    ],
  },
  {
    heading: "Implementing Solutions and Training Teams",
    text: "Efficiently implement new solutions while providing comprehensive team training to ensure rapid adaptation and optimal use of modern technologies",
    image: image1,
    list: [
      "   Seamless integration with existing government systems",
      "    Providing specialized training for different teams",
      "    Continuous support to ensure the sustainability of solutions",
    ],
  },
  {
    heading: "Continuous Analysis and Improvement",
    text: "Provide ongoing evaluation services to ensure achievement of desired goals and deliver periodic improvements to implemented solutions",
    image: image3,
    list: [
      "    Post-implementation performance monitoring",
      "    Providing periodic analytical system reports",
      "    Implementing necessary improvements based on results",
    ],
  },
];

const GovernmentPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <ChannelHeader
        title=' Leading Comprehensive Digital Transformation
for Governments'
        paragraph='We help governments improve efficiency and deliver high-quality government services to citizens through comprehensive and integrated AI solutions'
        image={image1}
        sbtn=' Get a Free Demo'
        fbtn='Contact an Expert'
      />
      <SecoundDispatch
        theheader="Discover How Botbat's Innovative Technologies Transform Government Services"
        thescoundheader='  Learn how to transform government operations and increase citizen satisfaction using advanced AI solutions safely and reliably'
        dispachitems={dispachitems}
      />
      <Experience experianceitems={experianceitems} />
      <ChannelFooter
        title='     Be Among the Leading Governments in Using AI to Improve Services'
        secoundTitle='    Let us help you build a more efficient and effective digital
              future for your citizens today'
        button='Start for free'
        secoundButton='see price'
      />
    </Layout>
  );
};
export default GovernmentPage;

export const Head: HeadFC = () => <title>Industries-Government</title>;
