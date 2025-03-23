import React from 'react'
import Image from 'next/image'

const MiddleLeft = () => {
  return (
      <div className="col-span-12 md:col-span-5 bg-white rounded-[15px]  p-5">
          <div className="w-full flex flex-row items-center justify-between">

              <p className="text-[#364655] text-[30px] font-bold leading-[36px] uppercase">OUR APPROACH</p>
              <div className="w-[54px] h-[50px] relative">
                    <Image src={"/image/logo.png"} alt="ULALO" layout="fill" objectFit="cover" />

              </div>
          </div>
          <div className="mt-[30px] flex flex-col gap-[10px]">
              <p className="text-[14px] text-[#364655] font-normal leading-[18px]">ULALO stands out by integrating blockchain technology into healthcare, ensuring that all patient data is encrypted, immutable, and accessible only to those authorized by the patient.</p>
              <p className="text-[14px] text-[#364655] font-normal leading-[18px]">By putting control back in the hands of the patients, ULALO fosters a healthcare environment where privacy and efficiency are the norm.</p>
          </div>
      </div>
  )
}

export default MiddleLeft