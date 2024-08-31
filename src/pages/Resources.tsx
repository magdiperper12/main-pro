import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/global.css";
import Layout from "../component/layout/layout";
import image3 from "../images/customer_support.webp";
import { FaImage } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import Question from "../component/conversation/Question";
import ImageHead from "../component/conversation/image-head";
import ThirdConvContent from "../component/conversation/third-conv-content";
import SecoundConvFooter from "../component/conversation/secound-conv-footer";

const dispachitems = [
  {
    icon: FaImage,
    heading: "Support",
    paragraph:
      "Get technical support and assistance in troubleshooting through our comprehensive support resources",
    explor: "explor Support",
    arrow: FaCircleArrowRight,
    url: "/support-Resorce/support",
  },
  {
    icon: FaImage,
    heading: "Support",
    paragraph:
      "Get technical support and assistance in troubleshooting through our comprehensive support resources",
    explor: "explor Support",
    arrow: FaCircleArrowRight,
    url: "/support-Resorce/sescound-support",
  },
  {
    icon: FaImage,
    heading: "Support",
    paragraph:
      "Get technical support and assistance in troubleshooting through our comprehensive support resources",
    explor: "explor Support",
    arrow: FaCircleArrowRight,
    url: "/support-Resorce/Secure",
  },
];

const items = [
  {
    question: " How can I contact the technical support team?",
    answer:
      'You can contact our technical support team through the "Support" page available in the "Resources & Support" section. There, you can submit your inquiry via the dedicated form or use the direct contact information provided.',
  },
  {
    question: "Where can I check the current service status?",
    answer:
      'You can check the real-time service status on the "Service Status" page. Any current issues or scheduled updates affecting services will be displayed there.',
  },
  {
    question: "What policies are in place to ensure the security of my data?",
    answer:
      'We take your data security very seriously. You can view all policies and procedures related to data protection on the "Data Security" page. Details of the certifications and security measures we follow to ensure the confidentiality of your information are displayed there.',
  },
  {
    question: "Can I try the services before subscribing?",
    answer:
      "Yes, you can start with a free trial by clicking the 'Start Now for Free' button in the Call to Action section. You'll have the opportunity to explore and test the solutions we offer before deciding to subscribe.",
  },
  {
    question:
      "What options are available if I encounter an issue with a service?",
    answer:
      "If you encounter any issues, you can refer to the 'Support' section where you'll find troubleshooting guides, FAQs, and options to contact our support team to quickly resolve any problem.",
  },
  {
    question: "How can I find out about scheduled updates for the services?",
    answer:
      'You can regularly check the "Service Status" page where we post all scheduled updates or maintenance operations that may affect the service. We strive to inform you in advance of any upcoming changes.',
  },
];

const Resources: React.FC<PageProps> = () => {
  return (
    <Layout>
      <ImageHead
        image={image3}
        title='Resources and Support for All Your Needs'
        paragraph='Explore the solutions we offer to support and enhance your business using our advanced tools while ensuring complete security for your data'
      />
      <ThirdConvContent
        dispachitems={dispachitems}
        theheader='Explore our support and resources sections to find the solutions and information you need.'
      />

      <SecoundConvFooter
        title='Get started with our Solutions for free'
        secondTitle='Join now and try our services to discover how we can help you'
        button='Start for Free'
        secondButton=' Explore our solutions'
        image={image3}
      />
      <Question items={items} theheader='' />
    </Layout>
  );
};

export default Resources;

export const Head: HeadFC = () => <title>Resources&Support </title>;

{
  /*import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/global.css";
import Layout from "../component/layout/layout";
import { IoDocumentText } from "react-icons/io5";
import { FaBlog, FaGithub } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { FaCircleArrowRight } from "react-icons/fa6";
import Question from "../component/conversation/Question";
import ThirdConvContent from "../component/conversation/third-conv-content";
import ConvFooter from "../component/conversation/conv-footer";

const dispachitems = [
  {
    icon: IoDocumentText,
    heading: "Documentation",
    paragraph: "Comprehensive guides and references for BotBat's AI services",
    explor: "Get Started",
    arrow: FaCircleArrowRight,
    url: "/support-Resorce/support",
  },
  {
    icon: FaBlog,
    heading: "Blog",
    paragraph:
      "Stay updated with the latest features, best practices, and case studies",
    explor: "Read Latest Posts",
    arrow: FaCircleArrowRight,
    url: "/support-Resorce/SescoundSupport",
  },
  {
    icon: TbApi,
    heading: "APIs",
    paragraph: "Detailed API documentation for seamless integration",
    explor: "Explore APIs",
    arrow: FaCircleArrowRight,
    url: "/support-Resorce/Secure",
  },
  {
    icon: FaGithub,
    heading: "GitHub",
    paragraph:
      "Access our open-source projects and contribute to the community",
    explor: "Visit GitHub",
    arrow: FaCircleArrowRight,
    url: "/support-Resorce/Secure",
  },
  {
    icon: SiPostman,
    heading: "Postman",
    paragraph: "Test our APIs and explore endpoints using Postman collections",
    explor: "Use Postman",
    arrow: FaCircleArrowRight,
    url: "/support-Resorce/Secure",
  },
];

const items = [
  {
    question: "How can I get technical support if I encounter a problem?",
    answer:
      "If you encounter any issues, you can check the 'FAQ' section for answers to common questions. If you don't find the answer you're looking for, you can contact our support team through the 'Contact Us' page or via the social media channels listed in the footer",
  },
  {
    question:
      "What are the best practices for using BotBat's AI services in my api?",
    answer:
      "You can visit our blog for best practices and case studies on how to effectively use BotBat's AI services. The blog includes tips on performance optimization, seamless integration, and real-world examples",
  },
  {
    question: "How can I test API integration before deploying?",
    answer:
      'You can use the Postman collections available in the "Postman" section to test the APIs before deployment. These collections provide a safe environment to test various requests and validate responses',
  },
  {
    question: "Are there any costs associated with using BotBat's APIs?",
    answer:
      'Yes, we offer different pricing plans based on usage volume. You can review the pricing documentation in the "Documentation" section to learn more about the available options, or contact our sales team for a customized plan',
  },
  {
    question:
      "How can I contribute to developing BotBat's open-source services?",
    answer:
      "We encourage the community to contribute to the development of BotBat's open-source services. You can start by visiting the 'GitHub' section to access the repositories and follow the contribution guidelines provided to add improvements, fix issues, or even create new features",
  },
];

const Develop: React.FC<PageProps> = () => {
  return (
    <Layout>
      <ConvFooter
        title='  Developers & Documentation'
        secondTitle="Welcome to Botbat's Developer Resources and Documentation everything you need to integrate our AI bot services into your applications"
        button='Explore Docs'
        secondButton='Visit the Blog'
      />
      <ThirdConvContent dispachitems={dispachitems} theheader='' />

      <Question items={items} theheader='' />
    </Layout>
  );
};

export default Develop;

export const Head: HeadFC = () => <title>Develop&docs </title>;
 */
}
