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
    <div className='my-16 md:my-28'>
      <div className='text-center  w-full'>
        <p className='text-lg md:text-xl lg:text-2xl font-extrabold'>
          {feature}
        </p>
        <h1 className='text-3xl md:text-3xl lg:text-4xl font-extrabold mt-5 leading-tight'>
          {theheader}
        </h1>
        <p className='text-sm md:text-lg lg:text-xl  mt-5 leading-tight'>
          {paragraph}
        </p>
      </div>
      <div className='carousel-item'>
        <div className='container mx-auto px-5 py-2 lg:px-32 lg:pt-2'>
          <div className='flex flex-wrap -m-2 '>
            {newsitem.map((item, index) => (
              <div
                key={index}
                className='w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-5 my-2'
              >
                <img
                  alt='gallery'
                  className='block h-1/2 w-full rounded-lg object-cover object-center my-5'
                  src={item.image}
                />
                <h1 className='text-start text-xl lg:text-2xl font-bold py-4  text-nowrap'>
                  {item.header}
                </h1>
                <p className=' text-start py-2  text-md lg:text-lg'>
                  {item.text}
                </p>
                <a
                  className='text-md lg:text-lg text-blue-600 text-start py-2 hover:underline'
                  href={item.url}
                >
                  Read more {` >`}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='text-center  md:mt-2 w-full'>
        <button className='text-xl text-start py-1  rounded-md px-5 m-auto border-blue-600 border text-blue-800 hover:text-blue-50 hover:bg-blue-600'>
          View all
        </button>
      </div>
    </div>
  );
};

export default News;
