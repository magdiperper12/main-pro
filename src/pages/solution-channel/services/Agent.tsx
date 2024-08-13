import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../../styles/global.css";
import Layout from "../../../component/layout/layout";
import Agenteheader from "../../../component/Servics-pages/Agent/Agenteheader";
import AgentDispatch from "../../../component/Servics-pages/Agent/AgentDispatch";
import Agentexperience from "../../../component/Servics-pages/Agent/Agentexperience";
import Agentfooter from "../../../component/Servics-pages/Agent/Agentfooter";


const Agentpage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Agenteheader />
      <AgentDispatch />
      <Agentexperience />
      <Agentfooter />
    </Layout>
  );
};

export default Agentpage;

export const Head: HeadFC = () => <title>Agentpage</title>;
