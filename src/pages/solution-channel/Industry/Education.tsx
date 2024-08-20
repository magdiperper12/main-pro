import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../../styles/global.css";
import Layout from "../../../component/layout/layout";
import { FaImage } from "react-icons/fa6";
import image1 from "../../../images/header.jpg";
import image2 from "../../../images/campaign.webp";
import image3 from "../../../images/customer_support.webp";
import image4 from "../../../images/robotic.webp";
import ChannelHeader from "../../../component/channel/channelheader";
import SecoundDispatch from "../../../component/channel/secounddispach";
import Channelfooter from "../../../component/channel/channelfooter";
import Experience from "../../../component/channel/experience";

const dispachitems = [
  {
    icon: FaImage,
    heading: "Comprehensive Enrollment Management",
    paragraph:
      "Simplify student registration and efficiently collect required data using Botbat's advanced systems",
  },
  {
    icon: FaImage,
    heading: "Intelligent Academic Support",
    paragraph:
      "Provide instant responses to academic queries and offer customized educational resources to enhance the learning experience",
  },
  {
    icon: FaImage,
    heading: "Student Activities Management",
    paragraph:
      "Organize and manage student activities and events with automatic reminders and information updates",
  },
  {
    icon: FaImage,
    heading: "Management, Monitoring, Evaluation",
    paragraph:
      "Track lecture schedules, manage online exams, and provide instant assessments to improve the learning experience",
  },
];
const experianceitems = [
  {
    heading: "Registration and System Setup with Botbat",
    text: "Start by easily registering your institution using Botbat's system, tailored to meet your educational needs",
    image: image1,
    list: [
      "    Create an institutional account with Botbat",
      "    Customize settings according to your institution's needs",
      "     Input basic data for students and teachers into the Botbat system",
    ],
  },
  {
    heading: "Activating Educational Modules with Botbat",
    text: "Choose and flexibly activate suitable Botbat modules to meet your educational institution's needs",
    image: image2,
    list: [
      "   Activate registration and admission management",
      "      Enable the intelligent academic support system",
      "    Manage academic schedules and activities using Botbat",
    ],
  },
  {
    heading: "Training Staff and Engaging Students with Botbat",
    text: "Ensure maximum benefit from the Botbat system by training staff and engaging students",
    image: image4,
    list: [
      "    Train administrators and teachers on using the Botbat system",
      "   Guide students in using educational platforms",
      "    Activate the parent communication system",
    ],
  },
  {
    heading: "Continuous Monitoring and Improvement with Botbat",
    text: "Utilize Botbat’s continuous analytics to improve performance and enhance the system over time",
    image: image3,
    list: [
      "   Analyze student performance and generate detailed reports",
      "   Collect and analyze student and staff satisfaction data",
      "    Update the system based on feedback",
    ],
  },
];

const Educationpage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <ChannelHeader
        title=' Smart Educational Solutions from Botbat for a Better Future'
        paragraph='Botbat offers innovative educational solutions powered by artificial intelligence to enhance learning experiences and boost administrative efficiency for educational institutions'
        image={image1}
        sbtn=' Get a Free Demo'
        fbtn='Contact an Expert'
      />
      <SecoundDispatch
        theheader="Discover How Botbat's Smart Solutions Improve Educational Processes and Streamline Academic Administration"
        thescoundheader="Features that make Botbat's educational solutions the best choice for achieving your educational goals"
        dispachitems={dispachitems}
      />
      <Experience experianceitems={experianceitems} />
      <Channelfooter
        title='Elevate Your Educational Institution Today with Botbat'
        secoundTitle=" Join leading educational institutions that utilize Botbat's smart solutions to enhance academic and administrative efficiency"
        button='Start for free'
        secoundButton='see price'
      />
    </Layout>
  );
};
export default Educationpage;

export const Head: HeadFC = () => <title>Industries-Education</title>;
