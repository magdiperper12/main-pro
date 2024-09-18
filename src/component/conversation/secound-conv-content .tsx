import { Link } from "gatsby";
import React from "react";

interface FeatureItem {
  icon: React.ElementType; // Use React.ElementType to type the icon component
  heading: string;
  paragraph: string;
  url: string;
  explor: string;
  arrow: React.ElementType;
}
interface DispatchProps {
  theheader: string;
  dispachitems: FeatureItem[];
}

const SecoundConvContent: React.FC<DispatchProps> = ({
  theheader,
  dispachitems,
}) => {
  return (
    <div className="my-10 md:my-16">
      <section className="  ">
        <div className="container mx-auto  px-0 lg:px-4 md:px-4 sm:px-0">
          <div className="text-center pb-7 md:pb-16 lg:pb-20">
            <h1 className="text-xl md:text-3xl lg:text-5xl font-extrabold mt-5 leading-tight w-11/12 md:w-9/12 lg:w-3/4 md:w-3/4 lg:w-2/4 m-auto">
              {theheader}
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6 lg:gap-10 items-start w-11/12 m-auto">
            {dispachitems.map((item, index) => (
              <div
                key={index}
                className="hover:shadow-lg duration-200  text-center bg-zinc-100  p-2 rounded-lg min-h-96 mx-1 md:mx-0"
              >
                <item.icon className="text-5xl md:text-5xl lg:text-8xl text-blue-600  mx-auto my-8  hover:scale-105 duration-300 hover:drop-shadow-lg" />
                <h2 className="text-2xl font-bold text-gray-800 py-2 text-start border-t-2 border-zinc-200 px-3 hover:text-blue-800">
                  {item.heading}
                </h2>
                <p className="text-lg text-gray-600 text-start px-3 pb-3">
                  {item.paragraph}
                </p>
                <div>
                  <Link
                    to={item.url}
                    className="text-lg text-start px-3 pb-3 flex gap-3 items-center  "
                  >
                    <span className=" underline text-blue-500  hover:text-blue-800 cursor-pointer">
                      {item.explor}
                    </span>
                    <item.arrow className="  rtl:rotate-180 text-blue-500  hover:text-blue-800 cursor-pointer" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecoundConvContent;
