import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../styles/global.css";
import Layout from "../../component/layout/layout";
import IndustriesDispatch from "../../component/solutionpage/industries/IndustriesDispatch";
import Industriesfooter from "../../component/solutionpage/industries/Industriesfooter";
import Industriesheader from "../../component/solutionpage/industries/Industriesheader";
const IndustriesPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Industriesheader />
      <IndustriesDispatch />
      <Industriesfooter />
    </Layout>
  );
};

export default IndustriesPage;

export const Head: HeadFC = () => <title>Industries-Page</title>;
