import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../../styles/global.css";
import Layout from "../../../component/layout/layout";
import GovernmentDispatch from "../../../component/Industry-page/Government/GovernmentDispatch";
import Governmentexperience from "../../../component/Industry-page/Government/Governmentexperience";
import Governmentfooter from "../../../component/Industry-page/Government/Governmentfooter";
import Governmentheader from "../../../component/Industry-page/Government/Governmentheader";

const Governmentpage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Governmentheader />
      <GovernmentDispatch />
      <Governmentexperience />
      <Governmentfooter />
    </Layout>
  );
};

export default Governmentpage;

export const Head: HeadFC = () => <title>Governmentpage</title>;
