import React, {useEffect} from 'react'
import { Chef, person1, person2, person3 } from '../assets'
import { FaStar } from "react-icons/fa";
import AOS from 'aos'
import 'aos/dist/aos.css'

const Testimonials = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <div className='w-full py-8 mt-12 flex flex-col md:flex-row-reverse items-center'>
      <div className='flex w-full gap-8 flex-col md:w-[50%] justify-between'>
        <div className='flex flex-col w-full md:items-start justify-center items-center gap-4'>
          <p data-aos="fade-down-left" className='font-inter uppercase font-bold text-red-500'>Testimonials</p>
          <h1 data-aos="fade-down-right" className='font-inter font-bold md:text-left text-center text-4xl'>What our Customers Say About Us</h1>
        </div>
        <div className='flex flex-col'>
          <p data-aos="fade-left" className='font-inter md:text-left text-center font-medium text-neutral-500'>
            “I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”
          </p>
          <div className='flex items-center my-10 justify-between'>
            <div class="flex -space-x-4 rtl:space-x-reverse">
                <img data-aos="flip-left" class="w-11 h-11 border-2 object-cover border-white rounded-full dark:border-gray-800" src={person1} alt=""/>
                <img data-aos="flip-right" class="w-11 h-11 border-2 object-cover border-white rounded-full dark:border-gray-800" src={person2} alt=""/>
                <img data-aos="flip-left" class="w-11 h-11 border-2 object-cover border-white rounded-full dark:border-gray-800" src={person3} alt=""/>
                <img data-aos="flip-right" class="w-11 h-11 border-2 object-cover border-white rounded-full dark:border-gray-800" src={person2} alt=""/>
                <img data-aos="flip-left" class="w-11 h-11 border-2 object-cover border-white rounded-full dark:border-gray-800" src={person1} alt=""/>
            </div>
            <div className='flex flex-col items-start'>
              <p data-aos="fade-right" className='font-inter font-bold text-lg'>Customer Feedback</p>
              <div data-aos="fade-left" className='font-inter flex items-center gap-3 text-neutral-500 text-md'>
                <div className='flex items-center gap-1 font-bold'><FaStar className='text-primary' /> 4.9</div>
                (18.6k Reviews)
              </div>
            </div>
          </div>
        </div>
        
      </div>

      <div data-aos="fade-right" className='flex md:w-[50%] w-full mx-auto'>
          <img src={Chef} className='object-contain' />
      </div>
      

    </div>
  )
}

export default Testimonials