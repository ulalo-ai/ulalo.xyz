import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const BottomLeft = () => {
  const t = useTranslations();

  return (
    <div className="col-span-12 md:col-span-5 bg-white rounded-[15px] relative p-5">
      <div className="w-full flex flex-row items-center justify-between">
        <p className="text-[#364655] text-[30px] font-bold leading-[36px] uppercase">
          {t("BottomLeft.securePrivateInYourControl")}
        </p>
        <div className="w-[80px] h-[80px] relative ">
          <Image
            src="/image/logo.png"
            alt={t("BottomLeft.logoAltText")}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="mt-[20px] flex flex-col gap-[10px]">
        <p className="text-[14px] text-[#364655] font-normal leading-[18px] max-w-[225px]">
          {t("BottomLeft.description")}
        </p>
      </div>
      <div className="absolute bottom-0 right-5 md:w-[236px] md:h-[157px] w-[100px] h-[70px]">
        <Image
          src="/image/tuumio_wallet.png"
          alt={t("BottomLeft.walletImageAltText")}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default BottomLeft;
