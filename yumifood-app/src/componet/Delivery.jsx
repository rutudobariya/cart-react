import React from 'react';
import delivery_image from '../assets/delivery_image.webp';

const Delivery = () => {
  return (
    <div className='w-full py-16  px-4'>
      <h3 className='text-[#fbc531] font-bold text-2xl text-center'>Quick Delivery App</h3>
      <div className='grid grid-cols-2  w-[70%] md:w-[80%] mx-auto my-10 gap-10'>
        <img src={delivery_image} alt="Delivery" className='w-[550px]   ' />
        <div  className='flex flex-col justify-center'>
        <p className='font-bold text-[green] text-[20px] md:text-[30px]'>Get The App </p>
        <h2 className='sm:text-2xl md:text-3xl lg:text-5xl py-2 font-bold'>The Fastest Food Delivery In India</h2>
        <button className='bg-black sm:w-[100px] md:w-[150px] text-white rounded-md my-6 py-[15px] sm:text-[10px] md:text-[20px] hover:text-[#fbc531] font-semibold'>Get Started</button>
      </div>
    </div>
    </div>
  );
};

export default Delivery;
