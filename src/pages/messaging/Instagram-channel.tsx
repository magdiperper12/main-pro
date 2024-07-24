import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../styles/global.css";
import Layout from "../../component/layout/layout";

import Instagramheader from "../../component/productpages/a-Instagrampage/Instagramheader";
import Instagramfooter from "../../component/productpages/a-Instagrampage/Instagramfooter";
import Instagramexperience from "../../component/productpages/a-Instagrampage/Instagramexperience";
import InstagramDispatch from "../../component/productpages/a-Instagrampage/InstagramDispatch";

const Instegrampage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Instagramheader />
      <InstagramDispatch />
      <Instagramexperience />
      <Instagramfooter />
    </Layout>
  );
};

export default Instegrampage;

export const Head: HeadFC = () => <title>Instegram-Page</title>;
