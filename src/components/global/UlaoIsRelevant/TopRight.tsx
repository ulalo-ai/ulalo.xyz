import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";

const TopRight = () => {
  const t = useTranslations();

  return (
    <div className="col-span-12 md:col-span-7 grid grid-cols-12 gap-[10px]">
      <div className="col-span-12 md:col-span-6 bg-white p-5 rounded-[15px]">
        <div className="w-full flex flex-row items-center justify-between">
          <p className="text-[#364655] text-[30px] font-bold leading-[36px] uppercase">
            {t("topRight.revolutionizeHealthcareTitle")}
          </p>
          <div className="w-[54px] h-[50px] relative">
            <Image
              src={"/image/logo.png"}
              alt="ULALO"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <p className="text-[#364655] text-[14px] font-normal leading-[16.8px] mt-[16px]">
          {t("topRight.revolutionizeHealthcareDescription")}
        </p>
      </div>

      <div className="col-span-12 md:col-span-6 bg-primary rounded-[15px] p-5">
        <p className="text-[#364655] text-[30px] leading-[36px] font-bold uppercase">
          {t("topRight.joinCommunityTitle")}
        </p>
        <div className="flex flex-row items-center justify-between gap-[10px]">
          <Link
            href={"https://t.me/ulaloToken"}
            target="_blank"
            className="w-full py-[13px] mt-[16px] bg-[#364655] text-white rounded-[12px] flex flex-col items-center justify-center"
          >
            {t("topRight.joinTelegramButton")}
          </Link>
          <Link
            href={"https://discord.gg/ChhVCqe9Vp"}
            target="_blank"
            className="w-full py-[13px] mt-[16px] bg-[#364655] text-white rounded-[12px] flex flex-col items-center justify-center"
          >
            {t("topRight.joinDiscordButton")}
          </Link>
        </div>
        <p className="text-[#364655] text-[14px] font-normal leading-[16.8px] mt-[16px]">
          {t("topRight.joinCommunityDescription")}
        </p>
      </div>

      <div className="col-span-12 bg-primary p-5 rounded-[15px] relative overflow-hidden">
        <div className="w-full flex flex-row items-center justify-between">
          <p className="text-[#364655] text-[30px] font-bold leading-[36px] uppercase max-w-[131px]">
            {t("topRight.useUlaloWalletTitle")}
          </p>
          <div className="w-[54px] h-[50px] relative">
            <Image
              src={"/image/logo.png"}
              alt="ULALO"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <p className="text-[#364655] text-[14px] font-normal leading-[16.8px] mt-[16px] max-w-[375px]">
          {t("topRight.useUlaloWalletDescription")}
        </p>
      </div>
    </div>
  );
};

export default TopRight;
