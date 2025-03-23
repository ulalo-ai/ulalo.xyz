import { cn } from '@/lib/utility'
import Image from 'next/image'
import React from 'react'


const SubSection3 = () => {
  return (
      <div className={cn('flex gap-10  flex-col-reverse items-center md:flex-row-reverse w-full  justify-center mt-[100px] md:mt-[200px]')}>
          <div className='max-w-[650px] mx-auto flex flex-col md:items-start md:justify-start items-center justify-center gap-y-4 md:gap-y-8' >
              <h2 className=' text-[32px] md:text-[64px] font-sfpro_700 leading-[110%] capitalize text-[rgb(0,0,0)] flex flex-col items-center md:items-start md:justify-center '>ULALO-Pocket Sized
                  <span className='text-[#35E467]'> Health Advocate</span></h2>
              <p className='text-[15px] font-sfpro_400 text-[#000] leading-[24px] md:text-left text-center'>The ultimate goal of ULALO is to be the all-in-one wallet solution.
                  No more hunting for records! ULALO puts your medical data at
your fingertips – anytime, anywhere, in any language.  </p>

          
          </div>
          <div className='w-full md:w-1/2 h-[300px] md:h-[440px] flex flex-col items-center justify-center  relative'>
              <Image src={'/image/Overlay.png'} alt='subsection1' layout='fill' objectFit='contain'  />
          </div>
      </div>
  )
}

export default SubSection3