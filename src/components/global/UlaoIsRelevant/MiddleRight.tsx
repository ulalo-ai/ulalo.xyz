import React from 'react'
import Image from 'next/image'

const MiddleRight = () => {
  return (
      <div className="col-span-12 md:col-span-7 bg-white rounded-[15px]  p-5">
          <div className="w-full flex flex-row items-center justify-between">

              <p className="text-[#364655] text-[30px] font-bold leading-[36px] uppercase">Why ULALO?</p>
              <div className="w-[54px] h-[50px] relative">
                  <Image src={"/image/logo.png"} alt="ULALO" layout="fill" objectFit="cover" />

              </div>
          </div>
          <div className="mt-[30px] flex flex-col gap-[10px]">
              <p className="text-[14px] text-[#364655] font-normal leading-[18px] max-w-[570px]">
                  In today’s digital age, health data is one of the most valuable assets a person
                  possesses. However, traditional systems often fall short in providing the
                  security and accessibility that modern patients require. ULALO addresses this
                  challenge with a blockchain-based platform that is not only secure but user-
                  friendly.
              </p>
              {/* <p className="text-[14px] text-[#364655] font-normal leading-[18px]">By putting control back in the hands of the patients, ULALO fosters a healthcare environment where privacy and efficiency are the norm.</p> */}
          </div>
      </div>
  )
}

export default MiddleRight