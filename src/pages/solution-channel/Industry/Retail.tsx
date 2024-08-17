import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../../styles/global.css";
import Layout from "../../../component/layout/layout";
import RetailDispatch from "../../../component/Industry-page/Retail/RetailDispatch";
import Retailexperience from "../../../component/Industry-page/Retail/Retailexperience";
import Retailfooter from "../../../component/Industry-page/Retail/Retailfooter";
import Retailheader from "../../../component/Industry-page/Retail/Retailheader";

const Retailpage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Retailheader />
      <RetailDispatch />
      <Retailexperience />
      <Retailfooter />
    </Layout>
  );
};

export default Retailpage;

export const Head: HeadFC = () => <title>Retailpage</title>;
