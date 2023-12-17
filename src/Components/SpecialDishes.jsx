import React from 'react'
import { IoIosArrowBack, IoIosArrowForward, IoLogoLinkedin } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { dishes } from '../constants/constants';

const SpecialDishes = () => {
  return (
    <div className='w-full py-8 mt-12 flex flex-col items-center'>
      <div className='flex w-full flex-col md:flex-row justify-between'>
        <div className='flex flex-col w-full md:items-start justify-center items-center gap-4'>
          <p className='font-inter uppercase font-bold text-red-500'>Special Dishes</p>
          <h1 className='font-inter font-bold md:text-left text-center text-4xl'>Best Dishes from<br className='hidden sm:flex' /> Our Menu</h1>
        </div>
        <div className='flex hidden sm:flex flex-row w-full justify-end items-center gap-4'>
          <button className='p-4 hover:bg-primary hover:text-white bg-neutral-300 rounded-full'>
            <IoIosArrowBack fontSize={24} />
          </button>
          <button className='p-4 bg-primary rounded-full'>
            <IoIosArrowForward className='text-white' fontSize={24} />
          </button>
        </div>
      </div>

      <div className='flex mt-5 flex-col w-full gap-8 md:flex-row'>
        {dishes.map((dish) =>(
          <DishCard image={dish.image}  title={dish.title} description={dish.description} price={dish.price} rating={dish.rating}/>
        ))}
      </div>

    </div>
  )
}

const DishCard = ({ image, title, description, price, rating }) => (
  <div className="relative rounded-2xl w-full shadow-lg px-6 py-6">
    <button className='rounded-tr-2xl rounded-bl-2xl right-0 top-0 hover:bg-white hover:text-primary absolute flex items-center justify-center h-[50px] w-[50px] bg-primary'>
      <CiHeart className='text-white hover:text-primary' fontSize={28} />
    </button>
    <div>
      <img src={image} alt="" className="rounded-tl-xl object-contain h-48 w-full" />
    </div>
    <div className='flex flex-col gap-2 mb-8 items-center'>
      <p className='font-inter font-bold md:text-xl text-2xl'>{title}</p>
      <p className='font-inter text-neutral-500'>{description}</p>
    </div>
    <div className='flex justify-between items-center'>
      <p className='font-inter text-xl font-bold'><span className='text-red-500'>Ksh</span> {price}</p>
      <p className='font-inter text-lg text-neutral-700 font-medium flex items-center gap-2'> <FaStar className='text-primary' />  {rating}</p>
    </div>
  </div>
)

export default SpecialDishes