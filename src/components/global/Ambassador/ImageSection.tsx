"use client"
import Image from 'next/image'
import React from 'react'

const ImageSection = () => {
  return (
    <div className='w-full text-center  aspect-[800.00/533.67] h-[210px] sm:h-[250px] md:h-[400px] lg:h-[533.671px] relative  self-stretch   '>
         <Image src={`/image/image.png`} alt={"Girl Image"} fill className='object-cover rounded-3xl'/>
    </div>
  )
}

export default ImageSection