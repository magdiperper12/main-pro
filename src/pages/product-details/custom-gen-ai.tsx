import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../styles/global.css"; // Make sure global styles are correctly applied
import Layout from "../../component/layout/layout";
import Convcontent from "../../component/conversation/Convcontent";
import { FaImage } from "react-icons/fa";
import image3 from "../../images/customer_support.webp";
import Convfooter from "../../component/conversation/Convfooter";
import Convheader from "../../component/conversation/Convheader";

interface FeatureItem {
  icon: React.ElementType;
  heading: string;
  paragraph: string;
}

const dispachitems: FeatureItem[] = [
  {
    icon: FaImage,
    heading: "Design with limit",
    paragraph:
      "Empower your Business. Serve user using AI Technology and make it easier Technology and make it easier.",
  },
  {
    icon: FaImage,
    heading: "make Omnipresent",
    paragraph:
      "With state of the art Workflow builder. Make your Technology and make it easier application more interactive.",
  },
  {
    icon: FaImage,
    heading: "easy to use interface",
    paragraph:
      "Enhance customer engagement with real-time chat solutions. Build interactive, seamless experiences.",
  },
  {
    icon: FaImage,
    heading: "height customizable chatbot",
    paragraph:
      "Connect your apps and services with Botbat and automate your communication  powerful API.",
  },
  {
    icon: FaImage,
    heading: "advanced ai capitalies",
    paragraph:
      "Connect your apps and services with Botbat and automate your communication  powerful API.",
  },
  {
    icon: FaImage,
    heading: "sameles multi-plateform integration",
    paragraph:
      "Connect your apps and services with Botbat and automate your communication  powerful API.",
  },
];
const Custom: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Convheader
        image={image3}
        title='  Design Your Own Smart Chatbot'
        paragraph=' 
              Build intelligent , Customizable Chatbot tailored to your Busniess
              need'
        btn='Get a Free Demo'
      />
      <Convcontent
        theheader='   Create your own intelligent chatbot with Custom Gen AI Chatbot
            Builder'
        thescoundheader='  Our Custom Gen AI Chatbot Builder allows you to create intelligent
            chatbots that cater specifically to your business requirements.
            Enhance customer engagement, automate processes, and provide 24/7
            support effortlessly.'
        dispachitems={dispachitems}
      />

      <Convfooter
        title='  Start bulding with Botbat for free'
        secondTitle=' Sign up and start building your ideal customer engagement
              experience today'
        button='Start for Free'
        secondButton='See Price'
      />
    </Layout>
  );
};

export default Custom;

export const Head: HeadFC = () => <title>custom-gen-ai</title>;
