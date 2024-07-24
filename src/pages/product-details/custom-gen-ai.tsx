import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../styles/global.css";
import Layout from "../../component/layout/layout";

import CustomHeader from "../../component/productpages/custom/customheader";
import Customfooter from "../../component/productpages/custom/customfooter";
import CustomIntelegent from "../../component/productpages/custom/customIntelegent";
const Custom: React.FC<PageProps> = () => {
  return (
    <Layout>
      <CustomHeader />
      <CustomIntelegent />
      <Customfooter />
    </Layout>
  );
};

export default Custom;

export const Head: HeadFC = () => <title>Custom Page</title>;
