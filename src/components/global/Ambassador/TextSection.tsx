import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'



const TextSection = () => {
  return (
      <section className="container mx-auto max-w-[88rem] px-5 md:px-6 py-8 md:py-12 lg:py-16 lg:px-8 flex flex-col md:grid grid-cols-12 md:gap-x-12 lg:gap-x-16 gap-y-6">
        <div className='col-span-8 order-2 md:order-none'>
       <LeftSection/>

        </div>
        <div className='col-span-4 order-1 md:order-none'>
          <RightSection/>
        </div>
    </section>
  )
}

export default TextSection