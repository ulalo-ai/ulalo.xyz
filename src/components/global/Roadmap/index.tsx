import { motion } from 'motion/react';
import React, { useRef, MouseEvent } from 'react'

const Roadmap = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = React.useState(false);
    const [startX, setStartX] = React.useState(0);
    const [scrollLeft, setScrollLeft] = React.useState(0);

    const handleMouseDown = (e: MouseEvent) => {
        if (!scrollRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <main id='roadmap' className='bg-white py-[100px]'>
            <section className='container mx-auto max-w-[88rem] lg:px-8 flex flex-col items-start justify-start gap-[100px]'>
                <p className='text-primary text-center w-full text-[32px] md:text-[64px] font-bold leading-[125%] uppercase'>Roadmap</p>
                <div
                    ref={scrollRef}
                    className='w-full overflow-x-auto custom-scrollbar cursor-grab active:cursor-grabbing'
                    style={{
                        scrollbarWidth: 'thin',
                        msOverflowStyle: 'none',
                        userSelect: 'none'
                    }}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseUp}
                >
                    <div className='min-w-[1500px] h-auto pt-[120px] pb-[150px]' >
                        <div className=' w-full h-[11px] bg-secondary/10 rounded-[10px] relative my-[200px] ' >
                            <div className='w-[55%] h-full bg-primary/20 rounded-[10px]' />

                            <RoadmapItemTop index={1} title='<ul className="list-disc ">
  <li>The Origins</li>
</ul> ' date='Jan 2023' className='left-[0%]' />
                            <RoadmapItemTop index={3} title='<ul className="list-disc ">
  <li>Refined the idea through comprehensive research to understand real-life patient needs globally.</li>
  <li>Conducted thorough competitive benchmarking to identify market gaps and opportunities.</li>
</ul> ' date='Dec 2023' className='left-[11%]' />
                            <RoadmapItemTop index={5}
                                title='<ul className="list-disc ">
                                <li>Token Launch within the Ethereum platform, Smart contract audit and Security</li>
                                </ul>' date='June 2024' className='left-[29%]' />
                            <RoadmapItemTop index={7} title='<ul className="list-disc ">
                                <li>Development and Testing of Beta 1 with essential functionalities.</li>
                                <li>Ambassador Program launch.</li>
                                </ul>' date='Jan 2025' className='left-[48%]' />
                            <RoadmapItemTop index={9} title="<ul className='list-disc '>
                                <li>Cross-chain and multi-chain interoperability for testnet</li>
                                <li>Partnership with launchpads and community growth efforts</li>
                                <li>Launch of $ULA token's investor round.</li>
                            </ul>" isGray={true} date='April 2025' className='left-[68%]' />
                            <RoadmapItemTop index={11} title='Launching of ULALO L1 MainNet.' date='Sep 2025' className='left-[88%]' isGray={true} />
                            {/* <RoadmapItemTop title='Integration With Ethereum' date='Jan 2023' className='left-[60%]' /> */}

                            <RoadmapItemBottom index={2} title=' <ul><li>Platform Alpha Released</li></ul>  ' date='March 2023' className='left-[3%]' />
                            <RoadmapItemBottom index={4} title='<ul><li>Graduation from the The Founder Institute Sillicon Valley accelerator</li></ul>  ' date='April 2024' className='left-[20%]' />
                            <RoadmapItemBottom index={6} title='<ul><li>Finalizing the Technical architecture, laying a solid foundation for the development of a user-centric solution.</li></ul>  ' date='Sep 2024' className='left-[38%]' />
                            <RoadmapItemBottom index={8} title='<ul><li>Launching of ULALO L1 TestNet and call for for beta testing.</li></ul>  ' date='March 2025' className='left-[55%]' />
                            <RoadmapItemBottom index={10} title='TGE and Listing on DEX and CEX Platforms' date='June 2025' className='left-[74%]' isGray={true} />
                            {/* <RoadmapItemBottom index={12} title='Launching of ULALO L1 MainNet.' date='April 2025' className='left-[92%]' isGray={true} /> */}

                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Roadmap



const RoadmapItemTop = ({ index, className, title, date, isGray = false }: { index: number, className?: string, title: string, date: string, isGray?: boolean }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 5 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={` absolute bottom-0 translate-y-[5px]  flex flex-col items-center justify-start ${className}`}>
            <div className={`w-[1px] h-[96px]  ${isGray ? 'bg-[#DFE9EE]' : 'bg-primary'}`} ></div>
            <div className={`w-[20px] h-[20px]  rounded-full border border-solid border-black ${isGray ? 'bg-[#DFE9EE]' : 'bg-primary'}`} />

            <div className='w-[240px] h-auto rounded-lg absolute top-0 left-[20px] -translate-y-[80%] flex flex-col items-start gap-5 '>
                <div className={` text-secondary  text-[12px] md:text-[16px] font-normal leading-[24px] px-2 md:px-5 py-[10px] md:py-[20px] text-left   rounded-lg ${isGray ? 'bg-[#DFE9EE]' : 'bg-primary'}`} dangerouslySetInnerHTML={{ __html: title }} />
                <p className='text-[#000]  text-[16px] md:text-[24px] font-normal leading-[15px] tracking-normal'>{date}</p>
            </div>
        </motion.div>
    )
}



const RoadmapItemBottom = ({ index, className, title, date, isGray = false }: { index: number, className?: string, title: string, date: string, isGray?: boolean }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: -5 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`absolute top-0 -translate-y-[5px]  flex flex-col items-center justify-start ${className}`}>
            <div className={`w-[20px] h-[20px]  rounded-full border border-solid border-black ${isGray ? 'bg-[#DFE9EE]' : 'bg-primary'}`} />
            <div className={`w-[1px] h-[96px]  ${isGray ? 'bg-[#DFE9EE]' : 'bg-primary'}`} ></div>
            <div className='w-[230px] h-auto rounded-lg absolute bottom-0 left-[20px] translate-y-[80%] flex flex-col items-start gap-5 '>
                <div className={` text-secondary  text-[12px] md:text-[16px] font-normal leading-[24px] px-2 md:px-5 py-[10px] md:py-[20px] text-left   rounded-lg ${isGray ? 'bg-[#DFE9EE]' : 'bg-primary'}`} dangerouslySetInnerHTML={{ __html: title }} />
                <p className='text-[#000] text-[16px] md:text-[24px] font-normal leading-[15px] tracking-normal'>{date}</p>
            </div>
        </motion.div>
    )
}
