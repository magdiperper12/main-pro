import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../component/header";
import { useState } from "react";
import "../styles/global.css";
import Layout from "../component/layout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <p>sds</p>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
