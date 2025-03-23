import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const  TopRight = () => {
  return (
      <div className='col-span-12 md:col-span-7  grid grid-cols-12 gap-[10px]  '>
          <div className="col-span-12 md:col-span-6 bg-white p-5 rounded-[15px] ">
              <div className="w-full flex flex-row items-center justify-between">

                  <p className="text-[#364655] text-[30px] font-bold leading-[36px] uppercase">Revolutionize Healthcare</p>
                  <div className="w-[54px] h-[50px] relative">
                      <Image src={"/image/logo.png"} alt="ULALO" layout="fill" objectFit="cover" />

                  </div>
              </div>
              <p className="text-[#364655] text-[14px] font-normal leading-[16.8px] mt-[16px] ">We envision a future where healthcare is no longer fragmented but unified through innovative technology. By leveraging blockchain, we are ensuring that every piece of data is protected and that patients remain the ultimate guardians of their health records.</p>
          </div>
          <div className="col-span-12 md:col-span-6 bg-primary rounded-[15px] p-5">
              <p className="text-[#364655] text-[30px] leading-[36px] font-bold uppercase ">Join a growing community</p>
              <div className='flex flex-row items-center justify-between gap-[10px] '>
                  
                  <Link href={"https://t.me/+Zeg3Q8tRseEzM2U8"}  target='_blank'     className=" w-full py-[13px] mt-[16px] bg-[#364655] text-white rounded-[12px] flex flex-col items-center justify-center ">Join Telegram</Link>
                  <Link href={"https://discord.gg/ChhVCqe9Vp"}  target='_blank'  className=" w-full py-[13px] mt-[16px] bg-[#364655] text-white rounded-[12px] flex flex-col items-center justify-center ">Join Discord</Link>
              </div>
              <p className="text-[#364655] text-[14px] font-normal leading-[16.8px] mt-[16px] ">ULALO is a decentralized smart wallet that puts individuals in control of their health data securely and efficiently. Join the community and take control of the future.</p>
          </div>
          <div className="col-span-12 bg-primary p-5 rounded-[15px] relative overflow-hidden ">
              <div className="w-full flex flex-row items-center justify-between ">
                  
                  <p className="text-[#364655] text-[30px] font-bold leading-[36px] uppercase max-w-[131px]">Use
                      ULALO
                      Wallet</p>
                  <div className="w-[54px] h-[50px] relative ">
                      <Image src={"/image/logo.png"} alt="ULALO" layout="fill" objectFit="cover" />

                  </div>
              </div>
              <p className="text-[#364655] text-[14px] font-normal leading-[16.8px] mt-[16px] max-w-[375px] ">Taking ownership of your data, identity, health history is easy with ULALO. With our blockchain-secured wallet and get “true” ownership.</p>
          </div>

      </div>
  )
}

export default TopRight         