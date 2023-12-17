import React from 'react'
import { FaPlayCircle } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { HeroImage } from '../assets'

const Hero = () => {
  return (
    <div className='w-full py-8 flex flex-col items-center md:flex-row-reverse z-0 sm:flex-row'>
      <div className='flex flex-1 w-full md:w-[50%]'>
        <img src={HeroImage} />
      </div>
      <div className='flex flex-col w-full md:w-[50%] items-center my-8 md:items-start'>
        <h2 className="text-5xl text-center md:text-left font-afacad font-bold leading-tight text-gray-900 dark:text-white">
          Sushi Bliss, Every Roll a Flavorful <span className='text-primary'>Kiss</span>
        </h2>
        <p className='font-inter text-lg mt-6 leading-[32px] text-gray md:text-left text-center'>
          Masters of Maki: Elevate Your Taste Buds with Our Sushi Creations, Where Tradition Meets Innovation!
        </p>
        <div className='flex w-full md:gap-8 flex-col md:flex-row'>
          <button className='font-afacad flex bg-primary items-center justify-center gap-6 text-white my-6 font-bold text-xl shadow-lg w-full py-3 rounded-full'>
             Order Now
            {/* <FaRegCirclePlay /> */}
          </button>
          {/* <button className='font-afacad text-white mt-6 font-bold text-xl bg-primary w-full py-3 rounded-full'>Order Now</button> */}
          <button className='font-afacad flex items-center justify-center gap-6 text-black my-6 font-bold text-xl bg-white shadow-lg w-full py-3 rounded-full'>
            Watch Video
            <FaRegCirclePlay />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero