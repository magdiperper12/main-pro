import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../../styles/global.css";
import Layout from "../../../component/layout/layout";
import Customerheader from "../../../component/Servics-pages/Customer/Customerheader";
import CustomerDispatch from "../../../component/Servics-pages/Customer/CustomerDispatch";
import Customerexperience from "../../../component/Servics-pages/Customer/Customerexperience";
import Customerfooter from "../../../component/Servics-pages/Customer/Customerfooter";

const Customerpage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Customerheader />
      <CustomerDispatch />
      <Customerexperience />
      <Customerfooter />
    </Layout>
  );
};

export default Customerpage;

export const Head: HeadFC = () => <title>Customerpage</title>;
