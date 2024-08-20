import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/global.css";
import Layout from "../component/layout/layout";
import { FaImage } from "react-icons/fa";
import image3 from "../images/customer_support.webp";
import { FaCircleArrowRight } from "react-icons/fa6";
import Imagehead from "../component/conversation/imagehead";
import Secoundconvcontent from "../component/conversation/SecoundConvcontent ";
import SecoundConvfooter from "../component/conversation/SecoundConvFooter";

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
    heading: "Conversational Solutions",
    paragraph:
      "Transform customer interactions with AI-powered technologies, delivering personalized, seamless, and impactful experiences across every touchpoint.",
    explor: "explor solution",
    arrow: FaCircleArrowRight,
    url: "/solution-channel/Conversational-Solutions",
  },
  {
    icon: FaImage,
    heading: "Gen AI Applications",
    paragraph:
      "Unlock the power of Gen AI Applications: Predict trends, optimize operations, and deliver personalized customer experiences that drive productivity.",
    explor: "explor solution",
    arrow: FaCircleArrowRight,
    url: "/solution-channel/Gen-AI",
  },
  {
    icon: FaImage,
    heading: "Services",
    paragraph:
      "Tailored solutions through Professional Services, Digital Transformation, CX Consultancy, and Agent Offshoring to elevate your business.",
    explor: "explor solution",
    arrow: FaCircleArrowRight,
    url: "/solution-channel/Services",
  },
  {
    icon: FaImage,
    heading: "Industries",
    paragraph:
      "Achieve unparalleled outcomes with customized solutions that deliver measurable results in healthcare, retail, and more.",
    explor: "explor solution",
    arrow: FaCircleArrowRight,
    url: "/solution-channel/Industries",
  },
];

const PolutionPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Imagehead
        image={image3}
        title=' Innovative Solutions for Every Need'
        paragraph='  Explore the solutions we offer to enhance your business'
      />
      <Secoundconvcontent
        theheader=' Unique Advantages That Make Our Service Your Optimal Choice'
        dispachitems={dispachitems}
      />

      <SecoundConvfooter
        title='   Get started with our Solutions for free'
        secondTitle='   Join now and unlock impactful solutions designed to drive your
              success.'
        button='Start for Free'
        secondButton=' Explore our solutions'
        image={image3}
      />
    </Layout>
  );
};
export default PolutionPage;

export const Head: HeadFC = () => <title>Solution </title>;
