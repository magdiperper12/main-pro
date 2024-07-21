import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../styles/global.css";
import Layout from "../../component/layout/layout";
import Emailheader from "../../component/productpages/a-emailPage/emailheader";
import EmailDispatch from "../../component/productpages/a-emailPage/emailDispatch";
import Emailexperience from "../../component/productpages/a-emailPage/emailexperience";
import Emailfooter from "../../component/productpages/a-emailPage/emailfooter";

const EmailPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Emailheader />
      <EmailDispatch />
      <Emailexperience />
      <Emailfooter />
    </Layout>
  );
};

export default EmailPage;

export const Head: HeadFC = () => <title>Email-Page</title>;
