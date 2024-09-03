import React from "react";

interface FeatureItem {
  heading: string;
  paragraph: string;
}

interface DispatchProps {
  theheader: string;
  thescoundheader: string;
  dispachitems: FeatureItem[];
}

const Dispatch: React.FC<DispatchProps> = ({
  theheader,
  thescoundheader,
  dispachitems,
}) => {
  return (
    <div className='mb-10 md:mb-16 md:-mt-28'>
      <section>
        <div className='container mx-auto px-0 lg:px-4 md:px-4 sm:px-0'>
          <div className='text-center pb-20'>
            <h1 className='text-xl md:text-3xl lg:text-5xl font-extrabold mt-5 leading-tight w-3/4 md:w-3/4 lg:w-2/4 m-auto'>
              {theheader}
            </h1>
            <p className='text-lg md:text-xl lg:text-2xl mt-5 flex w-3/4 m-auto'>
              {thescoundheader}
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10 items-start w-11/12 m-auto'>
            {dispachitems.map((item, index) => (
              <div
                key={index}
                className='text-center bg-blue-50 shadow-md shadow-blue-100 p-10 h-72 rounded-xl hover:rotate-3 hover:shadow-blue-200 hover:shadow-xl duration-300'
              >
                <p className='text-3xl font-bold text-gray-800 mb-4'>
                  {item.heading}
                </p>
                <p className='text-lg text-gray-600'>{item.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dispatch;
