import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../../styles/global.css";
import Layout from "../../../component/layout/layout";
import EducationDispatch from "../../../component/Industry-page/Education/EducationDispatch";
import Educationexperience from "../../../component/Industry-page/Education/Educationexperience";
import Educationfooter from "../../../component/Industry-page/Education/Educationfooter";
import Educationheader from "../../../component/Industry-page/Education/Educationheader";

const Educationpage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Educationheader />
      <EducationDispatch />
      <Educationexperience />
      <Educationfooter />
    </Layout>
  );
};

export default Educationpage;

export const Head: HeadFC = () => <title>Educationpage</title>;
