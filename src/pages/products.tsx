import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/global.css";
import Layout from "../component/layout/layout";
import Product from "../component/products/product";
import Convertional from "../component/products/convertional";
import Massaging from "../component/products/massaging";
import Building from "../component/products/building";


const ProductsPage: React.FC<PageProps> = () => {
  return (
    <Layout>
       <Product />
       <Convertional />
       <Massaging />
       <Building />
    </Layout>
  );
};

export default ProductsPage;

export const Head: HeadFC = () => <title>Product Page</title>;