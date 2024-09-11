import React from "react";

interface FeatureItem {
  icon: React.ElementType | string;
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

const ThirdConvContent: React.FC<DispatchProps> = ({
  theheader,
  dispachitems,
}) => {
  return (
    <div className='my-10 md:my-16'>
      <section className='flex justify-center'>
        <div className='container mx-auto px-0 lg:px-4 md:px-4 sm:px-0'>
          <div className='text-center pb-20'>
            <h1 className='text-xl md:text-3xl lg:text-5xl font-extrabold mt-5 leading-tight w-3/4 md:w-3/4 lg:w-2/4 m-auto'>
              {theheader}
            </h1>
          </div>
          <div
            className={`flex flex-col lg:flex-row md:flex-row flex-wrap gap-10 items-center w-full m-auto justify-center`}
          >
            {dispachitems.map((item, index) => {
              const Icon = item.icon;
              const Arrow = item.arrow;
              return (
                <div
                  key={index}
                  className='hover:shadow-lg duration-200 text-center bg-zinc-100 p-2 rounded-lg min-h-80 max-w-sm'
                >
                  {typeof Icon === "string" ? (
                    <img
                      src={Icon}
                      className='w-1/4 h-1/4 text-blue-600 mx-auto my-5 hover:scale-105 duration-300 hover:drop-shadow-lg'
                    />
                  ) : (
                    <Icon className='text-5xl md:text-5xl lg:text-8xl text-blue-600 mx-auto my-8 hover:scale-105 duration-300 hover:drop-shadow-lg' />
                  )}

                  <h2 className='text-2xl font-bold text-gray-800 py-3 text-start border-t-2 border-zinc-200 px-3 hover:text-blue-800'>
                    {item.heading}
                  </h2>
                  <p className='text-lg text-gray-600 text-start px-3 pb-5'>
                    {item.paragraph}
                  </p>
                  <div>
                    <a
                      href={item.url}
                      className='text-lg text-start px-3 pb-5 flex gap-3 items-center'
                    >
                      <span className='underline text-blue-500 hover:text-blue-800 cursor-pointer'>
                        {item.explor}
                      </span>
                      <Arrow className='rtl:rotate-180 text-blue-500 hover:text-blue-800 cursor-pointer' />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThirdConvContent;
