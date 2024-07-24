import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../styles/global.css";
import Layout from "../../component/layout/layout";
import Whatsappheader from "../../component/productpages/a-whatsapppage/whatsappheader";
import WhatsappDispatch from "../../component/productpages/a-whatsapppage/whatsappDispatch";
import Whatsappexperience from "../../component/productpages/a-whatsapppage/whatsappexperience";
import Whatsappfooter from "../../component/productpages/a-whatsapppage/whatsappfooter";
const WhatsappPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Whatsappheader />
      <WhatsappDispatch />
      <Whatsappexperience />
      <Whatsappfooter />
    </Layout>
  );
};

export default WhatsappPage;
