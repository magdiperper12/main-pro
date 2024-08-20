import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../styles/global.css";
import Layout from "../../component/layout/layout";
import ChannelHeader from "../../component/channel/channelheader";
import image1 from "../../images/header.jpg";
import image2 from "../../images/campaign.webp";
import image3 from "../../images/customer_support.webp";
import image4 from "../../images/robotic.webp";
import { FaImage } from "react-icons/fa6";
import Channelfooter from "../../component/channel/channelfooter";
import Experience from "../../component/channel/experience";
import SecoundDispatch from "../../component/channel/secounddispach";

const dispachitems = [
  {
    icon: FaImage,
    heading: "Fast and Flexible Integration",
    paragraph:
      "Easy integration with existing systems and applications to ensure seamless operations",
  },
  {
    icon: FaImage,
    heading: "Comprehensive Customization",
    paragraph:
      "Design solutions tailored to your unique business needs with extensive customization capabilities",
  },
  {
    icon: FaImage,
    heading: "Continuous Supportand Training",
    paragraph:
      "Benefit from specialized support and ongoing training to maximize your use of the service",
  },
  {
    icon: FaImage,
    heading: "Advanced Analytics",
    paragraph:
      "Gain precise insights from data to make well-informed decisions",
  },
];

const experianceitems = [
  {
    heading: "Begin Your Journey with Generative AI",
    text: "A simple and quick registration process that allows you to start using our service immediately and access advanced tools",
    image: image1,
    list: [
      "   Create an account in minutes",
      "   Choose the package that suits your business needs",
      "  Easily customize initial settings and explore tools",
    ],
  },
  {
    heading: "Tailor the Solutions to Fit Your Business Needs and Capabilities",
    text: "Explore the wide range of available tools and features and learn how to use them to enhance your business",
    image: image2,
    list: [
      "   Select appropriate settings",
      "  Practical examples of different use cases in your field",
      "  Integration with existing business systems",
    ],
  },
  {
    heading: "Integrate AI into Your Workflow",
    text: "We assist you in seamlessly implementing Generative AI solutions across various aspects of your business",
    image: image4,
    list: [
      "  Customized implementation plan for your business",
      "  Specialized technical support during the integration process",
      "  Employee training on using new tools",
    ],
  },
  {
    heading: "Monitor Results andImprove Performance",
    text: "Leverage advanced analytics to track the performance of AI solutions and continuously improve them to achieve the best results",
    image: image3,
    list: [
      "  Comprehensive dashboard for performance monitoring",
      "  Periodic reports with insights and recommendations",
      "   Continuous updates to improve the service based on data",
    ],
  },
];

const GenPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <ChannelHeader
        title='The Generative AI Revolution: Innovative Solutions for Your Business'
        paragraph='Leverage the power of Generative AI to accelerate your operations and foster innovation within your organization in ways never before possible'
        image={image1}
        sbtn=' Get a Free Demo'
        fbtn='Contact an Expert'
      />
      <SecoundDispatch
        theheader='  Unique Advantages That Make Our Service Your Optimal Choice'
        thescoundheader=' A suite of advanced features designed to support your business,deliver customized solutions to your needs, and ensure a smooth
              and efficient user experience'
        dispachitems={dispachitems}
      />
      <Experience experianceitems={experianceitems} />
      <Channelfooter
        title='   Customized Solutions for Your Unique Needs with Botbat Generative
              AI Power'
        secoundTitle=" Don't miss the opportunity to elevate your business. Start now and discover the unlimited possibilities that Generative AI offers for
              the future of your organization"
        button='Start for free'
        secoundButton='see price'
      />
    </Layout>
  );
};
export default GenPage;

export const Head: HeadFC = () => <title>Gen-solution</title>;
