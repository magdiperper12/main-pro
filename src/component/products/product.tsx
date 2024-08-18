import React from 'react'

import image1 from "../../images/doctor2.jpg";

function Product() {
  return (
    
    <div>
    <div className='mt-24 md:mt-32 lg:mt-40 '>
       <div className='text-center my-4 md:my-12'>
       
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold mt-5 leading-tight'>
       Botbat Products
        </h1>
        <p className='text-lg md:text-xl lg:text-2xl mt-5 flex w-3/4 m-auto'>
       Discover a suite of smart tools to enhance your messaging expriance and enagge with customers effectively
        </p>
      </div>
    </div>
    <div className='w-full h-80 mb-24 overflow-hidden'>
        <img src={image1} alt="" className='w-3/4 m-auto bg-cover'/>
    </div>
    </div>
  )
}

export default Product
