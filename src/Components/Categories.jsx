import React, { useEffect } from 'react'
import { categories } from '../constants/constants'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Categories = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <div  className='w-full py-8 flex flex-col items-center'>
      <div className='flex flex-col w-full justify-center items-center gap-4'>
        <p data-aos="fade-up-right" className='font-inter uppercase font-bold text-red-500'>Customer Favourites</p>
        <h1 data-aos="fade-up-left" className='font-inter font-bold text-4xl'>Popular Categories</h1>
      </div>

      <div className='flex flex-row w-full'>
        <ul className='list-none w-full items-center flex md:flex-row flex-col gap-3'>
            {categories.map((category, index) =>(
              <CategoryCard image={category.image} title={category.title} content={category.content} />
            ))}
        </ul>
      </div>

    </div>
  )
}

const CategoryCard = ({title, id, image, content}) => (
  <div data-aos="flip-left" className='w-full gap-5 flex mt-8 py-5 flex-col items-center justify-center shadow-xl bg-white rounded-2xl'>
    <div className='p-2 flex items-center justify-center h-[90px] w-[90px] rounded-full bg-primary'>
      <img src={image} className='w-[80px]' />
    </div>

    <div className='flex items-center gap-2 flex-col'>
      <p className='font-inter text-xl font-bold'>{title}</p>
      <p className='font-inter text-md text-gray'>{content}</p>
    </div>
    
  </div>
)


export default Categories