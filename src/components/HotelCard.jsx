import React from 'react'
import wifiImg from "../assets/wifi.svg"
import poolImg from "../assets/pool.svg"
import gardenImg from "../assets/garden.svg"
import dinnerImg from "../assets/dinner.svg"
import Raiting from "../assets/4star.svg"
import Pin from "../assets/pin.svg";

function HotelCard(props) {
  return (
            <div>
                <div className='w-full max-w-[390px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.226)] rounded-[12px]'>
                    <img src={props.MainImg} alt="" className='rounded-t-[12px] w-full object-contain'/>
                        <div className="text-base p-3 flex flex-col gap-3">
                            <h3 className='text-base font-bold'>{props.hotelName}</h3>
                            <div className='flex items-center gap-1'>
                                <img src={Pin} alt="" />
                                <p>{props.country}</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <img src={Raiting} alt="" />
                                <p>{props.raiting}</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img src={wifiImg} alt="" />
                                <img src={poolImg} alt="" />
                                <img src={gardenImg} alt="" />
                                <img src={dinnerImg} alt="" />
                            </div>
                            <div className='flex text-[#6366F1] items-center justify-between text-base'>
                                <p>From {props.price}/night</p>
                                <p>View Details</p>
                            </div>
                        </div>
                </div>
            </div>
  )
}

export default HotelCard