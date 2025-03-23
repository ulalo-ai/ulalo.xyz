import { Marquee } from '@/components/ui/Marquee'
import React from 'react'


const BridgingTheWorld = () => {
    return (
        <section className='container max-w-[88rem]   mx-auto px-5 md:px-8 flex flex-col items-start justify-start gap-y-[56px] py-[100px]   '>
            <p className='text-[#000] text-[32px] md:text-[56px] font-sfpro_700 flex flex-col items-start justify-start uppercase leading-[110%]'>Bridging the world <span className='text-[#1BE866] '>TOGETHER</span></p>
            <div className='w-full relative '>
                <div className='absolute top-0 left-0 w-1/6 h-full bg-gradient-to-r from-[#fff] to-transparent z-10' />
                <div className='absolute top-0 right-0 w-1/6 h-full bg-gradient-to-l from-[#fff] to-transparent z-10' />
                
            <Marquee pauseOnHover className="[--duration:30s]">
                {Array.from({ length: 8 }).map((_, index) => (
                    <MarqueeItem key={index} index={index} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:30s]">
                {Array.from({ length: 8 }).map((_, index) => (
                    <MarqueeItem key={index} index={index} />
                ))}
            </Marquee>
            <Marquee  pauseOnHover className="[--duration:30s]">
                {Array.from({ length: 8 }).map((_, index) => (
                    <MarqueeItem key={index} index={index} />
                ))}
            </Marquee>
                </div>
            <p className='text-[#000] self-end text-[32px] md:text-[56px] font-sfpro_700 uppercase leading-[110%]'>one block at a time... </p>
        </section>
    )
}

export default BridgingTheWorld
const MarqueeItem = ({ index }: { index: number }) => {
    return (
        <div className=' h-24 md:h-48 relative mx-4 group' >
            <img src={`/image/marquee-${index + 1}.png`} alt="" className=' object-contain w-full h-full group-hover:grayscale-0 grayscale transition-all duration-300' />
        </div>
    )
}