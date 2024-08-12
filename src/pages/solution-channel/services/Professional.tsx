import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../../styles/global.css";
import Layout from "../../../component/layout/layout";
import Professionalheader from "../../../component/Servics-pages/Professional/Professionalheader";
import ProfessionalDispatch from "../../../component/Servics-pages/Professional/ProfessionalDispatch";
import Professionalexperience from "../../../component/Servics-pages/Professional/Professionalexperience";
import Professionalfooter from "../../../component/Servics-pages/Professional/Professionalfooter";

const Professionalpage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Professionalheader />
      <ProfessionalDispatch />
      <Professionalexperience />
      <Professionalfooter />
    </Layout>
  );
};

export default Professionalpage;

export const Head: HeadFC = () => <title>Professionalpage</title>;
