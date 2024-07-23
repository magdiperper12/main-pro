import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../styles/global.css";
import Layout from "../../component/layout/layout";
import Telegramheader from "../../component/productpages/a-telegram/telegramheader";
import Telegramexperience from "../../component/productpages/a-telegram/telegramexperience";
import Telegramfooter from "../../component/productpages/a-telegram/telegramfooter";
import TelegramDispatch from "../../component/productpages/a-telegram/telegramDispatch";

const WhatsappPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Telegramheader />
      <TelegramDispatch />
      <Telegramexperience />
      <Telegramfooter />
    </Layout>
  );
};

export default WhatsappPage;
