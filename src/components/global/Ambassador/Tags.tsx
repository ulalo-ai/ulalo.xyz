import React from 'react'
 const Tag = [
    "#1MillionULA", "#BlockchainHealthcare", "#BlockchainInHealthcare", "#Community", "#CommunityFirst", "#CryptoRewards", "#BitCoin", "#ULAToken", "#ULALO", "#HealthcareInnovation", "#ula", "#Ethereum", "#MembershipProgram", "#WinnersAnnounced", "#AmbassadeursULALO", "#Cryptocurrency"
 ]

const Tags = () => {
  return (
    <div className='flex flex-col items-start gap-6 self-stretch'>
        <p className='self-stretch text-[#364655] font-sfpro_700 text-2xl  leading-[160%] tracking-[0.72px] uppercase'>Tags</p>
        <div className='flex items-start content-start gap-4 self-stretch flex-wrap'>
            {Tag.map((item, index) => (
                <div key={index} className='flex justify-center items-center gap-2.5 [background:#1BE866] px-[18px] py-3 rounded-[32px]'>
                    <p className='text-[#364655] font-openSans_Regular text-xs  leading-[100%] tracking-[0.24px] uppercase'>{item}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Tags