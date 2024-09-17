import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../styles/global.css";
import Layout from "../../component/layout/layout";

import Convcontent from "../../component/conversation/conv-content";
import image3 from "../../images/customer_support.webp";
import { FaImage } from "react-icons/fa";
import Convheader from "../../component/conversation/conv-header";
import Convfooter from "../../component/conversation/conv-footer";
import ConvFooter from "../../component/conversation/conv-footer";
import ConvContent from "../../component/conversation/conv-content";
import ConvHeader from "../../component/conversation/conv-header";

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
const Navigator: React.FC<PageProps> = () => {
  return (
    <Layout>
      <ConvHeader
        image={image3}
        title=" Gen Al Website Navigator"
        paragraph="   Our intelligent tool helps you navigate your websites easily and
              efficiently, making the user experience smoother and more
              satisfying."
        btn="Get a Free Demo"
      />
      <div className="flex  items-center md:-mt-36 lg:-mt-44  m-auto  md:mb-32 lg:mb-28 w-full md:w-2/3 lg:w-2/4 h-auto bg-zinc-100 rounded-xl ">
        <img src={image3} alt="" />
      </div>
      <ConvContent
        theheader="  Seamless navigation and enhanced experience with Gen Al Website
            Navigator"
        thescoundheader="  Analyze and guide your website visitors effectively with Gen AI
            Website Navigator, helping them find what they are looking for
            quickly and easily. This improves the user experience, increases
            visitor satisfaction, and extends their time spent on your site."
        dispachitems={dispachitems}
      />

      <ConvFooter
        title="    Empower Your Business with Gen AI Website Navigator"
        secondTitle="  Leverage our advanced AI tool to gain valuable insights and make
              informed decisions, enhancing both user experience and business
              performance."
        button="Start for Free"
        secondButton="See Price"
      />
    </Layout>
  );
};

export default Navigator;

export const Head: HeadFC = () => <title>navigator-gen-ai</title>;
