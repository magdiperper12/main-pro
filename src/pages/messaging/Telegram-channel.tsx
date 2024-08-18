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
    heading: "BOTBAT Engage",
    paragraph:
      "Design and launch intelligent communication campaigns using customized message templates on our advanced customer interaction platform",
  },
  {
    heading: "BOTBAT Insights",
    paragraph:
      "Analyze and understand your customers' behavior by collecting vital data and creating detailed profiles using our state-of-the-art customer analytics platform",
  },
  {
    heading: "BOTBAT Connect",
    paragraph:
      "Empower your team to efficiently manage multiple conversations and instantly access past interaction records through our cloud-based contact center",
  },
  {
    heading: "BOTBAT AI Assistant",
    paragraph:
      "Develop smart AI-powered chatbots on our user-friendly platform to provide immediate and personalized customer support",
  },
];

const experianceitems = [
  {
    heading: "Unmatched Security Full Encryption and Total Protection",
    text: "Enjoy comprehensive protection and unparalleled security for your data and conversations with advanced encryption technologies.",
    image: image1,
    list: [
      "  Protection Against Hacks",
      " Enhanced Customer Trust",
      "End-to-End Encryption",
      "Compliance with Data Protection Regulations",
    ],
  },
  {
    heading: "Bot Building Made Easy: Smooth Design and Fast Execution",
    text: "Take control of creating complex bots effortlessly with an easy-to-use interface and innovative tools that enable quick and efficient execution",
    image: image2,
    list: [
      " Drag-and-Drop Interface",
      "  Ready-to-Use Templates",
      " Multilingual Support",
      "Easy Function Customization",
    ],
  },
  {
    heading: "Effortless Integration Easy System Connectivity",
    text: "Enhance your workflow efficiency by seamlessly integrating Telegram bots with CRM systems and other platforms to simplify message management and coordination effortlessly",
    image: image3,
    list: [
      " Flexible API Integration",
      " CRM and Customer Service Integration",
      " Database Connectivity",
      " Process Automation",
    ],
  },
  {
    heading: "Advanced Analytics to Enhance Your Strategies",
    text: "Gain deep insights into your message performance and audience engagement using advanced analytics tools to understand user behavior and improve your bot performance",
    image: image4,
    list: [
      " Interactive Dashboards",
      "Detailed analysis of user interactions",
      " Customizable and Exportable Reports",
      " Improve communication strategies based on data",
    ],
  },
];
const Telegrampage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <ChannelHeader
        title=' Telegram Bots Fully Encrypted and Easy to Build'
        paragraph=' Expand your reach and enhance engagement with your customers using
              Telegram'
        image={image1}
        sbtn='Contact an Expert'
        fbtn='Get a Free Demo'
      />
      <Dispatch
        theheader=' Transform Your WhatsApp Experience with BOTBAT AI Solutions'
        thescoundheader=' Unleash the Power of AI-Driven Chatbots and Automated Messaging
              for Seamless Customer Engagement'
        dispachitems={dispachitems}
      />
      <Experience experianceitems={experianceitems} />
      <Channelfooter
        title='Enhance Your Customer Experience with BOTBAT’s Telegram Bots'
        secoundTitle=' Utilize BOTBAT’s Telegram bots to improve customer communication
              and achieve your marketing goals effectively'
        button='   Start for free'
        secoundButton=' see price'
      />
    </Layout>
  );
};

export default Telegrampage;
export const Head: HeadFC = () => <title>Telegrampage</title>;
