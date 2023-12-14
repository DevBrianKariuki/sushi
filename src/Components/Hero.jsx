import React from 'react'
import { HeroImage } from '../assets'

const Hero = () => {
  return (
    <div className='w-full py-8 flex flex-col z-0 sm:flex-row'>
      <div className='flex flex-1'>
        <img src={HeroImage} />
      </div>
      <div className='flex flex-col items-center my-8 md:items-start'>
        <h2 className="text-5xl text-center font-afacad font-bold leading-tight text-gray-900 dark:text-white">
          Sushi Bliss, Every Roll a Flavorful <span className='text-primary'>Kiss</span>
        </h2>
        <p className='font-inter text-lg mt-6 text-gray text-center'>Masters of Maki: Elevate Your Taste Buds with Our Sushi Creations, Where Tradition Meets Innovation!</p>
      </div>
    </div>
  )
}

export default Hero