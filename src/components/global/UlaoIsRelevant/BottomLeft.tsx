import React from 'react'
import Image from 'next/image'
const BottomLeft = () => {
  return (
      <div className="col-span-12 md:col-span-5 bg-white rounded-[15px] relative  p-5">
          <div className="w-full flex flex-row items-center justify-between">

              <p className="text-[#364655] text-[30px] font-bold leading-[36px] uppercase">Secure, Private, and In Your Control</p>
              <div className="w-[80px] h-[80px] relative ">
                  <Image src={"/image/logo.png"} alt="ULALO" layout="fill" objectFit="cover" />

              </div>
          </div>
          <div className="mt-[20px] flex flex-col gap-[10px]">
              <p className="text-[14px] text-[#364655] font-normal leading-[18px] max-w-[225px]">
                  Whether you’re managing chronic conditions, undergoing treatment, or simply staying on top of your health, ULALO ensures that your data is always safe, private, and under your control.
              </p>


          </div>
          <div className='absolute bottom-0 right-5 md:w-[236px] md:h-[157px] w-[100px] h-[70px]'>
              <Image src={"/image/tuumio_wallet.png"} alt="ULALO" layout="fill" objectFit="cover" />

          </div>

      </div>
  )
}

export default BottomLeft