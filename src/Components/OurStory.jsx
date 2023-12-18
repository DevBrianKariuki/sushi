import React, { useEffect } from 'react'
import { services } from '../constants/constants'
import AOS from 'aos'
import 'aos/dist/aos.css'

const OurStory = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <div  className='w-full py-8 mt-12 flex flex-col md:flex-row items-center'>
      <div className='flex w-full gap-8 flex-col md:w-[50%] justify-between'>
        <div className='flex flex-col w-full md:items-start justify-center items-center gap-4'>
          <p data-aos="fade-up-right" className='font-inter uppercase font-bold text-red-500'>Our Story & Services</p>
          <h1 data-aos="fade-up-left" className='font-inter font-bold md:text-left text-center text-4xl'>Our Culinary Journey<br className='hidden md:flex' /> And Services</h1>
        </div>
        <div className='flex flex-col'>
          <p data-aos="fade-left" className='font-inter md:w-[80%] md:text-left text-lg text-center font-medium text-neutral-500'>
          Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.
          </p>
          <button data-aos="fade-up-left" className='py-4 md:w-[30%] px-8 text-xl text-white my-5 font-afacad font-bold bg-primary rounded-full'>Explore</button>
        </div>
        
      </div>

      <div className='grid md:grid-cols-2 gap-8  my-5 md:w-[50%] w-full mx-auto'>
          {services.map((service) => (
            <ServiceCard key={service.id} title={service.title} description={service.description} image={service.image} />
          ))}
      </div>
      

    </div>
  )
}

const ServiceCard = ({image, title, description}) => (
  <div data-aos="flip-left" className="bg-white py-8 flex items-center flex-col rounded-2xl shadow-xl overflow-hidden">
    <img src={image} className='object-contain w-[40px]' />
    <h1 className='font-inter uppercase text-lg text-primary font-bold py-3'>{title}</h1>
    <p className='font-inter w-[70%] md:text-sm font-medium text-neutral-400 text-center'>{description}</p>
  </div>
)

export default OurStory