import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../styles/global.css";
import Layout from "../../component/layout/layout";
import ConversationalDispatch from "../../component/solutionpage/conversational/conversationalDispatch";
import Conversationalfooter from "../../component/solutionpage/conversational/Conversationalfooter";
import Conversationalexperience from "../../component/solutionpage/conversational/Conversationalexperience";
import Conversationalheader from "../../component/solutionpage/conversational/Conversationalheader";

const ConversationPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Conversationalheader />
      <ConversationalDispatch />
      <Conversationalexperience />
      <Conversationalfooter />
    </Layout>
  );
};

export default ConversationPage;

export const Head: HeadFC = () => <title>Conversation-Page</title>;
