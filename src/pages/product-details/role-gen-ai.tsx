import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../../styles/global.css";
import Layout from "../../component/layout/layout";
import PriceHeader from "../../component/productpages/pricing/Priceheader";
import EnhancePrice from "../../component/productpages/pricing/enhanceprice";
import Pricingfoot from "../../component/productpages/pricing/pricingfoot";

const Role: React.FC<PageProps> = () => {
  return (
    <Layout>
      <PriceHeader />
      <EnhancePrice />
      <Pricingfoot />
    </Layout>
  );
};

export default Role;

export const Head: HeadFC = () => <title>Role Page</title>;
