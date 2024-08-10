import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/global.css";
import Layout from "../component/layout/layout";
import Header from "../component/solution/header";
import Solutioncontent from "../component/solution/solution-content";
import Footer from "../component/solution/footer";

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
