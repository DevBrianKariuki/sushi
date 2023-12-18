import React, { useEffect } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { logo } from '../assets'
import { FooterLinks } from '../constants/constants'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])


  return (
    <div className='w-full py-8 mt-12 flex flex-col items-center'>
      <div className='flex w-full  gap-8 flex-col md:flex-row justify-between'>
        <div data-aos="fade-up-right" className='flex md:w-[25%] flex-col gap-6 items-start'>
          <img src={logo} className='w-[60]' />
          <p className='font-inter text-lg text-neutral-500 leading-[30px] font-medium'>Savor the artistry where every dish is a culinary masterpiece</p>
          <div className='flex hidden sm:flex gap-3'>
            <div className='p-3 flex items-center justify-center rounded-full bg-neutral-200'>
              <FaFacebook  fontSize={24} className='text-neutral-700'/>
            </div>
            <div className='p-3 flex items-center justify-center rounded-full bg-neutral-200'>
              <FaTwitter  fontSize={24} className='text-neutral-700'/>
            </div>
            <div className='p-3 flex items-center justify-center rounded-full bg-neutral-200'>
              <FaInstagram  fontSize={24} className='text-neutral-700'/>
            </div>
            <div className='p-3 flex items-center justify-center rounded-full bg-neutral-200'>
              <FaYoutube  fontSize={24} className='text-neutral-700 '/>
            </div>
          </div>
        </div>
        <div data-aos="fade-up-left" className='flex flex-col w-full md:justify-evenly md:w-[75%] md:flex-row justify-between'>
          {FooterLinks.map((footerlink) =>(
            <div className='flex my-5 md:ml-20 w-full flex-col'>
              <h1 className='font-inter font-bold text-xl'>{footerlink.title}</h1>
              <ul className='list-none flex flex-col'>
                {footerlink.links.map((link) => (
                  <li className='font-inter text-lg py-2 text-neutral-600'>{link.link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='flex items-center flex-col justify-center gap-8  my-5 w-full mx-auto'>
          <p className='font-inter text-neutral-500'>Copyright 2023 Dscode | All rights reserved</p>
          <div className='flex sm:hidden gap-3'>
            <div className='p-3 flex items-center justify-center rounded-full bg-neutral-200'>
              <FaFacebook  fontSize={24} className='text-neutral-700'/>
            </div>
            <div className='p-3 flex items-center justify-center rounded-full bg-neutral-200'>
              <FaTwitter  fontSize={24} className='text-neutral-700'/>
            </div>
            <div className='p-3 flex items-center justify-center rounded-full bg-neutral-200'>
              <FaInstagram  fontSize={24} className='text-neutral-700'/>
            </div>
            <div className='p-3 flex items-center justify-center rounded-full bg-neutral-200'>
              <FaYoutube  fontSize={24} className='text-neutral-700 '/>
            </div>
          </div>
      </div>
      

    </div>
  )
}

export default Footer