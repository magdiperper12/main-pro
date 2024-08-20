import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../styles/global.css";
import Layout from "../../component/layout/layout";

import Convcontent from "../../component/conversation/Convcontent";
import image3 from "../../images/customer_support.webp";
import { FaImage } from "react-icons/fa";
import Convheader from "../../component/conversation/Convheader";
import Convfooter from "../../component/conversation/Convfooter";

interface FeatureItem {
  icon: React.ElementType;
  heading: string;
  paragraph: string;
}

const dispachitems: FeatureItem[] = [
  {
    icon: FaImage,
    heading: "Intelligent Navigation",
    paragraph:
      "Empower your Business. Serve user using AI Technology and make it easier Technology and make it easier.",
  },
  {
    icon: FaImage,
    heading: "Enhanced User Experience",
    paragraph:
      "With state of the art Workflow builder. Make your Technology and make it easier application more interactive.",
  },
  {
    icon: FaImage,
    heading: "Intelligent Navigation",
    paragraph:
      "Empower your Business. Serve user using AI Technology and make it easier Technology and make it easier.",
  },
  {
    icon: FaImage,
    heading: "Enhanced User Experience",
    paragraph:
      "With state of the art Workflow builder. Make your Technology and make it easier application more interactive.",
  },
  {
    icon: FaImage,
    heading: "Ease of Use",
    paragraph:
      "Enhance customer engagement with real-time chat solutions. Build interactive, seamless experiences.",
  },
  {
    icon: FaImage,
    heading: "Advanced Reporting and Analytics",
    paragraph:
      "Connect your apps and services with Botbat and automate your communication  powerful API.",
  },
];

const Role: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Convheader
        image={image3}
        title='   NLU and Role Based Chatbot'
        paragraph='  Our innovative tool combines natural language understanding (NLU)
              and intelligent role-based guidance to deliver an exceptional'
        btn='Get a Free Demo'
      />
      <Convcontent
        theheader='   Experience Smart Interaction with the Role-Based and NLU Chatbot'
        thescoundheader='  The Role-Based and NLU Chatbot uses AI to analyze inquiries and
            guide visitors with accurate information and support based on
            predefined roles. It enhances engagement and satisfaction, making it
            ideal for e-commerce and customer service platforms.'
        dispachitems={dispachitems}
      />

      <Convfooter
        title='  Join Leading Companies Using Our Technology'
        secondTitle='Elevate your customer experience with our innovative solution.
              Enhance service, boost satisfaction, and improve efficiency - see
              how our technology can transform your business interactions today.'
        button='Start for Free'
        secondButton='See Price'
      />
    </Layout>
  );
};

export default Role;

export const Head: HeadFC = () => <title>role-gen-ai</title>;
