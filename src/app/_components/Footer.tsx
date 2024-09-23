import React from 'react'
import Image from 'next/image'
import I1 from '../../images/image4.png'
function Footer() {
  return (
    <div className='flex px-11 border-t-2 border-gray-300 mt-4'>
        <div className="space-y-5 font-roboto">
            <Image src={I1} alt='icon' width={200} height={66}/>
            <p className='w-[316px] font-[350] font-roboto text-gray-400 text-[14.5px]'>
                <span className="font-[700] text-[14.5px] text-[#77808B]">New Delhi</span><br/> Images Multimedia Ltd.<br/> S-61 A, Pocket S, Okhla Phase II, Okhla Industrial Estate, New Delhi, Delhi 110020 Images Multimedia Ltd.
            </p>
            <p className='w-[316px] font-[350] font-roboto text-gray-400 text-[14px]'>
                <span className="font-[700] text-[14.5px] text-[#77808B]">Mumbai</span><br/> E 519, Floral Deck Plaza Central MIDC Road, Opp. SEEPZ. Andheri (East) Mumbai 400093
            </p>
            <p className='w-[316px] font-medium text-gray-400 text-[14.5px]'>
                <span className='font-semibold text-gray-800'>Contact us</span><br/>
                +91-9867355551<br/>
                editor@indiaretailing.com
            </p>
            <p>
                Our Social Media
            </p>
        </div>
    </div>
  )
}

export default Footer