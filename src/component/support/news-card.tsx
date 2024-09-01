import React from "react";

interface FeatureItem {
  image: string; // Use React.ElementType to type the icon component
  heading: string;
  paragraph: string;
  url: string;
  explor: string;
  arrow: React.ElementType;
}
interface DispatchProps {
  theheader: string;
  carditems: FeatureItem[];
}

const NewCard: React.FC<DispatchProps> = ({ theheader, carditems }) => {
  return (
    <section>
      <div className='container mx-auto  px-0 lg:px-4 md:px-4 sm:px-0'>
        <div className='text-center pb-20'>
          <h1 className='text-3xl md:text-3xl lg:text-4xl font-extrabold mt-5 leading-tight w-3/4 md:w-3/4 lg:w-2/4 m-auto'>
            {theheader}
          </h1>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-10  items-start w-11/12 m-auto'>
          {carditems.map((item, index) => (
            <div
              key={index}
              className='text-center bg-blue-50 rounded-lg min-h-96 mb-8 md:mt-20'
            >
              <img
                alt='gallery'
                className='block h-1/2 w-full rounded-lg object-cover object-center mb-5  '
                src={item.image}
              />
              <div className='block h-1/2 w-full px-4 bg-slate-100 shadow-md shadow-slate-300 '>
                <h2 className='text-2xl font-bold text-gray-800 py-2 my-2 text-start border-zinc-300  border-b-2  text-wrap'>
                  {item.heading}
                </h2>
                <p className='text-lg text-gray-600 text-start  pb-5'>
                  {item.paragraph}
                </p>
                <div>
                  <a
                    href={item.url}
                    className='text-lg text-start  pb-5 flex gap-3 items-center  '
                  >
                    <span className=' underline text-blue-500  hover:text-blue-800 cursor-pointer'>
                      {item.explor}
                    </span>
                    <item.arrow className='  rtl:rotate-180 text-blue-500  hover:text-blue-800 cursor-pointer' />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewCard;
