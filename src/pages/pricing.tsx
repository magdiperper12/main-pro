import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/global.css";
import Layout from "../component/layout/layout";
import Frequently from "../component/pricing-folder/frequently";
import Affordable from "../component/pricing-folder/affordable";

const PricingPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Affordable />
      <Frequently />
    </Layout>
  );
};

export default PricingPage;

export const Head: HeadFC = () => <title>pricing </title>;
