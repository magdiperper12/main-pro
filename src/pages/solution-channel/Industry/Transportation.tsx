import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../../styles/global.css";
import Layout from "../../../component/layout/layout";
import TransportationDispatch from "../../../component/Industry-page/Transportation/TransportationDispatch";
import Transportationexperience from "../../../component/Industry-page/Transportation/Transportationexperience";
import Transportationfooter from "../../../component/Industry-page/Transportation/Transportationfooter";
import Transportationheader from "../../../component/Industry-page/Transportation/Transportationheader";

const Transportationpage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Transportationheader />
      <TransportationDispatch />
      <Transportationexperience />
      <Transportationfooter />
    </Layout>
  );
};

export default Transportationpage;

export const Head: HeadFC = () => <title>Transportationpage</title>;
