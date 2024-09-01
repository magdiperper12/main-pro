import React from "react";

interface FeatureItem {
  icon: React.ElementType | string; // Can be a React component or a string URL for an image
  heading: string;
  paragraph: string;
  url: string;
  explor: string;
  arrow: React.ElementType; // React component for an arrow icon
}

interface DispatchProps {
  theheader: string;
  latestitems: FeatureItem[];
}

const Latest: React.FC<DispatchProps> = ({ theheader, latestitems }) => {
  return (
    <section className='sm:my-10 md:my-16 pb-10'>
      <div className='container mx-auto px-0 lg:px-4 md:px-4 sm:px-0'>
        <div className='text-center pb-10'>
          <h1 className='text-xl md:text-xl lg:text-2xl font-extrabold mt-5 leading-tight w-3/4 md:w-3/4 lg:w-2/4 m-auto'>
            {theheader}
          </h1>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-16 items-start w-10/12 md:w-9/12 m-auto'>
          {latestitems.map((item, index) => {
            const Icon = item.icon; // Dynamically determine the type of the icon
            const Arrow = item.arrow;

            return (
              <div
                key={index}
                className='hover:shadow-lg duration-200 text-center bg-zinc-100 p-2 rounded-lg '
              >
                {typeof Icon === "string" ? (
                  <img
                    src={Icon}
                    className='w-2/12 h-2/12 text-blue-600 mx-auto my-3 hover:scale-105 duration-300 hover:drop-shadow-lg'
                  />
                ) : (
                  <Icon className='text-5xl md:text-5xl lg:text-8xl text-blue-600 mx-auto my-8 hover:scale-105 duration-300 hover:drop-shadow-lg' />
                )}
                <div className='min-h-52'>
                  <h2 className='text-2xl font-bold text-gray-800 py-2 text-center border-t-2 border-zinc-200 px-3 hover:text-blue-800'>
                    {item.heading}
                  </h2>
                  <p className='text-lg text-gray-600 text-center px-3 pb-3'>
                    {item.paragraph}
                  </p>
                  <div className=' w-full '>
                    <a
                      href={item.url}
                      className='text-lg px-3 pb-3 flex gap-3 justify-center w-full items-center m-auto'
                    >
                      <span className='underline text-blue-500 hover:text-blue-800 cursor-pointer'>
                        {item.explor}
                      </span>
                      <Arrow className='rtl:rotate-180 text-blue-500 hover:text-blue-800 cursor-pointer' />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Latest;
