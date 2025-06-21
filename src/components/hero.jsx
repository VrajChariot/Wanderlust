import React from 'react'
import LocationIcon from '../assets/location.svg'
import SepraterIcon from '../assets/seprater.svg'
import BackpackIcon from '../assets/backpack-svgrepo-com.svg'
import CalendarIcon from '../assets/calender (1).svg'
import HeroBG from '../assets/HomeBG.jpg'

function Hero() {
  return (
<section 
  style={{ backgroundImage: `url(${HeroBG})` }}
  className="w-full h-[600px] flex flex-col items-center justify-center gap-8 text-center bg-cover bg-center"
>
        <h1 className='text-5xl font-bold text-white'>
            Discover Your next adventure
        </h1>
        <p className='text-xl text-white'>
            Your journey begins with a single click
        </p>
        <div className="w-[768px] h-[60px] rounded-[50px] bg-white flex justify-between items-center text-base p-2">
            <div className="h-full flex justify-center items-center gap-2 px-4">
                <img src={LocationIcon} alt="location"/>
                <input type="search" placeholder="Explore nearby places" className='h-full w-full outline-0 placeholder:text-[#9CA3AF]'/>
            </div>
            <img src={SepraterIcon} alt=""/>
            <div className="flex justify-center items-center gap-2">
                <img src={BackpackIcon} alt=""/>
                <select name="activities" id="activities" className='h-full w-full rounded-[50px] outline-0'>
                    <option value="">All Activities</option>
                    <option value="">Hiking</option>
                    <option value="">Camping</option>
                    <option value="">Sightseeing</option>
                </select>
            </div>
            <img src={SepraterIcon} alt=""/>
            <div className="flex justify-center items-center gap-2">
                <img src={CalendarIcon} alt=""/>
                <input type="date" placeholder="Choose a date" className='h-full w-full rounded-[50px] outline-0 border-0'/>
            </div>
            <button className="bg-[#6366F1] border-0 rounded-[50px] p-2.5 w-24 text-white hover:bg-[#4F46E5] hover:translate-y-[-2px] hover:shadow-[0_4px_8px_rgba(99,102,241,0.2)] active:translate-y-0 transition-all duration-300">
                Search
            </button>
        </div>
    </section>
  )
}

export default Hero