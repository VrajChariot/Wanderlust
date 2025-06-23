import React from 'react'
import ProfileLogo from '../assets/profile.svg'

function Navbar() {
  return (
    <nav className='flex items-center justify-between py-5 px-4 w-full shadow-md cursor-pointer sticky top-0 bg-white z-10'>
        <h1 className='text-2xl font-bold text-[#6366F1]'>Wanderlust</h1>
        <ul className='flex list-none gap-8 text-base'>
        <li className='relative hover:text-[#6366F1] transition-all duration-300 after:absolute after:content-[""] after:bg-[#6366F1] after:h-[2px] after:w-0 after:left-0 after:-bottom-[5px] after:duration-300 hover:after:w-full'>Home</li>
            <li className='relative hover:text-[#6366F1] transition-all duration-300 after:absolute after:content-[""] after:bg-[#6366F1] after:h-[2px] after:w-0 after:left-0 after:-bottom-[5px] after:duration-300 hover:after:w-full'>Destinations</li>
            <li className='relative hover:text-[#6366F1] transition-all duration-300 after:absolute after:content-[""] after:bg-[#6366F1] after:h-[2px] after:w-0 after:left-0 after:-bottom-[5px] after:duration-300 hover:after:w-full'>Experiences</li>
            <li className='relative hover:text-[#6366F1] transition-all duration-300 after:absolute after:content-[""] after:bg-[#6366F1] after:h-[2px] after:w-0 after:left-0 after:-bottom-[5px] after:duration-300 hover:after:w-full'>Hotels</li>
            <li className='relative hover:text-[#6366F1] transition-all duration-300 after:absolute after:content-[""] after:bg-[#6366F1] after:h-[2px] after:w-0 after:left-0 after:-bottom-[5px] after:duration-300 hover:after:w-full'>Blog</li>
            <li className='relative hover:text-[#6366F1] transition-all duration-300 after:absolute after:content-[""] after:bg-[#6366F1] after:h-[2px] after:w-0 after:left-0 after:-bottom-[5px] after:duration-300 hover:after:w-full'>Contact</li>
        </ul>
        <div>
            <img src={ProfileLogo} alt="profile" />
        </div>
    </nav>
  )
}

export default Navbar