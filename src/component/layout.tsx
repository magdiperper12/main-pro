import { getLowResolutionImageURL } from "gatsby-plugin-image";
import React, { ReactNode } from "react";
import { Helmet } from "react-helmet";
import "../styles/global.css";


interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div>
    <Helmet defer={false}>
      <link
        rel='stylesheet'
        href='https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css'
        integrity='sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l'
      />
    </Helmet>
    {children}
    
  </div>
);

export default Layout;
