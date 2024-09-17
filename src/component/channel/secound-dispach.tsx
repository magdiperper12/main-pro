import React from "react";

interface FeatureItem {
  heading: string;
  paragraph: string;
  icon: React.ElementType; // Enforce React component type
}

interface DispatchProps {
  theheader: string;
  thescoundheader: string;
  dispachitems: FeatureItem[];
}

const SecoundDispatch: React.FC<DispatchProps> = ({
  theheader,
  thescoundheader,
  dispachitems,
}) => {
  return (
    <div>
      <section className="my-10 md:my-16">
        <div className="container mx-auto px-0 lg:px-4 md:px-4 sm:px-0">
          <div className="text-center pb-16">
            <h1 className="text-xl md:text-3xl lg:text-5xl font-extrabold mt-5 leading-tight w-3/4 md:w-3/4  m-auto">
              {theheader}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mt-5 flex w-3/4 m-auto">
              {thescoundheader}
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5 mx-2  lg:mx-0 items-start ~w-11/12 m-auto ">
            {dispachitems.map((item, index) => (
              <div
                key={index}
                className="text-center flex justify-start items-center flex-col mx-2 md:mx-0  bg-blue-50 shadow-md shadow-blue-100 ~px-3/60 py-3 min-h-60 lg:min-h-80 md:min-h-72 rounded-xl hover:rotate-3 hover:shadow-blue-200 hover:shadow-xl duration-300"
              >
                <item.icon className="text-4xl md:text-5xl lg:text-6xl text-blue-600  mx-auto mb-3 mt-3 lg:mt-0 lg:my-5  hover:scale-105 duration-300 hover:drop-shadow-lg " />
                <p className="text-xl md:text-2xl font-bold text-gray-800 mb-3 lg:mb-2">
                  {item.heading}
                </p>
                <p className="text-lg md:text-md lg:text-lg text-gray-600">
                  {item.paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecoundDispatch;
