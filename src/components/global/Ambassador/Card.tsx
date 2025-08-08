import { Right } from "@/VectorImage/Image";
import React from "react";
import { useTranslations } from "next-intl";

const datas = [
  {
    title: "exclusiveAccess",
    description: "exclusiveAccessDescription",
  },
  {
    title: "empowerTheFutureOfHealthcare",
    description: "empowerTheFutureOfHealthcareDescription",
  },
  {
    title: "expandYourNetwork",
    description: "expandYourNetworkDescription",
  },
  {
    title: "skillDevelopment",
    description: "skillDevelopmentDescription",
  },
  {
    title: "rewardsAndIncentives",
    description: "rewardsAndIncentivesDescription",
  },
  {
    title: "performanceBonuses",
    description: "performanceBonusesDescription",
  },
];

const Card = () => {
  const t = useTranslations();

  return (
    <div className="flex flex-col items-center gap-8 self-stretch">
      <div className="flex flex-col items-start gap-4 self-stretch">
        <p className="self-stretch text-[#1BE866] font-sfpro_700 text-2xl leading-[160%] tracking-[-0.48px] uppercase">
          {t("card.whyUlalo")}
        </p>
        <p className="self-stretch text-[#364655] font-openSans_Regular text-[15px] leading-6">
          {t("card.introText")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-start gap-8 self-stretch">
        {datas.map((data, index) => (
          <div key={index} className="flex items-start gap-2 flex-[1_0_0]">
            <Right />
            <div className="flex flex-col items-start gap-2 flex-[1_0_0]">
              <p className="self-stretch text-[#364655] font-sfpro_700 text-lg leading-[160%] tracking-[0.54px] uppercase">
                {t(`card.${data.title}`)}
              </p>
              <p className="self-stretch text-[#364655] font-openSans_Regular text-[15px] leading-[160%]">
                {t(`card.${data.description}`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;