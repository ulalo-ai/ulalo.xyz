import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const MiddleLeft = () => {
  const t = useTranslations();

  return (
    <div className="col-span-12 md:col-span-5 bg-white rounded-[15px]  p-5">
      <div className="w-full flex flex-row items-center justify-between">
        <p className="text-[#364655] text-[30px] font-bold leading-[36px] uppercase">
          {t("middleLeft.ourApproach")}
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
      <div className="mt-[30px] flex flex-col gap-[10px]">
        <p className="text-[14px] text-[#364655] font-normal leading-[18px]">
          {t("middleLeft.paragraph1")}
        </p>
        <p className="text-[14px] text-[#364655] font-normal leading-[18px]">
          {t("middleLeft.paragraph2")}
        </p>
      </div>
    </div>
  );
};

export default MiddleLeft;
