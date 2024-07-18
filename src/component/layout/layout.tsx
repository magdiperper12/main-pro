import { getLowResolutionImageURL } from "gatsby-plugin-image";
import React, { ReactNode, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../../styles/global.css";
import Header from "./header";
import Footer from "./footer";
// import React from "react";

interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [direction, setDirection] = useState("ltr");
  useEffect(() => {
    setDirection(localStorage.getItem("direction") || "ltr");
  }, []);
  const toggleDirection = () => {
    const newDir = direction === "ltr" ? "rtl" : "ltr";
    setDirection(newDir);
    localStorage.setItem("direction", newDir);
  };

  return (
    <div dir={direction} id='root' className='min-h-screen bg-white font-cairo'>
      <Helmet defer={false}>
        <link
          rel='icon'
          type='image/svg+xml'
          href='https://botbat.blr1.digitaloceanspaces.com/botbat.logo.io.svg'
        />
      </Helmet>
      <Header direction={direction} toggleDirection={toggleDirection} />

      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
