import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SpecialDishes = () => {
  return (
    <div className='w-full py-8 mt-12 flex flex-col items-center'>
      <div className='flex w-full flex-col md:flex-row justify-between'>
        <div className='flex flex-col w-full md:items-start justify-center items-center gap-4'>
          <p className='font-inter uppercase font-bold text-red-500'>Special Dishes</p>
          <h1 className='font-inter font-bold md:text-left text-center text-4xl'>Best Dishes from<br className='hidden sm:flex' /> Our Menu</h1>
        </div>
        <div className='flex hidden sm:flex flex-row w-full justify-end items-center gap-4'>
          <div className='p-4 bg-neutral-300 rounded-full'>
            <IoIosArrowBack fontSize={24} />
          </div>
          <div className='p-4 bg-primary rounded-full'>
            <IoIosArrowForward className='text-white' fontSize={24} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default SpecialDishes