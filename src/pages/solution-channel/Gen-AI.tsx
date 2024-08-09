import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../styles/global.css";
import Layout from "../../component/layout/layout";

import GenaiDispatch from "../../component/solutionpage/Gen/GenaiDispatch";
import Genaiexperience from "../../component/solutionpage/Gen/Genaiexperience";
import Genaiheader from "../../component/solutionpage/Gen/Genaiheader";
import Genaifooter from "../../component/solutionpage/Gen/Genaifooter";

const GenPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Genaiheader />
      <GenaiDispatch />
      <Genaiexperience />
      <Genaifooter />
    </Layout>
  );
};

export default GenPage;

export const Head: HeadFC = () => <title>Gen-Page</title>;
