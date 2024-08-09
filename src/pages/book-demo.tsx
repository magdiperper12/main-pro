import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/global.css";
import Layout from "../component/layout/layout";
import Bookademo from "../component/book-demo/bookademo";

const ProductsPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Bookademo />
    </Layout>
  );
};

export default ProductsPage;

export const Head: HeadFC = () => <title>Product Page</title>;
