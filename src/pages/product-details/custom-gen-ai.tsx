import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../styles/global.css";
import Layout from "../../component/layout/layout";
import SolutionHeader from "../../component/productpages/solutions/solutionHeader";
import Intelligent from "../../component/productpages/solutions/intelligent";
import Buildingsolution from "../../component/productpages/solutions/buildingsolution";
const Custom: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SolutionHeader />
      <Intelligent />
      <Buildingsolution />
    </Layout>
  );
};

export default Custom;

export const Head: HeadFC = () => <title>Custom Page</title>;
