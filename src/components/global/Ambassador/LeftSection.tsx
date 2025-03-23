
import { Comment } from "@/VectorImage/Image";

import React from "react";
import ImageSection from "./ImageSection";
import Card from "./Card";
import PerksAmbassador from "../PerksAmbassador";
import RoleCreator from "./RoleCreator";
import Rules from "./Rules";
import LeftFormSection from "./LeftFormSection";



const LeftSection = () => {
  return (
    <div className="flex w-full flex-col items-start gap-8 md:gap-12 lg:gap-16  ">
      <div className="flex justify-between items-center self-stretch px-1 md:px-4 lg:px-8 py-4 md:py-5 lg:py-6 border-y-[#DFE9EE] border-t border-solid border-b">
        <p className="text-[#364655] font-openSans_Regular text-xs md:text-base  leading-[100%] tracking-[0.32px] uppercase">
          Ocotober 24, 2025 | POSTED BY : ulaloadm
        </p>
        <div className="flex items-center gap-2 md:gap-3 ">
          <div className="md:w-6 md:h-6 w-3 h-3 aspect-[1/1] hidden md:flex">
            <Comment />
          </div>
          <div className=" w-4 h-4 aspect-[1/1] flex md:hidden relative -top-1  right-1">
            <Comment />
          </div>
          <p className="text-[#364655] font-openSans_Regular text-base leading-[100%] tracking-[0.32px] uppercase">
            0
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start gap-4 self-stretch">
        <p className="self-stretch text-[#1BE866] font-sfpro_700 text-xl md:text-2xl  leading-[160%] tracking-[0.72px] uppercase">
          Increase your influence, earn money with us, join the ULALO Ambassador
          program
        </p>
        <div className="self-stretch text-[#364655] font-openSans_Regular text-sm md:text-base  leading-[160%] tracking-[0.48px]  flex flex-col gap-5 md:gap-6 lg:gap-8">
          <p className="">
            {" "}
            Are you passionate about blockchain and eager to make your mark in
            the Medical space? The ULALO Ambassador program offers you the
            opportunity to increase your influence and earn money by creating
            impactful content.
          </p>
          <p>
            We’re looking for creative, motivated people to join our exclusive
            ULALO Ambassador program – whether you’re an experienced KOL or a
            rising star, there’s a place for you here. Get ready to connect,
            collaborate and contribute to the future of medicine with ULALO.
          </p>
        </div>
      </div>
      
      <div className="flex items-center justify-center w-full">

<ImageSection/>
</div>
      <div className="flex w-full flex-col items-start gap-4">
          <p className='self-stretch text-[#1BE866] font-sfpro_700 text-xl md:text-2xl  leading-[160%] tracking-[-0.48px] uppercase'>How to get started</p>
          <p className='self-stretch text-[#364655] font-sfpro_400 text-lg md:text-xl  leading-6'>Would you like to register? Simply fill in the registration form below. Link:</p>
          <a href="https://forms.gle/Pp3LEnTwTAfUz61c7" target="_blank" rel="noopener noreferrer" className='text-[#0071FC] font-openSans_Regular text-lg md:text-xl  leading-6'>https://forms.gle/Pp3LEnTwTAfUz61c7</a>
          <p className='self-stretch text-[#364655] font-sfpro_400 text-lg md:text-xl  leading-6'>We will select content creators to join our preparation group on Telegram, where we will evaluate and guide candidates through the process. Those who meet our criteria will be welcomed into the official ULALO Ambassador community.</p>
      </div>
     <Card/>
     <PerksAmbassador/>
     <RoleCreator/>
     <Rules/>
     <p
  className="self-stretch text-[#364655] text-center font-sfpro_700 text-3xl md:text-5xl leading-[125%] tracking-[1.44px] uppercase"
  style={{
    WebkitTextStrokeWidth: '1.5px',
    WebkitTextStrokeColor: '#364655',
  }}
>
Add A COMMENT
</p>
    <LeftFormSection/>
    </div>
  );
};

export default LeftSection;
