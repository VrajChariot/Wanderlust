import React from 'react'
import navIcon from "../assets/navigateicon.svg";

function Card(props) {
    return (
        <div>
            <div className='w-full max-w-[390px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.226)] rounded-[12px]'>
                <img src={props.MainImg} alt="" className='rounded-t-[12px] w-full object-contain'/>
                    <div className="text-base p-3 flex flex-col gap-3">
                        <h3 className='text-base font-bold'>{props.city}</h3>
                        <p>{props.country}</p>
                        <p>
                            {props.description}
                        </p>
                        <div className='flex gap-[3px] items-center text-[#4B6BFB]'>
                            <p>Learn More</p>
                            <img src={navIcon} alt="" className='w-[8px] h-[8px]'/>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Card