import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../styles/global.css";
import Layout from "../../component/layout/layout";
import ChannelHeader from "../../component/channel/channel-header";
import Dispatch from "../../component/channel/dispach";

import image1 from "../../images/header.jpg";
import image2 from "../../images/campaign.webp";
import image3 from "../../images/customer_support.webp";
import image4 from "../../images/robotic.webp";

import Experience from "../../component/channel/experience";
import ChannelFooter from "../../component/channel/channel-footer";

const dispachitems = [
  {
    heading: "Integration",
    paragraph:
      "Pick your preferred method - SMTP or HTTP API for dispatching transactional and promotional messages",
  },
  {
    heading: "Transmit",
    paragraph:
      "Transmit all email types from plain text to rich content using HTML or AMP components",
  },
  {
    heading: "Analyze",
    paragraph:
      "Monitor delivery performance by inspecting reports and diagnosing problems using informative panels",
  },
  {
    heading: "Enhance",
    paragraph:
      "Enhance deliverability using authentication protocols, dedicated IP, warm-up, and email validation",
  },
];

const experianceitems = [
  {
    heading: "Design customized and compelling email messages",
    text: "Seamlessly construct your new campaigns witha feature-packed drag-and-drop tool",
    image: image1,
    list: [
      "  Ready-made, dynamic, and responsive components",
      "   Template library for common scenarios",
      "  Streamlined import of your HTML designs",
      "  Customization featuresBuilt-in safeguards againstjunk mail classification",
    ],
  },
  {
    heading: "Enhancing Email Deliverability",
    text: "Advanced tools to boost email delivery rates and ensure inbox placement",
    image: image2,
    list: [
      "  Authentication Protocols",
      "  Dedicated IP Address",
      "   IP Warm-up",
      "  Email Validation",
    ],
  },
  {
    heading: "Elevate your email experience using dynamic AMP components",
    text: "Create and send captivating messages with AMP's interactive features through API",
    image: image3,
    list: [
      "  Dynamic product showcase with interactive carousel",
      "  In-email subscription confirmation",
      "  ollapsible FAQ section in email using accordion",
      "  Implement custom interactive elements",
    ],
  },
  {
    heading: "Gather data, extract insights and implement strategies",
    text: "Extract data from email analytics, scrutinize reports for delivery issues, grasp message flow, and track every interaction",
    image: image4,
    list: [
      "   Delivery success rate",
      "  Email open frequency",
      "  Click-through count",
      "  Subscription cancellations",
      "  Delivery failures",
    ],
  },
];

const EmailPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <ChannelHeader
        title=" Integrate Email API for dependable high-volume message delivery"
        paragraph="Designed for optimal delivery rates, speed, and throughput via SMTP or HTTP API, regardless of volume or location"
        image={image1}
        sbtn=" Get a Free Demo"
        fbtn="Contact an Expert"
      />
      <div className="mt-0 md:mt-36"></div>
      <Dispatch
        theheader="  Dispatch operational emails and promotional campaigns via a solid platform"
        thescoundheader="   Robust Platform for Operational Emails and Marketing Campaigns: Easily Connect to Our API and Swiftly Deliver Massive Email Volumes in Minutes"
        dispachitems={dispachitems}
      />
      <Experience experianceitems={experianceitems} />
      <ChannelFooter
        title="  Boost Your Email Capabilities with a Reliable API"
        secoundTitle="Optimized Performance, Seamless Scaling, and Comprehensive
              Management for All Your Needs"
        button="Start for free"
        secoundButton="see price"
      />
    </Layout>
  );
};

export default EmailPage;

export const Head: HeadFC = () => <title>Email-channel</title>;
