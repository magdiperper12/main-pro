import React from "react";

interface Channelheaderprops {
  title: string;
  paragraph: string;
  image: string;
}

const ImageHead: React.FC<Channelheaderprops> = ({
  title,
  paragraph,
  image,
}) => {
  return (
    <div>
      <div className='mt-7 md:mt-0 md:my-12'>
        <div className='text-center  md:mb-3 mb-2 md:mt-12 space-y-3'>
          <h1 className='text-xl md:text-3xl lg:text-5xl w-10/12 md:9/12 lg:w-7/12 m-auto font-extrabold mt-5 leading-tight'>
            {title}
          </h1>
          <p className='text-lg md:text-xl lg:text-2xl m-auto  w-10/12  md:9/12 lg:w-3/4'>
            {paragraph}
          </p>
        </div>
      </div>
      <div className='w-full h-auto mb-0 md:mb-32 overflow-hidden md:-mt-10 '>
        <img src={image} alt='' className=' w-full md:w-3/4 m-auto bg-cover ' />
      </div>
    </div>
  );
};

export default ImageHead;
