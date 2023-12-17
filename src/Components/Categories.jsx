import React from 'react'
import { categories } from '../constants/constants'

const Categories = () => {
  return (
    <div className='w-full py-8 flex flex-col items-center md:flex-row sm:flex-row'>
      <div className='flex flex-col items-center gap-4'>
        <p className='font-inter uppercase font-bold text-red-500'>Customer Favourites</p>
        <h1 className='font-inter font-bold text-4xl'>Popular Categories</h1>
      </div>
      <div className='flex'>
          {
            categories.map((category, index)=>{
              <FeatureCard key={category.id} image={category.image} title={category.title} content={category.content} />
            })
          }
      </div>
    </div>
  )
}

const FeatureCard = ({image, title, content}) =>(
  <div className='flex items-center flex-col'>
    <div data-aos='zoom-in-up' className='p-4 w-[70px] mb-6 h-[70px] rounded-full whychoseuscard flex items-center justify-center'>
      <img src={image} />
    </div>
    <div className='flex flex-col items-center'>
      <h1 data-aos='fade-left' className='font-inter font-semibold text-white text-2xl'>{title}</h1>
      <p data-aos='fade-right' className='font-inter text-center text-sm text-gray-500'>{content}</p>
    </div>
  </div>
)

export default Categories