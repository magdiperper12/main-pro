import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../../styles/global.css";
import Layout from "../../../component/layout/layout";
import Digitalheader from "../../../component/Servics-pages/Digital/Digitalheader";
import DigitalDispatch from "../../../component/Servics-pages/Digital/DigitalDispatch";
import Digitalexperience from "../../../component/Servics-pages/Digital/Digitalexperience";
import Digitalexpfooter from "../../../component/Servics-pages/Digital/Digitalexpfooter";

const Digitalpage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Digitalheader />
      <DigitalDispatch />
      <Digitalexperience />
      <Digitalexpfooter />
    </Layout>
  );
};

export default Digitalpage;

export const Head: HeadFC = () => <title>Digitalpage</title>;
