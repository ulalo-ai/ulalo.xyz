import { Right } from '@/VectorImage/Image'
import React from 'react'

interface RightClickCardProps {
    data: string[]
}

const RightClickCard: React.FC<RightClickCardProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-start gap-3">
        {data.map((item, index) => (
            <div key={index} className="flex items-center gap-2 md:gap-3">
                <div className='w-[12.02px] h-3'>

                <Right />
                </div>
                <p className="text-[#364655] font-openSans_Regular text-[15px] leading-[160%]">
                    {item}
                </p>
            </div>
        ))}
    </div>
  )
}

export default RightClickCard
