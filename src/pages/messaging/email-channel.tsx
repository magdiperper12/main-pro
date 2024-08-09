import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../styles/global.css";
import Layout from "../../component/layout/layout";
import EmailDispatch from "../../component/productpages/a-email/EmailDispatch";
import Emailefooter from "../../component/productpages/a-email/Emailefooter";
import Emailexperience from "../../component/productpages/a-email/Emailexperience";
import Emailheader from "../../component/productpages/a-email/Emailheader";

const EmailPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Emailheader />
      <EmailDispatch />
      <Emailexperience />
      <Emailefooter />
    </Layout>
  );
};

export default EmailPage;

export const Head: HeadFC = () => <title>Email-Page</title>;
