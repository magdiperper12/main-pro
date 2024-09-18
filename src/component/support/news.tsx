import { Link } from "gatsby";
import React from "react";

interface FeatureItem {
  image: string;
  header: string;
  text: string;
  url: string;
}
interface DispatchProps {
  feature: string;
  theheader: string;
  paragraph: string;
  newsitem: FeatureItem[];
}

const News: React.FC<DispatchProps> = ({
  feature,
  theheader,
  paragraph,
  newsitem,
}) => {
  return (
    <div className="my-12 md:my-16">
      <div className="text-center  w-full">
        <p className="text-sm md:text-md font-extrabold">{feature}</p>
        <h1 className="text-2xl md:text-3xl  font-extrabold mt-5 leading-tight">
          {theheader}
        </h1>
        <p className="text-sm md:text-lg lg:text-xl mt-2  mx-3  md:mt-5 leading-tight">
          {paragraph}
        </p>
      </div>
      <div className="carousel-item">
        <div className="container mx-auto px-5  lg:px-24 lg:pt-4">
          <div className="flex flex-wrap -m-2 ">
            {newsitem.map((item, index) => (
              <div
                key={index}
                className="w-full  md:w-1/3 lg:w-1/3 p-2 lg:p-5 mt-1"
              >
                <img
                  alt="gallery"
                  className="block h-7/12 w-full rounded-lg object-cover object-center my-5"
                  src={item.image}
                />
                <div className="ps-2">
                  <h1 className="text-start text-xl lg:text-2xl font-bold py-1 text-wrap">
                    {item.header}
                  </h1>
                  <p className=" text-start py-1  text-md lg:text-lg">
                    {item.text}
                  </p>
                  <Link
                    className="text-md lg:text-lg text-blue-600 text-start py-2 hover:underline"
                    to={item.url}
                  >
                    Read more {` >`}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center  w-full pt-2 md:pt-4">
        <button className="text-lg lg:xl text-start   rounded-md px-8 m-auto border-blue-600 border text-blue-800 hover:text-blue-50 hover:bg-blue-600">
          View all
        </button>
      </div>
    </div>
  );
};

export default News;
