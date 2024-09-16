import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../../styles/global.css";
import Layout from "../../../component/layout/layout";
import { FaImage } from "react-icons/fa6";
import image1 from "../../../images/header.jpg";
import image2 from "../../../images/campaign.webp";
import image3 from "../../../images/customer_support.webp";
import image4 from "../../../images/robotic.webp";
import ChannelHeader from "../../../component/channel/channel-header";
import SecoundDispatch from "../../../component/channel/secound-dispach";
import Channelfooter from "../../../component/channel/channel-footer";
import Experience from "../../../component/channel/experience";
import ChannelFooter from "../../../component/channel/channel-footer";

const dispachitems = [
  {
    icon: FaImage,
    heading: "Customized Reminders and Notifications",
    paragraph:
      "Automate appointment reminders and check-ups to ensure a seamless and continuous care experience",
  },
  {
    icon: FaImage,
    heading: "Targeted Proactive Notifications",
    paragraph:
      "Keep patients constantly informed about test results, doctor's instructions, and medication updates to ensure effective engagement",
  },
  {
    icon: FaImage,
    heading: "Continuous Digital Support",
    paragraph:
      "Provide instant support across patients' preferred channels, available 24/7 through a dedicated virtual assistant",
  },
  {
    icon: FaImage,
    heading: "Communication Management",
    paragraph:
      "One platform that enables you to easily manage all patient communication methods, from text messages to voice and video calls and chat",
  },
];
const experianceitems = [
  {
    heading: "Automating Personalized Messages to Enhance Communication",
    text: "Utilize Botbat solutions to set up customized messages that reach patients at the right time across multiple channels",
    image: image1,
    list: [
      "    Automated reminders for appointments and check-ups",
      "    Customizing messages based on each patient’s needs",
      "   Ensure security and privacy for all communications",
    ],
  },
  {
    heading: "Proactive Notifications and Alerts",
    text: "Keep patients constantly informed about updates to their health status, new medications, and medical results",
    image: image2,
    list: [
      "   Instant notifications about health status updates",
      "    Create proactive notifications for test results",
      "   Real-time updates on doctor availability and appointments",
    ],
  },
  {
    heading: "Providing Continuous Support Around the Clock",
    text: "Offer continuous support to patients through a virtual assistant that reduces staff workload and improves patient experience",
    image: image1,
    list: [
      "   Create a comprehensive knowledge base for common questions",
      "  Provide guidance on medications and treatment",
      "   Transfer conversations to live agents when necessary",
    ],
  },
  {
    heading: "Managing a Cloud-Based Contact Center",
    text: "Build advanced contact centers that facilitate immediate communication with patients through multiple platforms, ensuring customized and effective support",
    image: image3,
    list: [
      "   Enable support via text messages, voice, and video",
      "    Data integration to ensure a seamless experience",
      "  Provide direct payment options",
    ],
  },
];

const HealthcarePage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <ChannelHeader
        title=' Expanding Patient Communication with Integrated Digital Solutions'
        paragraph='Enhance the healthcare experience by leveraging automated multi-channel communication solutions to deliver a fast and convenient patient experience'
        image={image1}
        sbtn=' Get a Free Demo'
        fbtn='Contact an Expert'
      />
      <SecoundDispatch
        theheader='Improving Healthcare Communication with a Comprehensive Unified Platform'
        thescoundheader=' Deliver an integrated digital healthcare experience based on multi-channel communication, ensuring increased operational efficiency and cost reduction while boosting patient satisfaction'
        dispachitems={dispachitems}
      />
      <Experience experianceitems={experianceitems} />
      <ChannelFooter
        title=' Expand Your Patient Communication with Integrated Solutions'
        secoundTitle='Rely on our integrated solutions to improve your communication with patients across multiple channels'
        button='Start for free'
        secoundButton='see price'
      />
    </Layout>
  );
};
export default HealthcarePage;

export const Head: HeadFC = () => <title>Industries-Healthcare</title>;
