import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../styles/global.css";
import Layout from "../../component/layout/layout";
import NavigatorHeader from "../../component/productpages/navigator/navigatorheader";
import NavigationDev from "../../component/productpages/navigator/navegation";
import Navigatorfoot from "../../component/productpages/navigator/navigatorfoot";
const Navigator: React.FC<PageProps> = () => {
  return (
    <Layout>
      <NavigatorHeader />
      <NavigationDev />
      <Navigatorfoot />
    </Layout>
  );
};

export default Navigator;

export const Head: HeadFC = () => <title>Navigator Page</title>;
