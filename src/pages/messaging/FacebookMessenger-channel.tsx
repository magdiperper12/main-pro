import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../styles/global.css";
import Layout from "../../component/layout/layout";
import FacebookMessengerheader from "../../component/productpages/a-FacebookMessenger/FacebookMessengerheader";
import FacebookMessengerfooter from "../../component/productpages/a-FacebookMessenger/FacebookMessengerfooter";
import FacebookMessengerexperience from "../../component/productpages/a-FacebookMessenger/FacebookMessengerexperience";
import FacebookMessengerDispatch from "../../component/productpages/a-FacebookMessenger/FacebookMessengerDispatch";

const FacebookMessengerpage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <FacebookMessengerheader />
      <FacebookMessengerDispatch />
      <FacebookMessengerexperience />
      <FacebookMessengerfooter />
    </Layout>
  );
};

export default FacebookMessengerpage;
