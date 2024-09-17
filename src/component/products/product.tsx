import React from "react";

import image1 from "../../images/campaign.webp";

function Product() {
  return (
    <div>
      <div className="mt-8 md:mt-10 lg:mt-16 ">
        <div className="text-center my-4 md:my-12">
          <h1 className="text-xl md:text-3xl lg:text-5xl font-extrabold mt-5 leading-tight">
            Botbat Products
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mt-5 flex w-3/4 lg:w-2/3 m-auto">
            Discover a suite of smart tools to enhance your messaging expriance
            and enagge with customers effectively
          </p>
        </div>
      </div>
      <div className="w-full  h-auto ~mb-10  overflow-hidden ">
        <img src={image1} alt="" className="w-3/4 m-auto bg-cover " />
      </div>
    </div>
  );
}

export default Product;
