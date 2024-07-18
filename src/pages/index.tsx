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
import News from "../component/home/news";
import Journey from "../component/home/journey";

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
      <News />
      <CallToSubscribe />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
