import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../../styles/global.css";
import Layout from "../../../component/layout/layout";
import HealthcareDispatch from "../../../component/Industry-page/Healthcare/HealthcareDispatch";
import Healthcareexperience from "../../../component/Industry-page/Healthcare/Healthcareexperience";
import Healthcarefooter from "../../../component/Industry-page/Healthcare/Healthcarefooter";
import Healthcareheader from "../../../component/Industry-page/Healthcare/Healthcareheader";

const Healthcarepage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Healthcareheader />
      <HealthcareDispatch />
      <Healthcareexperience />
      <Healthcarefooter />
    </Layout>
  );
};

export default Healthcarepage;

export const Head: HeadFC = () => <title>Healthcarepage</title>;
