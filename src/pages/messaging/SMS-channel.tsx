import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../styles/global.css";
import Layout from "../../component/layout/layout";
import Smsheader from "../../component/productpages/a-sms/smsheader";
import Smsexperience from "../../component/productpages/a-sms/smsexperience";
import Smsfooter from "../../component/productpages/a-sms/smsfooter";
import SmsDispatch from "../../component/productpages/a-sms/smsDispatch";

const SmsPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Smsheader />
      <SmsDispatch />
      <Smsexperience />
      <Smsfooter />
    </Layout>
  );
};

export default SmsPage;
