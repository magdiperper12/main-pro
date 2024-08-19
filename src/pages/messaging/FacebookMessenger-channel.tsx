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
    heading: "System Integration",
    paragraph:
      "Smart connectivity ensuring smooth information flow across all your platforms and tools",
  },
  {
    heading: "Intelligent Chatbots Building",
    paragraph:
      "Create a Messenger bot AI-powered virtual assistants serving your customers around the clock",
  },
  {
    heading: "Cloud Customer Support",
    paragraph:
      "A sophisticated system combining speed and intelligence for instant, personalized support",
  },
  {
    heading: " Sales Recovery Strategies",
    paragraph:
      "Innovative techniques to convert hesitant shoppers into satisfied, loyal customers",
  },
];

const experianceitems = [
  {
    heading: "Seamlessly connect with existing tools and platforms",
    text: "Enhance your operational efficiency by seamlessly connecting our platform with all your existing tools and systems, creating a unified and effective experience",
    image: image1,
    list: [
      " Flexible APIs to ensure smooth integration.",
      "  Data synchronization to ensure information consistency",
      "Consolidating data from all sources in one place",
      "Process automation across systems to reduce errors and increase efficiency",
    ],
  },
  {
    heading: "Create smart chatbots for efficient automated support",
    text: "Create a Messenger bot for automated, AI-powered support that provides uninterrupted customer service and evolves with each interaction.",
    image: image2,
    list: [
      " Advanced NLP for Accurate Request Handling",
      " Dynamic Customization Based on Customer History",
      "Multilingual Capabilities for Global Reach",
      "Seamless Integration with Booking and Payment Systems",
    ],
  },
  {
    heading: "Optimizing Customer Support with Cutting-Edge Cloud Solutions",
    text: "Elevate your customer support experience to new horizons with our advanced cloud system that combines efficiency and personalization",
    image: image4,
    list: [
      "understanding and anticipating customer needs.",
      "Unified dashboard for efficiently managing all interactions.",
      " Integrated support with existing systems.",
      "Improved customer experience.",
    ],
  },
  {
    heading: "Innovative Strategies to Convert Hesitant Shoppers",
    text: "Turn missed opportunities into successes with our smart approach to abandoned cart recovery and re-engaging hesitant customers.",
    image: image3,
    list: [
      " Automated reminder messages for re-engagement.",
      " Special offers for customers based on previous browsing.",
      " Analyze shopping behavior to increase conversion chances.",
      "Integration with e-commerce platforms.",
    ],
  },
];

const FacebookMessengerpage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <ChannelHeader
        title='   Easily Connect with Your Customers via Facebook Messenger'
        paragraph='  Automate customer engagement and support with our Facebook
              Messenger chatbot'
        image={image1}
        sbtn=' Get a Free Demo'
        fbtn='Contact an Expert'
      />
      <Dispatch
        theheader='  Integrated Solutions to Enhance Customer Satisfaction and Increase
              Loyalty'
        thescoundheader='     Discover the power of effective customer communication by
              transforming your Facebook page into an advanced support center to
              deliver an unforgettable, exceptional experience'
        dispachitems={dispachitems}
      />
      <Experience experianceitems={experianceitems} />
      <Channelfooter
        title='  Enhance your business with AI-driven chatbots'
        secoundTitle=' Boost sales and efficiency with advanced AI chatbots for
              personalized customer support.'
        button='Start for free'
        secoundButton='see price'
      />
    </Layout>
  );
};

export default FacebookMessengerpage;

export const Head: HeadFC = () => <title>Messenger-channel</title>;
