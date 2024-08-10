import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../styles/global.css";
import Layout from "../../component/layout/layout";
import Serviceexperience from "../../component/solutionpage/services/Serviceexperience";
import Servicefooter from "../../component/solutionpage/services/Servicefooter";
import Servicesheader from "../../component/solutionpage/services/Servicesheader";
import ServicesDispatch from "../../component/solutionpage/services/ServicesDispatch";

const ServicesPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Servicesheader />
      <ServicesDispatch />
      <Servicefooter />
    </Layout>
  );
};

export default ServicesPage;

export const Head: HeadFC = () => <title>Services-Page</title>;
