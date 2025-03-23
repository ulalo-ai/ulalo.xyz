import { DistributionPieChart } from '@/VectorImage/Image'
import { motion } from 'motion/react'
import Link from 'next/link'
import React from 'react'

const data = [
    {
        title: '16% DEX & CEX Listing',
        color: '#F8F1FF'
    },
    {
        title: '25% Advisors & Community',
        color: '#D2EFE5'
    },
    {
        title: '10% Operations & Legal',
        color: '#ADEECB'    
    },
    {
        title: '15% Token Ecosystem',
        color: '#68EB9C'
    },  
    {
        title: '10% Marketing & Business Development',
        color: '#1BE866'
    },
    {
        title: '10% Technology Development',
        color: '#364655'    
    },
    {
        title: '10% Reserve',
        color: '#9196A5'
    },  
    {
        title: '1% Airdrops',
        color: '#DDD8E5'
    },  
    
]

const DistributionOfTokens = () => {
  return (
    <section id='tokenomics' className='container mx-auto max-w-[88rem] flex flex-col items-center justify-center p-5 md:p-16 mb-[40px] md:mb-0  '>
          <p className='text-secondary md:text-[46px] font-openSans_ExtraBold leading-[125%] uppercase text-[32px] '>Distribution of Tokens</p>
          <p className='text-secondary text-[20px] font-sfpro_400 leading-[110%] mt-4 text-center text-balance'>Our clients — both corporate and private ones — will access all the services they need from a single platform. Blockchain technology gives us the chance to make your finances grow faster and give better returns.</p>
          <Link href={"https://ulalo.gitbook.io/ulalo-whitepaper"} target="_blank" className='bg-[#364655] text-white text-[16px] md:text-[24px] font-openSans_Medium leading-[23.856px] px-[64px] py-[24px] rounded-[25px] mt-8 '>Gitbook Docs</Link>

          <div className='flex flex-col-reverse md:flex-row  items-center justify-between w-full mt-[100px] '>
              <div className='flex-1 flex flex-col items-start justify-start gap-y-8 mt-[40px] md:mt-0'>
                {data.map((item,index)=>(
                    <Label key={index} title={item.title} color={item.color}/>
                ))}
              </div>
              <div className='max-w-[600px] relative '>
                  <motion.div
                      initial={{opacity:0}}
                      whileInView={{opacity:1}}
                      transition={{duration:1, delay:1.5 ,ease:"easeInOut"}}
                      className='w-auto h-auto absolute top-[10%] p-[10px] left-0 bg-[#B1F7CB] rounded-[12px] []  '
                      style={{
                          boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.14)'
                  }}
                  >
                      <p className='text-secondary text-[12px] md:text-[16px] font-sfpro_400 leading-[125%] '>10% Operations & Legal</p>
                  </motion.div>
                  <motion.div
                      initial={{opacity:0}}
                      whileInView={{opacity:1}}
                      transition={{duration:1, delay:1.5 ,ease:"easeInOut"}}
                      className='w-auto h-auto absolute top-[0%] p-[10px] left-1/2 -translate-x-[40%] bg-[#6BF09C] rounded-[12px] []  '
                      style={{
                          boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.14)'
                  }}
                  >
                      <p className='text-secondary text-[12px] md:text-[16px] font-sfpro_400 leading-[125%] '>15% Token Ecosystem</p>
                  </motion.div>
                  <motion.div
                      initial={{opacity:0}}
                      whileInView={{opacity:1}}
                      transition={{duration:1, delay:1.5 ,ease:"easeInOut"}}
                      className='w-auto h-auto absolute top-[30%] -translate-y-1/2 p-[10px] max-w-[200px]  right-0 bg-[#1BE866] rounded-[12px] []  '
                      style={{
                          boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.14)'
                  }}
                  >
                      <p className='text-secondary text-[12px] md:text-[16px] font-sfpro_400 leading-[125%]  text-center '>10% Marketing & Business Development</p>
                  </motion.div>
                  <motion.div
                      initial={{opacity:0}}
                      whileInView={{opacity:1}}
                      transition={{duration:1, delay:1.5 ,ease:"easeInOut"}}
                      className='w-auto h-auto absolute bottom-[43%] -translate-y-1/2 p-[10px] max-w-[300px]  right-0 bg-[#364655] rounded-[12px] []  '
                      style={{
                          boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.14)'
                  }}
                  >
                      <p className=' text-[12px] md:text-[16px] text-white font-sfpro_400 leading-[125%]  text-center '>10% Technology Development</p>
                  </motion.div>
                  <motion.div
                      initial={{opacity:0}}
                      whileInView={{opacity:1}}
                      transition={{duration:1, delay:1.5 ,ease:"easeInOut"}}
                      className='w-auto h-auto absolute bottom-[23%] -translate-y-1/2 p-[10px] max-w-[300px]  right-0 bg-[#949DA5] rounded-[12px] []  '
                      style={{
                          boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.14)'
                  }}
                  >
                      <p className=' text-[12px] md:text-[16px] text-white font-sfpro_400 leading-[125%]  text-center '>10% Reserve</p>
                  </motion.div>
                  <motion.div
                      initial={{opacity:0}}
                      whileInView={{opacity:1}}
                      transition={{duration:1, delay:1.5 ,ease:"easeInOut"}}
                      className='w-auto h-auto absolute bottom-[5%] -translate-y-1/2 p-[10px] max-w-[300px]  right-[10%] bg-[#DDD8E5] rounded-[12px] []  '
                      style={{
                          boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.14)'
                  }}
                  >
                      <p className=' text-[12px] md:text-[16px] text-white font-sfpro_400 leading-[125%]  text-center '>1% Airdrops</p>
                  </motion.div>
                  <motion.div
                      initial={{opacity:0}}
                      whileInView={{opacity:1}}
                      transition={{duration:1, delay:1.5 ,ease:"easeInOut"}}
                      className='w-auto h-auto absolute bottom-[0%] -translate-y-1/2 p-[10px] max-w-[300px]  right-[35%] bg-[#FFF] rounded-[12px] []  '
                      style={{
                          boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.14)'
                  }}
                  >
                      <p className=' text-[12px] md:text-[16px] text-secondary font-sfpro_400 leading-[125%]  text-center '>16% DEX & CEX Listing</p>
                  </motion.div>
                  <motion.div
                      initial={{opacity:0}}
                      whileInView={{opacity:1}}
                      transition={{duration:1, delay:1.5 ,ease:"easeInOut"}}
                      className='w-auto h-auto absolute top-[50%] translate-y-1/2 p-[10px] max-w-[300px]  left-[0%] bg-[#D8FBE5] rounded-[12px] []  '
                      style={{
                          boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.14)'
                  }}
                  >
                      <p className=' text-[12px] md:text-[16px] text-secondary font-sfpro_400 leading-[125%]  text-center '>25% Advisors & Community</p>
                  </motion.div>
                  <div className='w-[100vw] md:w-[600px]  '>
                      
                  <DistributionPieChart/>
                  </div>
</div>
          </div>
       
    </section>
  )
}

export default DistributionOfTokens

const Label = ({title ,color}:{title:string ,color:string}) => {
    return (
        <div className='flex flex-row items-center justify-start gap-x-8'>
            <div className='w-[32px] h-[32px] rounded-[8px] border border-solid border-black' style={{backgroundColor:color}}></div>
            <p className='text-secondary text-[20px] font-sfpro_400 leading-[125%] uppercase'>{title}</p>
        </div>
    )
}