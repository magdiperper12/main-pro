import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../styles/global.css";
import Layout from "../../component/layout/layout";
import DevelopHeader from "../../component/productpages/developer/developheader";
import NavigationDev from "../../component/productpages/developer/navegation";
import Empoered from "../../component/productpages/developer/empowerdev";
const Navigator: React.FC<PageProps> = () => {
  return (
    <Layout>
      <DevelopHeader />
      <NavigationDev />
      <Empoered />
    </Layout>
  );
};

export default Navigator;

export const Head: HeadFC = () => <title>Navigator Page</title>;
