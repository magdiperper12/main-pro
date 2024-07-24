import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../styles/global.css";
import Layout from "../../component/layout/layout";
import RolebasedHeader from "../../component/productpages/RoleBased/rolebasedHeader";
import Rolebasedfoot from "../../component/productpages/RoleBased/rolebasedfoot";
import Rolebased from "../../component/productpages/RoleBased/rolebased";

const Role: React.FC<PageProps> = () => {
  return (
    <Layout>
      <RolebasedHeader />
      <Rolebased />
      <Rolebasedfoot />
    </Layout>
  );
};

export default Role;

export const Head: HeadFC = () => <title>Role Page</title>;
