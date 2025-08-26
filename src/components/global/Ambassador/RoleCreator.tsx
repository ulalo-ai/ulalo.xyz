import React from "react";
import RightClickCard from "./RightClickCard";
import { useTranslations } from "next-intl";

const datas = [
  {
    title: "yourRoleAsAUlaloAmbassador",
    description: "ambassadorDescription",
    points: [
      "promotingBrand",
      "creatingContent",
      "participatingCommunity",
      "hostingEvents",
      "supportingRegionalGrowth",
      "identifyingOpportunities",
    ],
  },
];

const RoleCreator = () => {
  const t = useTranslations();

  return (
    <div className="w-full grid gap-8 justify-center self-stretch">
      {datas.map((data, index) => (
        <div key={index} className="flex flex-col items-start gap-4 p-4">
          <p className="text-[#1BE866] font-sfpro_700 text-2xl leading-[160%] tracking-[-0.48px] uppercase">
            {t(`roleCreator.${data.title}`)}
          </p>
          <p className="text-[#364655] font-openSans_Regular text-[15px] leading-[160%]">
            {t(`roleCreator.${data.description}`)}
          </p>
          <RightClickCard
            data={data.points.map((point) => t(`roleCreator.${point}`))}
          />
          <p className="text-[#364655] font-openSans_Regular text-[15px] leading-[160%]">
            {t("roleCreator.roleValueStatement")}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RoleCreator;
