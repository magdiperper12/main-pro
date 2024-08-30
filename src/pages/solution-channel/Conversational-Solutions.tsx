import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../styles/global.css";
import Layout from "../../component/layout/layout";
import ChannelHeader from "../../component/channel/channel-header";
import { FaImage } from "react-icons/fa6";
import image1 from "../../images/header.jpg";
import image2 from "../../images/campaign.webp";
import image3 from "../../images/customer_support.webp";
import image4 from "../../images/robotic.webp";

import Channelfooter from "../../component/channel/channel-footer";
import Experience from "../../component/channel/experience";
import SecoundDispatch from "../../component/channel/secound-dispach";
import ChannelFooter from "../../component/channel/channel-footer";

const dispachitems = [
  {
    icon: FaImage,
    heading: "Build a Bot Easily",
    paragraph:
      "Simple interface lets you build a professional chatbot without any coding skills.",
  },
  {
    icon: FaImage,
    heading: "Intelligent Responses",
    paragraph:
      "Advanced natural language understanding techniques ensure accurate and appropriate responses to customer inquiries",
  },
  {
    icon: FaImage,
    heading: "Seamless Integration and Customization",
    paragraph:
      "Easy transition between bot and human staff to efficiently resolve all customer issues, while tailoring the assistant to precisely fit your business needs.",
  },
  {
    icon: FaImage,
    heading: "Analytics ,Continuous Improvement",
    paragraph:
      "Continuous insights into customer interactions help you make better decisions and consistently improve the customer experience",
  },
];

const experianceitems = [
  {
    heading: "Start building your perfect Botbat bot",
    text: "Use our user-friendly tool to customize your chatbot according to your business needs. Our simple interface allows you to design an exceptional user experience without any coding skills",
    image: image1,
    list: [
      "  Define the conversation style that aligns with your brand.",
      "  Add custom FAQs to address common customer inquiries.",
      " Integrate interactive elements to enhance user engagement.",
    ],
  },
  {
    heading: "Add Your Knowledge for Maximum Efficiency",
    text: "Equip the bot with information specific to your company and products to ensure accurate and helpful responses across various scenarios",
    image: image2,
    list: [
      "  Upload a database of FAQs and product/service details.",
      "Train the bot to understand field-specific terminology.",
      "  Develop interactive scenarios to handle complex cases.",
    ],
  },
  {
    heading: "Easily integrate your Platforms with BOTBAT",
    text: "Seamlessly integrate the assistant with your website or app. We provide smooth integration tools for various systems and platforms, ensuring your chatbot is accessible wherever your customers need it",
    image: image4,
    list: [
      "  Choose the platforms you want to integrate the bot with.",
      " Follow our guidelines to add the bot without coding expertise.",
      " Ensure the bot is fully integrated with your CRM systems.",
    ],
  },
  {
    heading: "Launch and Continuously Enhance Your Botbat",
    text: "Leverage Botbat's control panel to monitor and continuously improve your bot's performance. Once launched, you can  track the bot's effectiveness and make adjustments for optimal results.",
    image: image3,
    list: [
      "  Monitor Botbat's performance analytics.",
      "  Improve Botbat's responses based on customer feedback.",
      "  Regularly Keep your Botbat up-to-date.",
    ],
  },
];

const ConversationPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <ChannelHeader
        title='   Empower Your Business with Conversational AI Solutions'
        paragraph=" Don't let your customers wait. Deliver exceptional customer
              service with our AI-powered chatbot.Easy to use • Customizable •
              Effective"
        image={image1}
        sbtn=' Get a Free Demo'
        fbtn='Contact an Expert'
      />
      <SecoundDispatch
        theheader=' Features That Transform Customer Service Without Technical
              Complexities'
        thescoundheader='  Discover how conversational AI solutions transform customer
              experiences with smarter, more seamless interactions.'
        dispachitems={dispachitems}
      />
      <Experience experianceitems={experianceitems} />
      <ChannelFooter
        title='   Elevate Your Customer ServiceNo Technical Complexities'
        secoundTitle="Don't miss the chance to enhance your customer service. Try our
              assistant and experience the significant improvement in customer
              satisfaction."
        button='Start for free'
        secoundButton='see price'
      />
    </Layout>
  );
};

export default ConversationPage;

export const Head: HeadFC = () => <title>Conversation-solution</title>;
