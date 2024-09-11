import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/global.css";
import Layout from "../component/layout/layout";
import Features from "../component/home/features";
import SubFeatures from "../component/home/sub-features";
import Channels from "../component/home/channels";
import CallToSubscribe from "../component/home/call-to-subscribe";
import Carousel from "../component/home/main-carousel";
import MainFeatures from "../component/home/main-features";
import Testimonial from "../component/home/testomonial";
import Journey from "../component/home/journey";
import News from "../component/support/news";
import image3 from "../images/doctor2.jpg";
const newsitem = [
  {
    header: "Automate your communication workload with Botbat",
    text: "Build Event Driven Flows and Bots to automate your communication workload. Connect your apps and services with Botbat and automate your communication workload.",
    buttonText: "Click One",
    image: image3,
    url: "/#",
  },
  {
    header: "Automate your communication workload with Botbat",
    text: "Build Event Driven Flows and Bots to automate your communication workload. Connect your apps and services with Botbat and automate your communication workload.",
    buttonText: "Click One",
    image: image3,
    url: "/#",
  },
  {
    header: "Automate your communication workload with Botbat",
    text: "Build Event Driven Flows and Bots to automate your communication workload. Connect your apps and services with Botbat and automate your communication workload.",
    buttonText: "Click One",
    image: image3,
    url: "/#",
  },
];
const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Carousel />
      <MainFeatures />
      <Features />
      <Journey />
      <SubFeatures />
      <Channels />
      <Testimonial />
      <News
        feature={" News and Articles"}
        theheader={"See what's new with Botbat"}
        paragraph={
          "  Stay up to date with the latest news and articles from Botbat."
        }
        newsitem={newsitem}
      />
      <CallToSubscribe />
     
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
