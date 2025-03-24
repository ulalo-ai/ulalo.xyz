import { GoArrow, Logo, SinigCoin, Speaker } from '@/VectorImage/Image'
import Link from 'next/link'    


const TokenLaunchSoon = () => {
    return (
        <section id='token' className='w-full bg-[#374655]'>
            <div className='container mx-auto max-w-[88rem] lg:px-8 flex flex-col items-center justify-center py-20'>
                <p className='text-white font-sfpro_700 text-center text-[24px] md:text-[64px] font-bold leading-[125%] uppercase'>$ULA Token Launch Soon!</p>
                <p className='text-white text-center font-openSans_Medium text-[18px] md:text-[24px] font-medium leading-[125%] uppercase mt-[18px]'>Buy tokens to enjoy unrivaled holder benefits!</p>


                <div className='w-full flex md:flex-row flex-col  gap-x-[56px] mt-[83px]'>
                    <div className='flex flex-col justify-center items-center  gap-y-5'>

                        <div className='flex flex-col  md:flex-row  h-full  gap-5'>

                            <Card title='Cornerstone of ULALO Ecosystem' description='$ULA gives you exclusive and priority access to the ecosystem’s premium features like AI-based personalised health insights and dedicated customer service.' />
                            <Card title='Earn by Growing Project ' description='Earn tokens on a regular basis and improve the healthcare system by sharing data and engaging in community initiatives.' />



                        </div>

                        <div className='flex flex-col md:flex-row h-full   gap-5'>
                            <Card title='Higher Staking Rewards' description='Stake your $ULA tokens for an attractive APY!' />
                            <Card title='Community Governance ' description='Vote on key decisions within the ULALO’s ecosystem. Governance rights mean you control the project&apos;s direction.' />
                        </div>


                    </div>
                    <div className='flex-1 flex flex-col  gap-[59px] px-5 md:pt-0 pt-32'>
                        <div className=' relative z-50 w-full bg-[#36C56B] border-solid border-[3px] border-white rounded-[64px] p-[24px] flex flex-col items-center  justify-start  '>
                            <p className='text-white text-[40px] font-openSans_ExtraBold leading-[125%] uppercase mt-[24px]'>$ULA is more than just a digital asset</p>
                            <p className='text-white text-[24px] font-openSans_SemiBold mt-[20px] leading-[125%]'>—it’s a key to unlocking a new era in patient-centric healthcare.</p>
                            <Link href={"#tokenomics"} className='w-[80%] flex flex-col items-center justify-center bg-[#364655] text-white text-[24px] font-openSans_Medium leading-[23.856px] capitalize py-[25px] mt-[20px] rounded-[25px]'> view Tokenomics </Link>
                            <Link href={"https://ulalo.gitbook.io/ulalo-whitepaper"} target='_blank' className='flex flex-col items-center justify-center w-[80%] bg-[#FFF] text-[#364655] text-[24px] font-openSans_Medium leading-[23.856px] capitalize py-[25px] mt-[20px] rounded-[25px]'> Explore Whitepaper </Link>
                            <div className='absolute top-0 right-0 -z-10 -translate-y-[70%]'>
                                <SinigCoin />
                                
                            </div>
                        </div>
                        <div className=' relative z-50 w-full bg-[#36C56B] border-solid border-[3px] border-white rounded-[64px] p-[24px] pt-[151px] flex flex-col items-center  justify-start  '>
                            <Link href={"#roadmap"} className='w-[80%] flex flex-col items-center justify-center bg-[#364655] text-white text-[24px] font-openSans_Medium leading-[23.856px] capitalize py-[25px] mt-[22px] rounded-[25px]'> Explore Roadmap </Link>
                            <div className='w-[80%] bg-[#364655] text-[#FFF] flex flex-col items-center gap-y-[20px] text-[24px] font-openSans_Medium leading-[23.856px] capitalize py-[25px] mt-[22px] rounded-[25px]'>
                                
                                Join Community
                                <div className='flex flex-row gap-x-4 '>
                                    <Link href='https://discord.gg/ChhVCqe9Vp' target='_blank' className='w-[64px] h-[64px]  flex flex-col items-center justify-center bg-white rounded-[8px]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="33" viewBox="0 0 41 33" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2989 28.3014C14.8287 29.6113 14.2811 30.8923 13.6589 32.1376C13.5821 32.2898 13.4567 32.4122 13.3023 32.4855C13.148 32.5588 12.9735 32.5788 12.8065 32.5422C8.29116 31.5382 4.33886 29.7271 1.34501 27.3702C1.26032 27.3029 1.19084 27.2186 1.14113 27.1227C1.09142 27.0268 1.0626 26.9215 1.05655 26.8138C1.00928 25.9515 0.985679 25.0882 0.985779 24.2247C0.985779 15.8305 3.19039 8.63574 6.76039 3.10653C6.84324 2.97806 6.9627 2.87717 7.10347 2.81681C9.52116 1.78669 12.2189 1.01717 15.1058 0.569563C15.2889 0.541782 15.4759 0.580749 15.6324 0.679308C15.789 0.777868 15.9046 0.929402 15.9581 1.10608C16.2627 2.1178 16.5319 3.16018 16.7642 4.22862C18.1638 4.04478 19.5741 3.95311 20.9858 3.95423C22.4335 3.95423 23.8458 4.0485 25.2073 4.22862C25.4352 3.17747 25.7041 2.13557 26.0135 1.10532C26.0669 0.928636 26.1825 0.777102 26.3391 0.678542C26.4957 0.579983 26.6827 0.541015 26.8658 0.568796C29.7527 1.01717 32.4504 1.78746 34.8681 2.81758C35.0088 2.87737 35.1282 2.97774 35.2112 3.10576C38.7812 8.6365 40.9858 15.8305 40.9858 24.2247C40.9859 25.0882 40.9623 25.9515 40.915 26.8138C40.9094 26.9216 40.8808 27.0271 40.8312 27.1231C40.7816 27.2192 40.7121 27.3037 40.6273 27.371C37.6327 29.7271 33.6796 31.5382 29.165 32.5415C28.9981 32.5783 28.8236 32.5587 28.6691 32.4857C28.5146 32.4126 28.3889 32.2904 28.3119 32.1383C27.6904 30.8925 27.1431 29.6114 26.6727 28.3014C28.6019 27.932 30.4073 27.3786 32.0404 26.675C32.2195 26.5891 32.3582 26.4374 32.4277 26.2518C32.4971 26.0662 32.4918 25.8611 32.4129 25.6793C32.334 25.4975 32.1876 25.3532 32.0043 25.2765C31.8211 25.1998 31.6151 25.1967 31.4296 25.2678C28.4473 26.5532 24.8527 27.2997 20.9858 27.2997C17.1189 27.2997 13.5242 26.5524 10.5419 25.267C10.3564 25.1959 10.1505 25.199 9.96721 25.2757C9.78395 25.3524 9.63754 25.4968 9.55864 25.6785C9.47974 25.8603 9.47445 26.0655 9.54388 26.2511C9.61332 26.4367 9.75209 26.5883 9.93116 26.6743C11.5642 27.3779 13.3696 27.932 15.2989 28.3014ZM27.9089 12.737C30.0319 12.737 31.755 14.4539 31.755 16.5693C31.755 18.6847 30.0319 20.4016 27.9089 20.4016C25.7858 20.4016 24.0627 18.6847 24.0627 16.5693C24.0627 14.4539 25.7858 12.737 27.9089 12.737ZM14.0627 12.737C16.1858 12.737 17.9089 14.4539 17.9089 16.5693C17.9089 18.6847 16.1858 20.4016 14.0627 20.4016C11.9396 20.4016 10.2165 18.6847 10.2165 16.5693C10.2165 14.4539 11.9396 12.737 14.0627 12.737Z" fill="#364655" />
                                        </svg>
                                    </Link>
                                    <Link href='https://t.me/+Zeg3Q8tRseEzM2U8' target='_blank' className='w-[64px] h-[64px] flex flex-col items-center justify-center bg-white rounded-[8px]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="33" viewBox="0 0 40 33" fill="none">
                                            <path d="M36.8533 0.770466L2.30684 13.8038C-0.0508192 14.7303 -0.0371796 16.0171 1.87428 16.5909L10.7437 19.2978L31.2651 6.63043C32.2354 6.05282 33.122 6.36355 32.3933 6.99644L15.7669 21.6769H15.763L15.7669 21.6788L15.1551 30.6231C16.0514 30.6231 16.4469 30.2209 16.9496 29.7462L21.2577 25.6477L30.2188 32.1234C31.8711 33.0136 33.0577 32.5561 33.4688 30.6269L39.3513 3.5041C39.9534 1.14219 38.4297 0.07276 36.8533 0.770466Z" fill="#364655" />
                                        </svg>
                                    </Link>
                                </div>
                            
                            </div>
                            <div className='absolute top-0 right-1/2 translate-x-1/2 -z-10 -translate-y-[20%]'>
                                <SinigCoin />
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full bg-[#272727]  '>

                <div className=' container max-w-[88rem] mx-auto flex flex-row items-center justify-center gap-x-[100px] group'>
                    <p className='text-white text-[24px] md:text-[70px] font-openSans_Medium leading-[110%] capitalize py-[25px] relative  mt-[41px] rounded-[25px]'>
                        <div className='absolute top-0 left-0 w-[105%] h-[2px] bg-white leading-[125%]'/>
                        purchase $ULA Tokens </p>
                    <div className=' group-hover:rotate-[-45deg] ease-in-out  transition-all duration-300 relative h-[43px] md:h-[97px]'>
                      
                            <GoArrow />
                      
                 </div>
                    <p className='text-[#626262] text-[24px] hidden md:flex items-center justify-center font-openSans_Medium leading-[125%] capitalize '>COMING SOON!</p>

                </div>
                
            </div>
            <div className='container max-w-[88rem] mx-auto lg:px-8 px-3 min-h-dvh flex flex-col items-center justify-center gap-y-[48px] md:gap-y-[100px]'>
                <div className='w-[200px] md:w-[500px] '>
                <Logo/>

                </div>
                <p className='text-[#FFF] text-[24px] md:text-[40px] font-sfpro_500 leading-[110%] text-center'>Empowering a <span className='text-[#1BE866]'>Healthier Future</span> for 400 Million patients with <span className='text-[#1BE866]'   >Web3 and AI</span> </p>

            </div>
        </section>
    )
}
export default TokenLaunchSoon




const Card = ({ title, description }: { title: string, description: string }) => {
    return (
        <div className='pt-[88px] bg-primary rounded-[64px]  '>
            <div className=' relative border-solid border-[3px] h-full border-black rounded-[48px] p-8 pt-[64px] pb-[120px] bg-white flex flex-col  gap-6  max-w-[400px]'>
                <h1 className='text-secondary text-[32px] uppercase font-openSans_ExtraBold leading-[125%]'>{title}</h1>
                <p className='text-secondary text-[16px] font-openSans_Medium leading-[125%]'>{description}</p>
                <SpeakerCircle />
            </div>
        </div>
    )
}




const SpeakerCircle = () => {
    return (
        <div className='w-[96px] top-0 translate-x-1/2 -translate-y-1/2 absolute left-0 border-[2px] border-solid border-black  h-[96px] rounded-full bg-white flex items-center justify-center'>
            <Speaker />
        </div>
    )
}