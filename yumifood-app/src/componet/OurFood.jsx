import React from 'react'
import {mealData } from '../Data/data'

const OurFood = ({handleAdd}) => {
  return (
    <>
    <div className='w-[90%] mx-auto mt-[100px] mt-[100px]'>
        <div>
            <h2 className='text-center text-[#fbc531] text-3xl font-bold py-5'>Our Food</h2>
        </div>

        <div className=' grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 py-6 gap-2'>
            {mealData.map((meal) => (
              <div className='flex justify-center flex-col items-center'>
                <div>
                <img src={meal.image} alt="" className='w-[200px] h-[200px] rounded-lg object-cover'/>
                </div>
                <div className='flex justify-center py-2 px-4 flex-col items-center'>
                    <p>{meal.name}</p>
                    <p>{meal.price}</p>
                    <button className='bg-black w-[90px] text-white rounded-md my-6 py-[10px] text-[13px] hover:text-[#fbc531] font-semibold' onClick={handleAdd}>Add to Cart</button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default OurFood
