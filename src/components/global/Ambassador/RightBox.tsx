import Link from 'next/link'
import React from 'react'

const RightBox = () => {
  return (
    <div className='flex flex-col items-start gap-12 self-stretch [background:#364655] p-8 rounded-3xl'>
        <div className='flex flex-col items-start gap-4 self-stretch'>
            <p className='self-stretch text-white font-sfpro_700 text-2xl  leading-[160%] tracking-[0.72px] uppercase'>How can we help you?</p>
            <p className='self-stretch text-white font-sfpro_700 text-2xl  leading-[160%] tracking-[0.72px] uppercase'>Contact Ulalo support team if you need help or have questions.</p>
        </div>
        <Link href='/contact' className='flex w-[70%] flex-col items-center self-center bg-[#1BE866] pl-[46.31px] pr-[46.33px] py-[18px] rounded-[48px]'>
  <p className='text-[#364655] font-inter text-[14px] font-medium leading-[16.8px]'>
    Contact Us
  </p>
</Link>
    </div>
  )
}

export default RightBox