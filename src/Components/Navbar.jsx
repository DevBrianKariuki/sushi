import React, {useState} from 'react'
import { IoCartOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { logo, menu, close } from '../assets'
import { Menu } from '../constants/constants';
import { FaPhone } from 'react-icons/fa6';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className='w-full py-8 flex items-center md:justify-start justify-between'>
        <div className='w-full'>
            <img src={logo} className='w-[90px]' />
        </div>

        {/* Desktop Menu */}

        <div className='flex w-full hidden sm:flex items-center gap-6'>
          <p className='font-inter text-center text-md hover:font-bold hover:text-primary'>Home</p>
          <p className='font-inter text-md text-center hover:font-bold hover:text-primary'>Menu</p>
          <p className='font-inter text-md text-center hover:font-bold hover:text-primary'>About Us</p>
          <p className='font-inter text-md text-center hover:font-bold hover:text-primary'>Services</p>
          <p className='font-inter text-md text-center hover:font-bold  hover:text-primary'>Offers</p>
        </div>

        <div className='flex w-full gap-3 hidden sm:flex items-center'>
          < FaSearch fontSize={24} className='text-black object-contain' />
          <button type="button" className="relative inline-flex items-center p-2 text-sm font-medium text-center focus:outline-none">
          < IoCartOutline fontSize={24} className='text-black object-contain' />
              <div className="absolute inline-flex items-center font-inter justify-center w-6 h-6 text-xs font-bold text-white bg-primary border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">0</div>
          </button>
          <button className='font-inter bg-primary text-white flex items-center gap-4 rounded-full py-3 px-5'><FaPhone/> Contact Us</button>
        </div>


      {/* //Mobile Menu//////////// */}
      <div className='flex relative items-center gap-6 sm:hidden'>
        < FaSearch fontSize={36} className='text-black object-contain' />
        < IoCartOutline fontSize={48} className='text-black object-contain' />
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
  )
}

export default Navbar