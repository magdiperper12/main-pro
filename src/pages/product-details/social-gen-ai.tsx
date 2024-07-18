import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../styles/global.css";
import Layout from "../../component/layout/layout";
import ResourcesHeader from "../../component/productpages/resources/resourcesheader";
import ResourcesCustomer from "../../component/productpages/resources/resourcescustom";
import ResourceInhance from "../../component/productpages/resources/resourcesinhanc";

const Social: React.FC<PageProps> = () => {
  return (
    <Layout>
      <ResourcesHeader />
      <ResourcesCustomer />
      <ResourceInhance />
    </Layout>
  );
};

export default Social;

export const Head: HeadFC = () => <title>Social Page</title>;
