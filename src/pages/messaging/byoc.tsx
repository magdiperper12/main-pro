import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../styles/global.css";
import Layout from "../../component/layout/layout";
import ChannelHeader from "../../component/channel/channel-header";
import Dispatch from "../../component/channel/dispach";

import image1 from "../../images/header.jpg";
import image2 from "../../images/campaign.webp";
import image3 from "../../images/customer_support.webp";
import image4 from "../../images/robotic.webp";

import Experience from "../../component/channel/experience";
import ChannelFooter from "../../component/channel/channel-footer";

const dispachitems = [
  {
    heading: "Seamless Integration",
    paragraph:
      "Easily integrate your service provider into our system without complications, ensuring a quick and smooth start",
  },
  {
    heading: "Advanced Customization",
    paragraph:
      "Tailor the service to fit your business needs with extensive customization options and support for complex scenarios",
  },
  {
    heading: "Enhanced Performance",
    paragraph:
      "Optimize your communications efficiency using our advanced technologies, ensuring your messages are delivered accurately and effectively",
  },
  {
    heading: "Comprehensive Analytics",
    paragraph:
      "Gain deep insights to improve your campaign performance through advanced analytics tools available on our platform",
  },
];

const experianceitems = [
  {
    heading: "Expand Your Reach with BOTBAT's Global Network",
    text: "With BYOC service, you can now extend your communications worldwide while ensuring seamless integration of your service provider within BOTBAT's advanced infrastructure",
    image: image1,
    list: [
      "   Access a global network of service providers with local expertise",
      "   Ensure compliance with international standards",
      "  Benefit from high delivery rates and reliable messaging services",
    ],
  },
  {
    heading: "Boost Your Campaign Impact with Strategic Insights",
    text: "Leverage available data to optimize your communication strategies using BOTBAT's advanced analytics tools designed to elevate your SMS campaigns",
    image: image2,
    list: [
      "  Real-time data analysis to track campaign performance",
      "   Detailed reports providing deep insights",
      "   Seamless and flexible API integration ensuring secure and rapid data flow",
    ],
  },
  {
    heading: "Secure Your Sensitive Communications with BOTBAT",
    text: "Take advantage of BOTBAT's advanced security features to protect your data and communications, emphasizing privacy and integrity at every stepstandards",
    image: image3,
    list: [
      "   Advanced encryption for maximum security",
      "   Two-factor authentication to prevent unauthorized access",
      "   continuous updates to maintain the highest security standards",
    ],
  },
  {
    heading: "Craft the Perfect Messaging Experience for Your Business",
    text: "Create an exceptional communication experience that clearly reflects your brand identity, leveraging BOTBAT's flexible and customizable solutions with 24/7 technical support to meet your needs anytime",
    image: image4,
    list: [
      "  Flexible API integration for customized messaging",
      "  Scalability to meet growing business needs",
      "   Dedicated support to assist you every step of the way",
    ],
  },
];
const Byoc: React.FC<PageProps> = () => {
  return (
    <Layout>
      <ChannelHeader
        title='  Seamlessly Integrate Your Service Provider with BOTBAT'
        paragraph='Now you can easily integrate your telecommunications provider with our robust and secure infrastructure for exceptional performance that meets all your business needs'
        image={image1}
        sbtn=' Get a Free Demo'
        fbtn='Contact an Expert'
      />
      <Dispatch
        theheader='Unlock the Full Potential of Your Business with BOTBAT’s BYOC Service'
        thescoundheader="  BYOC service gives you complete control over your business communications, with the flexibility to choose your own service provider while leveraging BOTBAT's trusted platform"
        dispachitems={dispachitems}
      />
      <Experience experianceitems={experianceitems} />
      <ChannelFooter
        title='    BOTBAT: The Ideal SMS Tool for Achieving Your Business Goals'
        secoundTitle=' Elevate your communication to new levels and increase your business growth specifically designed to efficiently achieve your goals'
        button='Start for free'
        secoundButton='see price'
      />
    </Layout>
  );
};

export default Byoc;

export const Head: HeadFC = () => <title>Byoc-channel</title>;
