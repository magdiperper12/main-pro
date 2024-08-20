import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/global.css";
import Layout from "../component/layout/layout";
import image3 from "../images/customer_support.webp";
import Imagehead from "../component/conversation/imagehead";
import SecoundConvfooter from "../component/conversation/SecoundConvFooter";
import ThirdConvcontent from "../component/conversation/thirdconvcontent";
import { FaImage } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import Question from "../component/conversation/Question";

const dispachitems = [
  {
    icon: FaImage,
    heading: "Support",
    paragraph:
      "Get technical support and assistance in troubleshooting through our comprehensive support resources",
    explor: "explor solution",
    arrow: FaCircleArrowRight,
    url: "/solution-channel/services/Professional",
  },
  {
    icon: FaImage,
    heading: "Support",
    paragraph:
      "Get technical support and assistance in troubleshooting through our comprehensive support resources",
    explor: "explor solution",
    arrow: FaCircleArrowRight,
    url: "/solution-channel/services/Digital",
  },
  {
    icon: FaImage,
    heading: "Support",
    paragraph:
      "Get technical support and assistance in troubleshooting through our comprehensive support resources",
    explor: "explor solution",
    arrow: FaCircleArrowRight,
    url: "/solution-channel/services/Customer",
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
      <Imagehead
        image={image3}
        title='Resources and Support for All Your Needs'
        paragraph='Explore the solutions we offer to support and enhance your business using our advanced tools while ensuring complete security for your data'
      />
      <ThirdConvcontent
        dispachitems={dispachitems}
        theheader='Explore our support and resources sections to find the solutions and information you need.'
      />

      <SecoundConvfooter
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
