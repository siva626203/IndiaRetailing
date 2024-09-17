'use client'
import React from 'react'
import Image from 'next/image'
import I1 from '../../images/image5.png'
import I2 from '../../images/image4.png'
import SearchIcon from '../../images/ (1).png'
function Header() {
  return (
    <div >
        <div className='flex justify-center'>
        <Image src={I1} alt='Header Image' className='w-[970px] h-[250px] '/>
        </div>
        <div className='flex justify-between px-5 space-y-4 shadow-sm shadow-gray-300 '>
            <div className=' mt-6'>
              <Image src={SearchIcon} alt='Header Image' className='absolute mt-2 ml-2' width={14.32} height={14.12}/>
                <input placeholder='Search here...' className=' border-0 pl-8 py-1 placeholder-shown:text-gray-300 '/>
            </div>
            <div className="">
            <Image src={I2} alt='Header Icon' className="" width={200}/>
            </div>
            <div className='my-3 space-x-7'>
                <button className='bg-[#E21B22] text-[#FFFFFF] py-3 px-4 font-[700] font-roboto'>SUBSCRIBE</button>
                <button className="py-3 px-4 font-[700] border-2 border-[#ECECEC] font-roboto">SIGN IN</button>
            </div>
        </div>
    </div>
  )
}

export default Header