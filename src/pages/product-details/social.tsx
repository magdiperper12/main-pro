import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../styles/global.css";
import Layout from "../../component/layout/layout";

import Convcontent from "../../component/conversation/conv-content";
import image3 from "../../images/customer_support.webp";
import { FaImage } from "react-icons/fa";
import Convheader from "../../component/conversation/conv-header";
import Convfooter from "../../component/conversation/conv-footer";
import ConvHeader from "../../component/conversation/conv-header";
import ConvContent from "../../component/conversation/conv-content";
import ConvFooter from "../../component/conversation/conv-footer";

interface FeatureItem {
  icon: React.ElementType;
  heading: string;
  paragraph: string;
}

const dispachitems: FeatureItem[] = [
  {
    icon: FaImage,
    heading: "Intelligent Customer Listening",
    paragraph:
      "Empower your Business. Serve user using AI Technology and make it easier Technology and make it easier.",
  },
  {
    icon: FaImage,
    heading: "Chatbot Performance Enhancement",
    paragraph:
      "With state of the art Workflow builder. Make your Technology and make it easier application more interactive.",
  },
  {
    icon: FaImage,
    heading: "Efficient Interaction Management",
    paragraph:
      "Enhance customer engagement with real-time chat solutions. Build interactive, seamless experiences.",
  },
  {
    icon: FaImage,
    heading: "Advanced Analytics and Reporting",
    paragraph:
      "Connect your apps and services with Botbat and automate your communication  powerful API.",
  },
];
const Social: React.FC<PageProps> = () => {
  return (
    <Layout>
      <ConvHeader
        image={image3}
        title='   AI-Powered Social Listening'
        paragraph=' Discover How AI Technology Can Elevate Your Customer Experience to
              New Heights'
        btn='Get a Free Demo'
      />
      <div className='flex justify-start md:mb-52 md:-mt-32  md:justify-around lg:justify-around items-start  m-auto mb-20 w-3/4  rounded-xl bg-blue-50 shadow-lg shadow-blue-100  '>
        <div className='text-center  p-2  ps-10'>
          <h2 className='text-2xl font-bold text-gray-800 py-4 text-start '>
            Social Listening
          </h2>
          <p className='text-lg text-gray-600 text-start px-3 pb-5'>
            Discover what your customers are saying about you on social media
            platform , and analyze the data to make informed decisior
          </p>
        </div>
        <div className='text-center  p-2  ps-10'>
          <h2 className='text-2xl font-bold text-gray-800 py-4 text-start '>
            Engagement
          </h2>
          <p className='text-lg text-gray-600 text-start px-3 pb-5'>
            Interact with your customers intelligently quickly through chatbot ,
            providing them instance support and accurate answers
          </p>
        </div>
      </div>
      <ConvContent
        theheader=" Intelligently Hear Your Customers' Voice: Elevate Your Chatbot
            Service to the Next Level"
        thescoundheader='  Our smart tool monitors and analyzes social media conversations,automatically improving chatbot responses and enhancing customer experience.'
        dispachitems={dispachitems}
      />

      <ConvFooter
        title=' Are You Ready to Enhance Your Customer Interactions?'
        secondTitle='Discover the Power of Intelligent Social Listening and Elevate
              Your Customer Service to the Next Level'
        button='Start for Free'
        secondButton='See Price'
      />
    </Layout>
  );
};

export default Social;

export const Head: HeadFC = () => <title>social-gen-ai</title>;
