import React, {useState, useEffect} from 'react'
import { IoCartOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { logo, menu, close } from '../assets'
import { Menu } from '../constants/constants';
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import AOS from 'aos'
import 'aos/dist/aos.css'

const Navbar = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  const [toggle, setToggle] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false)
  const [serviceMenuOpen, setServiceMenuOpen] = useState(false)
  const [cartAmount, setCartAmount] = useState(8);
  console.log(menuOpen)

  return (
    <div  className='w-full py-8 flex items-center'>
      {/* Desktop Menu */}
      <div className='flex w-full items-center justify-between sm:flex hidden'>
        <div data-aos="fade-right" className=''>
            <img src={logo} className='w-[90px]' />
        </div>

        <div data-aos="fade-down" className=''>
          <ul className='flex gap-6'>
            <li className='font-inter font-medium hover:text-primary hover:font-bold'>Home</li>
            <div className='relative' onClick={() => setMenuOpen(!menuOpen)}>
              <li  className='font-inter font-medium hover:text-primary flex gap-3 items-center hover:font-bold'>
                Menu
                {menuOpen === false ? < IoIosArrowDown className='text-primary' /> : < IoIosArrowUp className='text-primary' /> }
              </li>
            </div>
            <li className='font-inter font-medium hover:text-primary  hover:font-bold'>About Us </li>
            <div className='relative' onClick={() => setServiceMenuOpen(!serviceMenuOpen)}>
              <li  className='font-inter font-medium hover:text-primary flex gap-3 items-center hover:font-bold'>
                Services
                {serviceMenuOpen === false ? < IoIosArrowDown className='text-primary' /> : < IoIosArrowUp className='text-primary' /> }
              </li>
            </div>
            <li className='font-inter font-medium hover:text-primary  hover:font-bold'>Offers</li>
          </ul>
        </div>

        <div data-aos="fade-left" className='flex items-center gap-4'>
          <IoSearchOutline fontSize={24} />
          <div className='relative'> 
            <IoCartOutline fontSize={24} />
            <div className="absolute inline-flex items-center font-inter justify-center w-5 h-5 text-xs font-bold text-white bg-primary border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{cartAmount}</div>
          </div>
          <button className='flex bg-primary hover:scale-105 hover:border-red-500 text-md rounded-full items-center text-white gap-3 py-2 px-4 font-inter'><MdOutlinePhoneInTalk/> Contact</button>
        </div>
        {/* Desktop Menu */}
      </div>

      {/* //Mobile Menu//////////// */}
      <div className='flex w-full items-center sm:hidden justify-between'>
        <img src={logo} className='w-[90px]' />
        <div className='flex relative items-center gap-3 sm:hidden'>
          <IoSearchOutline />
              <div className='relative'>
              < IoCartOutline fontSize={24} className='text-black object-contain' />
              <div className="absolute inline-flex items-center font-inter justify-center w-5 h-5 text-xs font-bold text-white bg-primary border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{cartAmount}</div>
            </div>
          <img className='w-[30px]' 
          src={ toggle ? close : menu } 
          onClick={()=>setToggle(!toggle)}
          />

          <div className={` ${ toggle ? 'flex' : 'hidden' } border-t-2 border-b-2 border-primary flex flex-col absolute px-8 shadow-xl rounded-xl top-12 right-0 z-250 py-8 w-[250px]`}>
            <div className='flex w-full flex-col items-center gap-4'>
              <p className='font-inter w-full text-center text-lg font-medium border-b-[1px] text-primary'>Home</p>
              <p className='font-inter text-lg w-full text-center hover:text-primary'>Menu</p>
              <p className='font-inter text-lg w-full text-center hover:text-primary'>About Us</p>
              <p className='font-inter text-lg w-full text-center hover:text-primary'>Services</p>
              <p className='font-inter text-lg w-full text-center  hover:text-primary'>Offers</p>
            </div>
            <button className='py-3 px-6 bg-primary focus:outline-none rounded-full mt-5 text-white font-afacad font-bold text-xl'>Contact us</button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Navbar