import React from 'react'

const dataset = [
  {
    title: 'Advance KOL Training',
    description:
      'Receive advanced training to enhance your influence.'
  },
  {
    title: 'Airdrops',
    description:
      'Participate in special airdrop events.'
  },
  {
    title: 'Team Building',
    description:
      'Join in on team-building activities to connect with other influencers.'
  },
  {
    title: 'Bi-Weekly Payment',
    description:
      'Enjoy the benefit of bi-weekly payments for your contributions.'
  },
  {
    title: 'Giveaways',
    description:
      'Access to exclusive giveaways.'
  },
]

const PerksAmbassador = () => {
  return (
    <div className='flex w-full flex-col items-start gap-4'>
        <p className='self-stretch text-[#1BE866] font-sfpro_700 text-2xl  leading-[160%] tracking-[0.72px] uppercase'>Perks of Joining:</p>
        <div className="flex flex-wrap items-stretch gap-3 md:gap-4 self-stretch">
  {dataset.map((item, index) => (
    <div 
      key={index} 
      className="flex flex-col items-start gap-2 flex-[1_1_250px] border p-4 rounded-3xl border-solid border-[#CCC] max-w-[400px]"
    >
      <p className="self-stretch text-[#364655] font-sfpro_700 text-lg leading-[160%] tracking-[0.54px] uppercase">
        {item.title}
      </p>
      <p className="self-stretch text-[#364655] font-sfpro_400 text-base leading-[160%]">
        {item.description}
      </p>
    </div>
  ))}
</div>

    </div>
  )
}

export default PerksAmbassador