import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../styles/global.css";
import Layout from "../../component/layout/layout";
import Socialfooter from "../../component/productpages/social/socialfooter";
import Socialheader from "../../component/productpages/social/socialheader";
import SocialCustomer from "../../component/productpages/social/social";

const Social: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Socialheader />
      <SocialCustomer />
      <Socialfooter />
    </Layout>
  );
};

export default Social;

export const Head: HeadFC = () => <title>Social Page</title>;
