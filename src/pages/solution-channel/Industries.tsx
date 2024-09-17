import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../styles/global.css"; // Make sure global styles are correctly applied
import Layout from "../../component/layout/layout";
import { FaImage } from "react-icons/fa";
import image3 from "../../images/customer_support.webp";
import Imagehead from "../../component/conversation/image-head";
import { FaCircleArrowRight } from "react-icons/fa6";
import Secoundconvcontent from "../../component/conversation/secound-conv-content ";
import SecoundConvfooter from "../../component/conversation/secound-conv-footer";
import SecoundConvFooter from "../../component/conversation/secound-conv-footer";
import SecoundConvContent from "../../component/conversation/secound-conv-content ";

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
    heading: "Government Solutions",
    paragraph:
      "Implementing AI technologies enables governments to improve public services, increase transparency, and enhance administrative efficiency",
    explor: "explor solution",
    arrow: FaCircleArrowRight,
    url: "/solution-channel/Industry/Government",
  },
  {
    icon: FaImage,
    heading: "Healthcare Solutions",
    paragraph:
      "Our solutions support doctors and nurses in providing better care to enhance healthcare quality, manage health records, and improve patient experience",
    explor: "explor solution",
    arrow: FaCircleArrowRight,
    url: "/solution-channel/Industry/health-care",
  },
  {
    icon: FaImage,
    heading: "Education Solutions",
    paragraph:
      "Personalize learning experiences, improve educational outcomes, assess performance, and support students through intelligent performance analysis tools",
    explor: "explor solution",
    arrow: FaCircleArrowRight,
    url: "/solution-channel/Industry/Education",
  },
  {
    icon: FaImage,
    heading: "Transportation Solutions",
    paragraph:
      "Improve transportation operations and traffic management through smart solutions that reduce congestion, increase efficiency and safety, and enhance the mobility experience for everyone",
    explor: "explor solution",
    arrow: FaCircleArrowRight,
    url: "/solution-channel/Industry/Retail",
  },
  {
    icon: FaImage,
    heading: "Retail and E-commerce Solutions",
    paragraph:
      "Advanced consumer behavioral analytics and intelligent inventory management to increase sales and personalize the shopping experience for customers",
    explor: "explor solution",
    arrow: FaCircleArrowRight,
    url: "/solution-channel/Industry/Transportation",
  },
];

const IndustriesPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Imagehead
        image={image3}
        title=" Integrated and Intelligent Solutions for Various Business Sectors"
        paragraph="  Discover how to transform your business with our customized AI
            solutions designed to enhance efficiency and deliver exceptional
            results across diverse industrial sectors"
      />
      <div className="md:-mt-16  "></div>
      <SecoundConvContent
        theheader="Leverage advanced solutions tailored to each Industry, ensuring your
            excellence and leadership in your field"
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

export default IndustriesPage;

export const Head: HeadFC = () => <title>Industries-solution</title>;
