import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../styles/global.css";
import { FaImage } from "react-icons/fa";
import image3 from "../../images/customer_support.webp";
import Imagehead from "../../component/conversation/image-head";
import { FaCircleArrowRight } from "react-icons/fa6";
import Secoundconvcontent from "../../component/conversation/secound-conv-content ";
import SecoundConvfooter from "../../component/conversation/secound-conv-footer";
import Layout from "../../component/layout/layout";
import SecoundConvContent from "../../component/conversation/secound-conv-content ";
import SecoundConvFooter from "../../component/conversation/secound-conv-footer";

interface FeatureItem {
  icon: React.ElementType;
  heading: string;
  paragraph: string;
  explor: string;
  arrow: React.ElementType;
  url: string;
}

const dispachitems: FeatureItem[] = [
  {
    icon: FaImage,
    heading: "Professional Services",
    paragraph:
      "We provide you with a team of specialized experts to support your projects in improving your operational processes and technological integration, from planning to implementation",
    explor: "explor solution",
    arrow: FaCircleArrowRight,
    url: "/solution-channel/services/Professional",
  },
  {
    icon: FaImage,
    heading: "Digital Transformation Services",
    paragraph:
      "We help you modernize your operations, improve efficiency, and transform your organization into an integrated digital environment using the latest AI technologies",
    explor: "explor solution",
    arrow: FaCircleArrowRight,
    url: "/solution-channel/services/Digital",
  },
  {
    icon: FaImage,
    heading: "Customer Experience Consultancy",
    paragraph:
      "We design innovative strategies to enhance customer experience and increase satisfaction using AI solutions.",
    explor: "explor solution",
    arrow: FaCircleArrowRight,
    url: "/solution-channel/services/Customer",
  },
  {
    icon: FaImage,
    heading: "Agent Offshoring Services",
    paragraph:
      "Increase efficiency and reduce costs by providing agent offshoring services powered by AI technologies",
    explor: "explor solution",
    arrow: FaCircleArrowRight,
    url: "/solution-channel/services/Agent",
  },
];

const ServicesPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Imagehead
        image={image3}
        title="Integrated AI Services Solutions for Your Business"
        paragraph="  We offer a comprehensive range of professional services and digital transformation solutionsto enhance your business using advanced
            artificial intelligence technologies"
      />
      <div className="md:-mt-16  "></div>
      <SecoundConvContent
        theheader=" Unique Advantages That Make Our Service Your Optimal Choice"
        dispachitems={dispachitems}
      />

      <SecoundConvFooter
        title="  Get started with our Solutions for free"
        secondTitle=" Join now and unlock impactful solutions designed to drive your
              success."
        button="Start for Free"
        secondButton=" Explore our solutions"
        image={image3}
      />
    </Layout>
  );
};
export default ServicesPage;

export const Head: HeadFC = () => <title>Services-solution</title>;
