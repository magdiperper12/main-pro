import { getLowResolutionImageURL } from "gatsby-plugin-image";
import React, { ReactNode, useState } from "react";
import { Helmet } from "react-helmet";
import "../styles/global.css";
import Header from "./header";
// import React from "react";


interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {

  const [direction, setDirection] = useState("ltr");

  const toggleDirection = () => {
    setDirection(direction === "ltr" ? "rtl" : "ltr");
  };

  return (
    <div id="root" className="min-h-screen bg-gray-100" >
      <Helmet defer={false}>
        <link rel="icon" type="image/svg+xml" href="https://botbat.blr1.digitaloceanspaces.com/botbat.logo.io.svg" />
      </Helmet>
      <Header direction={direction} toggleDirection={toggleDirection} />

      <main>{children}</main>
      <footer className="bg-white shadow mt-6 py-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-gray-500">© 2024 My Site. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
};

export default Layout;
