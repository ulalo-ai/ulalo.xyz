"use client";
import { cn } from "@/lib/utility";
import {
    DiscordFooter,
    LinkedinFooter,
    Logo,
    MediumFooter,
    TelegramFooter,
    XFooter,
    YoutubeFooter
} from "@/VectorImage/Image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";

const Header = () => {
    const [nav, setNav] = useState({ top: "0%" });
    const [mobileNav, setMobileNav] = useState(false);

    useEffect(() => {
        let lastScroll = 0;

        const handleScroll = () => {
            // Only run scroll logic if mobile nav is closed
            if (!mobileNav) {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

                if (scrollTop > lastScroll && scrollTop > 80) {
                    setNav({ top: "-100%" });
                } else {
                    setNav({ top: "0%" });
                }
                lastScroll = scrollTop;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [mobileNav]); // Add mobileNav as dependency

    // Prevent body scroll when mobile nav is open
    useEffect(() => {
        if (mobileNav) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [mobileNav]);

    return (
        <>
            <header
                style={{ top: nav.top }}
                className="transition-all w-full duration-300 flex flex-col items-center justify-between ease-in-out bg-primary py-6 px-[30px] fixed md:left-1/2 md:-translate-x-1/2 z-[100]"
            >
                <nav className="container max-w-[88rem] mx-auto flex flex-row items-center justify-between z-50">
                    <Link href="/" className="md:w-[122px] md:h-[32px] w-[100px] h-[28px]">
                        <Logo />
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="md:flex hidden flow-row items-end justify-start gap-x-[47px]">
                        <li className="text-[#F8F1FF] text-[16px] font-openSans_Medium">
                            <Link href="#smart-wallet">Smart Wallet</Link>
                        </li>
                        <li className="text-[#F8F1FF] text-[16px] font-openSans_Medium">
    <p className="text-[#125d37] text-[10px] leading-[110%] font-sfpro_500 flex items-center gap-1">
        <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
        Live
    </p>
    <Link href="https://testnet.ulalo.xyz/">Testnet</Link>
</li>

                        <li className="text-[#F8F1FF] text-[16px] font-openSans_Medium">
                            <Link href="#token">Token</Link>
                        </li>
                        <li className="text-[#F8F1FF] text-[16px] font-openSans_Medium">
                            <Link href="https://ulalo.gitbook.io/ulalo-whitepaper">Gitbook</Link>
                        </li>
                        <li className="text-[#F8F1FF] text-[16px] font-openSans_Medium">
                            <p className="text-[#FE0101] text-[10px] leading-[110%] font-sfpro_500">
                                Coming Soon
                            </p>
                            <Link href="/">Staking</Link>
                        </li>
                        <li className="text-[#F8F1FF] text-[16px] font-openSans_Medium">
                            <Link href="/ambassador-program">Ambassador Program</Link>
                        </li>
                    </ul>

                    <button className="md:block hidden bg-white text-[#374655] relative text-[16px] font-openSans_SemiBold px-[21.3px] py-[12.5px] rounded-[48px]">
                        <Link href="/">Buy $ULA Token</Link>
                        <div className="w-[68px] bg-white rotate-[-7deg] h-[41px] rounded-[48px] absolute top-0 right-0 -translate-y-1/2 flex flex-col items-center justify-center translate-x-1/2">
                            <p className="text-[#FE0101] text-[13px] leading-[110%] font-sfpro_500 text-center">
                                COMING SOON!
                            </p>
                        </div>
                    </button>

                    <button
                        onClick={() => setMobileNav(true)}
                        className="relative z-40 flex md:hidden"
                    >
                        <IoMenu className="text-[32px] text-white" />
                    </button>
                </nav>
            </header>

            {/* Mobile Navigation Overlay */}
            <div
                className={cn(
                    "fixed inset-0 z-[150] bg-[#DFE9EE] transition-transform duration-300 ease-in-out transform md:hidden",
                    mobileNav ? "translate-y-0" : "-translate-y-full"
                )}
            >
                <div className="container mx-auto px-6 py-8">
                    <div className="flex justify-end mb-8">
                        <button onClick={() => setMobileNav(false)}>
                            <FaXmark className="text-[32px] text-black" />
                        </button>
                    </div>

                    <ul className="flex flex-col items-center gap-y-8">
                        <li className="text-[#364655] text-[16px] font-openSans_Medium">
                            <Link href="/" onClick={() => setMobileNav(false)}>Smart Wallet</Link>
                        </li>
                        <li className="text-[#364655] text-[16px] font-openSans_Medium">
                        <p className="text-[#125d37] text-[10px] leading-[110%] font-sfpro_500 flex items-center gap-1">
        <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
        Live
    </p>
                            <Link href="https://testnet.ulalo.xyz/" onClick={() => setMobileNav(false)}>Testnet</Link>
                        </li>
                        <li className="text-[#364655] text-[16px] font-openSans_Medium">
                            <Link href="/" onClick={() => setMobileNav(false)}>Token</Link>
                        </li>
                        <li className="text-[#364655] text-[16px] font-openSans_Medium">
                            <Link href="/" onClick={() => setMobileNav(false)}>Gitbook</Link>
                        </li>
                        <li className="text-[#364655] text-[16px] font-openSans_Medium">
                            <p className="text-[#FE0101] text-[10px] leading-[110%] font-sfpro_500 text-center">
                                Coming Soon
                            </p>
                            <Link href="/" onClick={() => setMobileNav(false)}>Staking</Link>
                        </li>
                        <li className="text-[#364655] text-[16px] font-openSans_Medium">
                            <Link href="/ambassador-program" onClick={() => setMobileNav(false)}>Ambassador Program</Link>
                        </li>
                    </ul>

                    <div className="mt-12 flex flex-col items-center justify-center">
                        <button className="w-auto bg-[#374655] text-white relative text-[16px] font-openSans_SemiBold px-[21.3px] py-[12.5px] rounded-[48px]">
                            <Link href="/" onClick={() => setMobileNav(false)}>Buy $ULA Token</Link>
                            <div className="w-[68px] bg-white rotate-[-7deg] h-[41px] rounded-[48px] absolute top-0 right-0 -translate-y-1/2 flex flex-col items-center justify-center translate-x-1/2">
                                <p className="text-[#FE0101] text-[13px] leading-[110%] font-sfpro_500 text-center">
                                    COMING SOON!
                                </p>
                            </div>
                        </button>
                    </div>

                    <div className="mt-12 flex flex-col items-center gap-y-5">
                        <p className="text-[#364655] text-[20px] font-openSans_Bold">Links</p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Link href="https://x.com/ulalo_io" onClick={() => setMobileNav(false)}>
                                <XFooter color="#364655" />
                            </Link>
                            <Link href="https://t.me/+Zeg3Q8tRseEzM2U8" onClick={() => setMobileNav(false)}>
                                <TelegramFooter color="#364655" />
                            </Link>
                            <Link href="/" onClick={() => setMobileNav(false)}>
                                <MediumFooter color="#364655" />
                            </Link>
                            <Link href="https://discord.gg/ChhVCqe9Vp" onClick={() => setMobileNav(false)}>
                                <DiscordFooter color="#364655" />
                            </Link>
                            <Link href="https://www.youtube.com/@ULALO_IO" onClick={() => setMobileNav(false)}>
                                <YoutubeFooter color="#364655" />
                            </Link>
                            <Link href="https://www.linkedin.com/company/ulalo-io/" onClick={() => setMobileNav(false)}>
                                <LinkedinFooter color="#364655" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;


