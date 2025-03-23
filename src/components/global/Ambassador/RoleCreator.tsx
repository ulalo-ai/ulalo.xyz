import React from 'react'
import RightClickCard from './RightClickCard'

const datas = [
    {
        title:"Your Role",
        points:[
            "Promote and engage with the ULALO community and brand.",
            "Increase ULALO ‘s awareness and image."
        ]
    },
    {
        title:"Content Creator",
        points:[
            "Create original content tailored for various platforms, including text posts, video, and promotional material.",
        ]
    },
]

const RoleCreator = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 justify-center self-stretch">
        {datas.map((data, index) => (
            <div key={index} className="flex flex-col items-start gap-4 p-4">
                <p className="text-[#1BE866] font-sfpro_700 text-2xl leading-[160%] tracking-[-0.48px] uppercase">
                    {data.title}
                </p>
                <RightClickCard data={data.points} />
            </div>
        ))}
    </div>
  )
}

export default RoleCreator
