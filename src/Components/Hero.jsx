import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaRegCirclePlay } from "react-icons/fa6";
import { HeroImage } from '../assets'

const Hero = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <div className='w-full py-8 flex flex-col items-center md:flex-row-reverse z-50 sm:flex-row'>
      <div data-aos='fade-down' className='flex flex-1 w-full md:w-[50%]'>
        <img src={HeroImage} />
      </div>
      <div className='flex flex-col w-full md:w-[50%] items-center my-8 md:items-start'>
        <h2 data-aos='fade-up' className="text-5xl text-center md:text-left font-afacad font-bold leading-tight text-gray-900 dark:text-white">
          Sushi Bliss, Every Roll a Flavorful <span className='text-primary'>Kiss</span>
        </h2>
        <p data-aos='fade-left' className='font-inter text-lg mt-6 leading-[32px] text-gray md:text-left text-center'>
          Masters of Maki: Elevate Your Taste Buds with Our Sushi Creations, Where Tradition Meets Innovation!
        </p>
        <div className='flex w-full md:gap-8 flex-col md:flex-row'>
          <button data-aos='fade-right' className='font-afacad flex bg-primary items-center justify-center gap-6 text-white my-6 font-bold text-xl shadow-lg w-full py-3 rounded-full'>
             Order Now
            {/* <FaRegCirclePlay /> */}
          </button>
          {/* <button className='font-afacad text-white mt-6 font-bold text-xl bg-primary w-full py-3 rounded-full'>Order Now</button> */}
          <button data-aos='fade-left' className='font-afacad flex items-center justify-center gap-6 text-black my-6 font-bold text-xl bg-white shadow-lg w-full py-3 rounded-full'>
            Watch Video
            <FaRegCirclePlay />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero