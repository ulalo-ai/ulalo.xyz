"use client"
import React, { useEffect, useState } from 'react'



const data = [
    "Blockchain",
    "EVENTS",
    "ICO",
    "Media",
    "Membership Program",
    "ULA Token",

]

const Herosection = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Set initial value
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array since we only want this to run once on mount

    return (
        <section className='w-full relative bg-[url("/image/ambassadorHerosection.png")] bg-cover bg-center bg-no-repeat h-[100vh]'>
            <div className='absolute top-0 left-0 w-full h-full  z-10'
                style={{
                    background: "linear-gradient(256deg, rgba(27, 232, 102, 0.40) 28.02%, #1BE866 78%)",
                }}>
                <div className='container max-w-[88rem] px-5 lg:px-8 mx-auto h-[calc(100vh-150px)]    relative z-20  mt-[120px] lg:mt-[150px] '>
                    <div className='flex flex-row flex-wrap items-center justify-start gap-4 '>

                        {data.map((item, index) => (

                            <Label key={index} title={item} />
                        ))}
                    </div>

                    <div className='text-[#364655]  text-[40px] md:text-[88px] font-sfpro_700 leading-[110%] mt-[50px] max-w-[1200px] uppercase tracking-[0.96px]'
                        style={{
                            WebkitTextStrokeWidth: isMobile ? "1px" : "6px",
                            WebkitTextStrokeColor: "#364655",
                            paintOrder: "stroke fill",

                        }}
                    >
                        ULALO Ambassador Program
                    </div>

                    <div className='absolute bottom-0 opacity-40  z-20 left-0 text-[#FFF]  text-[40px] md:text-[88px] font-sfpro_700 leading-[110%] mt-[50px] max-w-[1200px] uppercase tracking-[0.96px]'
                        style={{
                            WebkitTextStrokeWidth: isMobile ? "1px" : "6px",
                            WebkitTextStrokeColor: "#FFF",
                            paintOrder: "stroke fill",

                        }}
                    >
                        ULALO Ambassador Program
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Herosection


// background: linear - gradient(256deg, rgba(27, 232, 102, 0.40) 28.02 %, #1BE866 78 %), 


const Label = ({ title }: { title: string }) => {
    return (
        <div className='flex flex-col rounded-[32px] items-center bg-white justify-center px-[18px] py-[12px] text-[#364655] text-[18px] font-openSans_Regular leading-[110%] uppercase tracking-[0.36px]'>
            {title}
        </div>
    )
}