import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../styles/global.css";
import Layout from "../../component/layout/layout";
import ChannelHeader from "../../component/channel/channelheader";
import Dispatch from "../../component/channel/dispach";

import image1 from "../../images/header.jpg";
import image2 from "../../images/campaign.webp";
import image3 from "../../images/customer_support.webp";
import image4 from "../../images/robotic.webp";

import Channelfooter from "../../component/channel/channelfooter";
import Experience from "../../component/channel/experience";

const dispachitems = [
  {
    heading: "Global Reach",
    paragraph:
      "Send SMS messages confidently to any location worldwide, ensuring timely delivery",
  },
  {
    heading: "Advanced Analytics",
    paragraph:
      "Monitor your campaigns in real-time and use data to enhance your strategies",
  },
  {
    heading: "Secure Messaging",
    paragraph:
      "Protect your communications with advanced security technologies ensuring privacy",
  },
  {
    heading: "Custom Solutions",
    paragraph:
      "SMS services tailored specifically to meet the unique requirements of your business",
  },
];

const experianceitems = [
  {
    heading: "Send Your Messages Anywhere in the World with BOTBAT",
    text: "Propel your business to new horizons with BOTBAT's network. Discover the power of intelligent connectivity that transcends borders and delivers tangible results anywhere",
    image: image1,
    list: [
      " Vast global carrier network",
      " Local sender IDs",
      "International regulatory compliance",
      "High delivery rates",
    ],
  },
  {
    heading: "Strategic Insights to Boost Your Campaign Performance",
    text: "ransform your data into a driving force for growth. Uncover the full potential of your SMS campaigns with BOTBAT's intelligent analytics tools",
    image: image2,
    list: [
      "Real-time data",
      "Detailed reports",
      " Custom dashboards",
      "API integration",
    ],
  },
  {
    heading: "Smart Protection for Your Sensitive Communications",
    text: "Trust BOTBAT to safeguard your valuable information. We provide you with an advanced digital shield ensuring the confidentiality and integrity of every message",
    image: image3,
    list: [
      "Advanced encryption",
      "Two-factor authentication",
      "Global compliance",
      "Fraud prevention",
    ],
  },
  {
    heading: "Craft the Perfect SMS Experience for Your Business",
    text: "Craft a unique communication experience that reflects your business identity. With BOTBAT, your vision becomes reality through flexible and innovative SMS solutions",
    image: image4,
    list: [
      " Flexible API",
      "Personalized messaging",
      "Scalability",
      "Custom support",
    ],
  },
];
const SmsPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <ChannelHeader
        title='BOTBAT - Versatile SMS Messaging Platform'
        paragraph=" Connect with your audience globally using BOTBAT's robust and
              scalable SMS messaging service, designed to meet diverse business
              needs"
        image={image1}
        sbtn=' Get a Free Demo'
        fbtn='Contact an Expert'
      />
      <Dispatch
        theheader='  Engage Your Audience Globally with BOTBAT Reliable SMS Messaging
              and Scalable API Solutions'
        thescoundheader='   Discover the powerful features that make BOTBAT the perfect choice
              for all your SMS communication needs'
        dispachitems={dispachitems}
      />
      <Experience experianceitems={experianceitems} />
      <Channelfooter
        title=' BOTBAT: The Ultimate SMS Tool for Achieving Your Business Goals'
        secoundTitle='  Elevate your communication. Boost your business growth with
              innovative, effective SMS solutions'
        button=' Start for free'
        secoundButton='see price'
      />
    </Layout>
  );
};

export default SmsPage;
export const Head: HeadFC = () => <title>SMS-channel</title>;
