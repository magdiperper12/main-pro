import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../component/header";
import { useState } from "react";
import "../styles/global.css";

const IndexPage: React.FC<PageProps> = () => {
  const [direction, setDirection] = useState("ltr");

  const toggleDirection = () => {
    setDirection(direction === "ltr" ? "rtl" : "ltr");
  };
  return (
    <div>
      <Header direction={direction} toggleDirection={toggleDirection} />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
