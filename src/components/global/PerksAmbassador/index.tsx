import React from "react";
import { useTranslations } from "next-intl";

const dataset = [
  {
    titleKey: "advanceKolTrainingTitle",
    descriptionKey: "advanceKolTrainingDescription",
  },
  {
    titleKey: "airdropsTitle",
    descriptionKey: "airdropsDescription",
  },
  {
    titleKey: "teamBuildingTitle",
    descriptionKey: "teamBuildingDescription",
  },
  {
    titleKey: "monthlyPaymentTitle",
    descriptionKey: "monthlyPaymentDescription",
  },
  {
    titleKey: "giveawaysTitle",
    descriptionKey: "giveawaysDescription",
  },
];

const PerksAmbassador = () => {
  const t = useTranslations();

  return (
    <div className="flex w-full flex-col items-start gap-4">
      <p className="self-stretch text-[#1BE866] font-sfpro_700 text-2xl  leading-[160%] tracking-[0.72px] uppercase">
        {t("perksAmbassador.perksOfJoining")}
      </p>
      <div className="flex flex-wrap items-stretch gap-3 md:gap-4 self-stretch">
        {dataset.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-2 flex-[1_1_250px] border p-4 rounded-3xl border-solid border-[#CCC] max-w-[400px]"
          >
            <p className="self-stretch text-[#364655] font-sfpro_700 text-lg leading-[160%] tracking-[0.54px] uppercase">
              {t(`perksAmbassador.${item.titleKey}`)}
            </p>
            <p className="self-stretch text-[#364655] font-sfpro_400 text-base leading-[160%]">
              {t(`perksAmbassador.${item.descriptionKey}`)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerksAmbassador;
