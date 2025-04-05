import React from 'react'
import RightClickCard from './RightClickCard'

const datas = [
    {
        title:"Your Role as a ULALO Ambassador",
        description:"As an ambassador, you will play a dynamic role in growing and supporting the ULALO ecosystem. Your contributions may include:",
        points:[
            "Promoting the ULALO brand across social media and Web3 platforms",
            "Creating original and engaging content (threads, videos, graphics, etc.)",
            "Participating in community discussions and answering questions",
            "Hosting or joining events, AMAs, and campaigns",
            "Supporting regional growth and localized awareness",
            "Identifying partnership or collaboration opportunities",
        ]
    },
    // {
    //     title:"Content Creator",
    //     points:[
    //         "Create original content tailored for various platforms, including text posts, video, and promotional material.",
    //     ]
    // },
]

const RoleCreator = () => {
  return (
    <div className="w-full grid  gap-8 justify-center self-stretch">
        {datas.map((data, index) => (
            <div key={index} className="flex flex-col items-start gap-4 p-4">
                <p className="text-[#1BE866] font-sfpro_700 text-2xl leading-[160%] tracking-[-0.48px] uppercase">
                    {data.title}
                </p>
                <p className="text-[#364655] font-openSans_Regular text-[15px] leading-[160%]">
                    {data.description}
                </p>
                <RightClickCard data={data.points} />
                <p className="text-[#364655] font-openSans_Regular text-[15px] leading-[160%]">Whether you're a content creator, community builder, educator, or strategist—there’s a valuable role for you in the ULALO movement.
                </p>
            </div>
        ))}
    </div>
  )
}

export default RoleCreator
