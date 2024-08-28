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

import Channelfooter from "../../component/channel/channel-footer";
import Experience from "../../component/channel/experience";
import ChannelFooter from "../../component/channel/channel-footer";

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
    heading: "AI-Powered Marketing Boost ROI with Smart Engagement",
    text: "Leverage our advanced BOTBAT Engage platform or flexible API to send targeted marketing messages using our intelligent Broadcast or Dynamic Flow features.",
    image: image1,
    list: [
      "  Data-Driven Personalized Offers",
      "  AI-Optimized Marketing Campaigns",
      "Interactive Product Launches",
    ],
  },
  {
    heading: "Boost Conversion Rates with Personalized Offers",
    text: "Send automated promotional messages via API or Batbot system and engage customers through Answers chatbot or Conversations contact center",
    image: image2,
    list: [
      " Abandoned Cart Alerts",
      "  Efficient Order Management",
      "  Personalized Product Recommendations",
      "Seamless Reordering",
    ],
  },
  {
    heading: "Elevate Customer Satisfaction with Swift and Continuous Support",
    text: "Improve your support experience with our API or cloud contact center, Conversations, ensuring your customers receive quick and effective service anytime",
    image: image3,
    list: [
      " Instant responses via WhatsApp",
      " Guide customers to chat support",
      "  Personalized help from live agents",
      "  Subscription cancellations",
      " Timely updates for customers",
    ],
  },
  {
    heading: "Effortlessly Build Use Cases with Our Drag-and-Drop Interface",
    text: "Create workflows and customer journeys effortlessly without any coding required and start delivering convenient and relevant communications with your customers",
    image: image4,
    list: [
      " Automate replies to typical inquiries",
      "Initiate messages based on user actions and events",
      " Utilize customer data to create targeted message sequences",
    ],
  },
];
const WhatsappPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <ChannelHeader
        title='   WhatsApp Business API: Build Your Custom ChatBot'
        paragraph="  Automate Customer Communication with WhatsApp Chatbots and Secure Live Chat, Powered by the World's Most Popular Messaging Platform"
        image={image1}
        sbtn=' Get a Free Demo'
        fbtn='Contact an Expert'
      />
      <Dispatch
        theheader=' Transform Your WhatsApp Experience with BOTBAT AI Solutions'
        thescoundheader='    Unleash the Power of AI-Driven Chatbots and Automated Messaging for Seamless Customer Engagement'
        dispachitems={dispachitems}
      />
      <Experience experianceitems={experianceitems} />
      <ChannelFooter
        title='     Enhance Your WhatsApp Engagement with BOTBAT'
        secoundTitle='  Take the first step towards effortless customer interaction with our flexible'
        button='Start for free'
        secoundButton='see price'
      />
    </Layout>
  );
};

export default WhatsappPage;

export const Head: HeadFC = () => <title>Whatsapp-channel</title>;
