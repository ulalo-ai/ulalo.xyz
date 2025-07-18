import { Discord, DiscordFooter, LinkedinFooter, Logo, Telegram, TelegramFooter, XFooter, YoutubeFooter,IQlogo  } from '@/VectorImage/Image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='bg-[#364655] py-8 md:py-16' >
            <div className='container mx-auto px-4 lg:px-8 max-w-[88rem]'>
                {/* Main Grid Container */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-[72px]'>

                    {/* Logo and Description Section */}
                    <div className='lg:col-span-3 flex flex-col items-start gap-y-4 md:gap-y-8'>
                        <div className='w-[100px] h-[32px]'>
                            <Logo />
                        </div>
                        <p className='text-[#FFF] text-[14px] leading-[22px] font-openSans_Regular'>
                            ULALO Decentralized Smart Patient Wallet. Special Features: Secure Digital Wallet, AI Medical Insights and Recommendations, Telemedicine Integration, Token-based Medical Insurance.
                        </p>
                    </div>

                    {/* Navigation Links Section */}
                    <div className='lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8'>
                        {/* UTILITY Section */}
                        <div className='flex flex-col items-start gap-y-4 md:gap-y-6'>
                            <h3 className='text-[#FFF] text-[16px] leading-[24px] font-openSans_Bold'>UTILITY</h3>
                            <div className='flex flex-col gap-y-3 md:gap-y-4'>
                                <Link href='/' className='text-[#FFF] text-[14px] leading-[22px] font-openSans_Regular'>Home</Link>
                                <Link href='/' className='text-[#FFF] text-[14px] leading-[22px] font-openSans_Regular'>Testnet</Link>
                                <Link href='/' className='text-[#FFF] text-[14px] leading-[22px] font-openSans_Regular'>Mainnet</Link>
                                <Link href='https://ulalo.gitbook.io/ulalo-whitepaper' target='_blank' className='text-[#FFF] text-[14px] leading-[22px] font-openSans_Regular'>Gitbook</Link>
                            </div>
                        </div>

                        {/* TOKEN Section */}
                        <div className='flex flex-col items-start gap-y-4 md:gap-y-6'>
                            <h3 className='text-[#FFF] text-[16px] leading-[24px] font-openSans_Bold'>TOKEN</h3>
                            <div className='flex flex-col gap-y-3 md:gap-y-4'>
                                <Link href='/' className='text-[#FFF] text-[14px] leading-[22px] font-openSans_Regular'>$ULA Token</Link>
                                <Link href='#tokenomics' className='text-[#FFF] text-[14px] leading-[22px] font-openSans_Regular'>Tokenomics</Link>
                                <Link href='/' className='text-[#FFF] text-[14px] leading-[22px] font-openSans_Regular'>Staking</Link>
                            </div>
                        </div>

                        {/* MORE Section */}
                        <div className='flex flex-col items-start gap-y-4 md:gap-y-6'>
                            <h3 className='text-[#FFF] text-[16px] leading-[24px] font-openSans_Bold'>MORE</h3>
                            <div className='flex flex-col gap-y-3 md:gap-y-4'>
                                <div className='text-[#FFF] text-[14px] leading-[22px] gap-y-2 font-openSans_Regular'>
                                    <span>Join Community</span>
                                    <div className='flex flex-row items-center gap-x-2 mt-2'>
                                        <Link href='https://discord.gg/ChhVCqe9Vp' target='_blank' className='bg-[#FFF] rounded-[3.75px] p-2'>
                                            <Discord />
                                        </Link>
                                        <Link href='https://t.me/+Zeg3Q8tRseEzM2U8' target='_blank' className='bg-[#FFF] rounded-[3.75px] p-2'>
                                            <Telegram />
                                        </Link>
                                    </div>
                                </div>
                                <Link href='/ambassador-program' className='text-[#FFF] text-[14px] leading-[22px] font-openSans_Regular'>Ambassador Program</Link>
                                <Link href='/' className='text-[#FFF] text-[14px] leading-[22px] font-openSans_Regular'>Disclaimer</Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Wallet Button and Social Links */}
                    <div className='lg:col-span-3 flex flex-col gap-y-8 items-center lg:items-end justify-between'>
                        <button className='bg-[#FFF] rounded-[20px] px-[46px] py-[12.5px] text-[14px] leading-[16.8px] font-openSans_Medium w-full md:w-auto'>
                            Get your wallet
                        </button>

                        <div className='flex flex-col items-center lg:items-end gap-y-5 w-full'>
                            <p className='text-[#FFF] text-[20px] leading-[22px] font-openSans_Bold'>Links</p>
                            <div className='flex flex-wrap justify-center items-center lg:justify-end gap-2'>
                                <Link href='https://x.com/ulalo_io' target='_blank'><XFooter /></Link>
                                <Link href='https://t.me/+Zeg3Q8tRseEzM2U8' target='_blank'><TelegramFooter /></Link>
                                {/* <Link href='/'><MediumFooter /></Link> */}
                                <Link href='https://discord.gg/ChhVCqe9Vp' target='_blank'><DiscordFooter /></Link>
                                <Link href='https://www.youtube.com/@ULALO_IO' target='_blank'><YoutubeFooter /></Link>
                                {/* <Link href=''><RedditFooter /></Link> */}
                                <Link href='https://www.linkedin.com/company/ulalo-io/' target='_blank'><LinkedinFooter /></Link>
                                <Link href="https://iq.wiki/wiki/ulalo" target="_blank"><IQlogo /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer