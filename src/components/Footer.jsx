import React from 'react'
import Facebook from "../assets/facebool.svg";
import twitter from "../assets/twitter.svg";
import Insta from "../assets/insta.svg";

function Footer() {
  return (
    <footer className='bg-[#111827] text-white grid grid-cols-4 gap-8 py-16 px-8 justify-center items-center'>
        <div className='flex flex-col gap-4'>
            <h3 className='font-bold text-xl'>About</h3>
            <ul className='list-none flex flex-col gap-2'>
                <li>About Us</li>
                <li>Features</li>
                <li>News Blog</li>
            </ul>
        </div>
        <div className="flex flex-col gap-4">
            <h3 className='font-bold text-xl'>Company</h3>
            <ul className='list-none flex flex-col gap-2'>
                <li>Why Us</li>
                <li>Partner with Us</li>
                <li>fAQ</li>
            </ul>
        </div>
        <div className="flex flex-col gap-4">
            <h3 className='font-bold text-xl'>Support</h3>
            <ul className='list-none flex flex-col gap-2'>
                <li>Account</li>
                <li>Support Features</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div className="flex flex-col gap-4">
            <h3 className='font-bold text-xl'>Follow Us</h3>
            <ul className='flex gap-6'>
                <li><img src={Facebook} alt=""/></li>
                <li><img src={twitter} alt=""/></li>
                <li><img src={Insta} alt=""/></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer