import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/global.css";
import Layout from "../component/layout/layout";
import Header from "../component/solutionPage/header";
import Footer from "../component/solutionPage/footer";
import Solutioncontent from "../component/solutionPage/solution-content";

const PolutionPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Header />
      <Solutioncontent />
      <Footer />
    </Layout>
  );
};

export default PolutionPage;

export const Head: HeadFC = () => <title>Polution Page</title>;
