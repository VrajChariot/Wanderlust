import React from 'react'

function newsletter() {
    return (
        <div className='bg-[#6366F1] text-white flex justify-center items-center text-center p-8'>
            <div className="flex justify-center items-center flex-col gap-6 max-w-[700px]">
                <h1 className='font-bold text-3xl'>Subscribe to our destination review newsletter</h1>
                <p>Join our community and get travel tips, destination guides, and exclusive offers.</p>
                <div className='flex justify-center items-center gap-4 w-full'>
                    <input type="email" placeholder="xyz@gmail.com" className='w-full py-[12px] px-3 rounded-[8px] bg-white border-0 outline-0 placeholder:text-base placeholder:text-[#9CA3AF]' />
                    <button className='bg-white text-[#6366F1] border-0 py-[12px] px-8 rounded-[8px] text-base text-center cursor-pointer'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default newsletter

// .input_wrapper input{
//     width: 100%;
//     padding: 15px 12px;
//     border-radius: 8px;
//     font-size: 16px;
//     border: none;
//     outline: none;
// }


// .input_wrapper button{
//     background-color: white;
//     color: #6366F1;
//     border: none;
//     padding: 15px 32px;
//     border-radius: 8px;
//     font-size: 16px;
//     text-align: center;
//     cursor: pointer;
//     transition: all 0.3s ease;
// }