import React from 'react'
import NavIcon from "../assets/navigateicon.svg";

function MoreInfo(props) {
    return (
        <div className={`p-8 ${props.bgColor} flex gap-16`}>
            <div className='flex flex-col gap-6'>
                <h1 className='text-4xl font-bold'>{props.title}</h1>
                <p className='text-base text-[#4B5563]'>
                    {props.desc}
                </p>
                <button className='flex items-center gap-2 text-base bg-white text-[#6366F1] border-2 border-[#6366F1] py-3 px-6 rounded-[50px] cursor-pointer w-fit'>
                    {props.btnTxt} 
                    <img src={NavIcon} alt="" className='w-4 h-4'/>
                </button>
            </div>
            <img src={props.img} alt="" className='w-1/2 h-full object-contain rounded-xl'/>

        </div>
    )
}

export default MoreInfo