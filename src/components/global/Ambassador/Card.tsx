import { Right } from '@/VectorImage/Image'
import React from 'react'

const datas = [
   {
    title:"Exclusive Access:",
    description:"Gain early access to key project updates, new features, and ULALO’s development roadmap. As part of the ULALO team, you’ll be the first to know about groundbreaking innovations.",
    
   },
   {
    title:"Empower the Future of Healthcare:",
    description:"By representing ULALO, you’re not only advocating for blockchain technology but also for an improved healthcare system that benefits everyone.",
   },
   {
    title:"Expand Your Network:",
    description:"You will join a global community of like-minded individuals passionate about the intersection of blockchain technology and healthcare. Collaborate, share ideas, and grow your professional network.",
   },
   {
    title:"Skill development",
    description:"You will have the opportunity to improve your leadership, communication, and organizational skills, helping you grow professionally.",
   },
   {
    title:"Rewards and Incentives:",
    description:`Our ambassadors will receive $ULA tokens, USDT rewards, exclusive NFTs, and other incentives as a token of appreciation for their dedication and contributions to growing the ULALO community. This is your opportunity to earn while making a real impact in the Web3 and healthcare space.`,
   },
   {
    title:"Performance Bonuses:",
    description:`Top-performing ambassadors may receive bonus incentives based on milestones and impact.`,
   },
]

const Card = () => {
  return (
    <div className='flex flex-col items-center gap-8 self-stretch'>
      <div className='flex flex-col items-start gap-4 self-stretch'>
        <p className='self-stretch text-[#1BE866] font-sfpro_700 text-2xl leading-[160%] tracking-[-0.48px] uppercase'>
          WHY ULALO
        </p>
        <p className='self-stretch text-[#364655] font-openSans_Regular text-[15px] leading-6'>
          Becoming a ULALO ambassador means playing a vital role in spreading our vision and values. As an ambassador, you are not only supporting the mission of revolutionizing healthcare through blockchain, but you also get to benefit from multiple advantages:
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-start gap-8 self-stretch'>
        {datas.map((data, index) => (
          <div key={index} className='flex items-start gap-2 flex-[1_0_0]'>
            <Right />
            <div className='flex flex-col items-start gap-2 flex-[1_0_0]'>
              <p className='self-stretch text-[#364655] font-sfpro_700 text-lg leading-[160%] tracking-[0.54px] uppercase'>
                {data.title}
              </p>
              <p className='self-stretch text-[#364655] font-openSans_Regular text-[15px] leading-[160%]'>
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card
