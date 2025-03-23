import React from 'react'
import SubSection1 from './SubSection1'
import SubSection2 from './SubSection2'
import SubSection3 from './SubSection3'


const ShowCase = () => {
  return (
      <section className='container mx-auto max-w-[88rem]  px-5 md:px-8 flex flex-col items-center justify-center py-[48px] md:py-[100px]'>  
          <SubSection1 />
          <SubSection2 />
          <SubSection3 />
</section>
  )
}

export default ShowCase
