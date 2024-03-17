

import React, { useState,useEffect } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';



export default function Hero() {
    const imgdata = [
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg',
          },
          {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg',
          },
          {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg',
          },
    ];
    const [slider, setSlider]=useState(0);
    const handlePlus = () =>{
       setSlider(slider === imgdata.length-1? 0:slider+1)
    };
    
    const handleMinus = () =>{
        setSlider(slider === 0?imgdata.length-1:slider-1)
    
    }
    useEffect(()=>{
        const sliderClear = setInterval(()=>{
            handlePlus();
        },2000)
        return()=>clearInterval(sliderClear);
    },[slider]);
    
  return (
    <>
    <div className='mt-[100px]'>
      <div className='w-[90%] mx-auto h-[80vh] my-5 relative'>
          {
            imgdata.map((item,i)=>(
              <div key={i} className={`${slider === i ? "block":"hidden"}`}>
               <img src={item.url} alt="" className='w-full h-[80vh] rounded-2xl object-cover'/>
               </div>
            ))
          }
      <div className='w-full mx-auto h-[80vh] bg-black opacity-50 absolute top-0 left-0 rounded-2xl'></div>
      <div className='absolute w-full text-[20px] md:text-[30px]  top-[50%] text-center font-semibold text-white'>
          <p>Welcome to the World of Testy & Fresh Food </p>
      </div>
      <div className='flex justify-between w-full  sm:px-5 absolute top-[50%] text-white'>
            <FaAngleLeft size={35} className="cursor-pointer"  onClick={handleMinus}/>
            <FaAngleRight size={35} className="cursor-pointer" onClick={handlePlus}/>
    </div>
    </div>
  </div>

  </>
  )
}
