import React from "react";
import RightClickCard from "./RightClickCard";
import { useTranslations } from "next-intl";

const items = [
  {
    titleKey: "yourCommitmentAsAnAmbassador",
    pointsKeys: [
      "yourCommitmentPoint1",
      "yourCommitmentPoint2",
      "yourCommitmentPoint3",
      "yourCommitmentPoint4",
    ],
  },
  {
    titleKey: "importantNotes",
    pointsKeys: ["importantNotesPoint1", "importantNotesPoint2"],
  },
  {
    titleKey: "rulesOfElimination",
    pointsKeys: [
      "rulesOfEliminationPoint1",
      "rulesOfEliminationPoint2",
      "rulesOfEliminationPoint3",
    ],
  },
  {
    titleKey: "precautions",
    pointsKeys: ["precautionsPoint1", "precautionsPoint2", "precautionsPoint3"],
  },
];

const Rules = () => {
  const t = useTranslations();

  return (
    <div className="w-full self-stretch flex flex-col gap-8 md:gap-12 lg:gap-16">
      {items.map((data, index) => (
        <div key={index} className="flex flex-col items-start gap-4 p-4">
          <p className="text-[#1BE866] font-sfpro_700 text-2xl leading-[160%] tracking-[-0.48px] uppercase">
            {t(`rules.${data.titleKey}`)}
          </p>
          <RightClickCard
            data={data.pointsKeys.map((key) => t(`rules.${key}`))}
          />
        </div>
      ))}
    </div>
  );
};

export default Rules;
