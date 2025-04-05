import React from 'react'
import RightClickCard from './RightClickCard'

const items=[
    {
        title:"Your Commitment as an Ambassador",
        points:[
            "Collaborate closely with the ULALO team to strengthen and support our global community.",
            "Represent ULALO proudly by adding your ambassador status to bios, profiles, or social handles.",
            "Actively promote ULALO through your unique invitation link and help onboard new community members.",
            "Maintain professionalism, consistency, and alignment with the ULALO brand and values.",
        ]

    },
    {
        title:"Important notes",
        points:[
            `ULALO will verify all followers to prevent fraudulent activity. Any KOL using bots or encouraging false
registrations will be disqualified.`,
            "Any behavior that damages ULALO’s reputation will result in immediate termination and loss of all earnings.",
        ]

    },
    {
        title:"Rules of elimination",
        points:[
            `Failure to meet monthly evaluation criteria may result in contract termination, with two opportunities for
reinstatement.`,
            "Actions causing significant damage to the ULALO brand will result in immediate disqualification.",
            "Continued publication of prohibited content after three warnings will result in contract termination.",
        ]

    },
    {
        title:"Precautions",
        points:[
            "KOLs must avoid making defamatory statements about ULALO. Any violation will result in immediate termination.",
            "Participation in illegal activities under the ULALO name will result in immediate termination.",
            "Unauthorized use of the ULALO name for personal purposes will result in termination and potential recovery of all earnings.",
        ]

    },
]

const Rules = () => {
  return (
    <div className="w-full self-stretch flex flex-col gap-8 md:gap-12 lg:gap-16">
    {items.map((data, index) => (
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

export default Rules