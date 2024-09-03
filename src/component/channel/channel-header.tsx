import React from "react";

interface Channelheaderprops {
  title: string;
  paragraph: string;
  image: string;
  fbtn: string;
  sbtn: string;
}

const ChannelHeader: React.FC<Channelheaderprops> = ({
  title,
  paragraph,
  image,
  fbtn,
  sbtn,
}) => {
  return (
    <div className='min-h-screen'>
      <div className='flex item-center w-full  lg:px-12 py-2 md:pt-12 flex-wrap mx-auto '>
        <div className='flex w-full sm:w-full md:w-1/2 lg:w-1/2 order-1 md:order-2 rtl:order-1 '>
          <div className='w-full p-2 md:p-4'>
            <h1 className='text-xl md:text-3xl lg:text-5xl font-bold mt-10 '>{title}</h1>
            <p className='text-lg md:text-xl mt-6'>{paragraph}</p>
            <div className='mt-8 md:mt-10 flex flex-col md:flex-row justify-start gap-5'>
              <button className='bg-blue-700 hover:bg-blue-800 text-white rounded-md px-4 py-3 md:px-6 md:py-4 w-full lg:w-auto md:w-auto transition duration-300 ease-in-out'>
                {fbtn}
              </button>
              <button className='bg-white hover:bg-blue-50 text-blue-900 border border-blue-600 rounded-md px-4 py-3 md:px-6 md:py-4 w-full lg:w-auto md:w-auto transition duration-300 ease-in-out'>
                {sbtn}
              </button>
            </div>
          </div>
        </div>
        <div className='flex w-full sm:w-full md:w-1/2 lg:w-1/2 order-1 md:order-2 rtl:order-1 '>
          <div className='w-full p-2 md:p-4'>
            <img src={image} alt='' className='w-full h-96 md:h-96 lg:h-96' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelHeader;
