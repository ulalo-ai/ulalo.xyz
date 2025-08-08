import LocaleSwitcher from "@/components/language/locale-switcher";
import { useTranslations } from "next-intl";
import React from "react";

const Page = () => {
  const t = useTranslations();
  const test = t("homePage.title");
  console.log({ test });

  return (
    <>
      <div className="mt-44">
      <LocaleSwitcher />
        <p>{test}</p>
        </div>
    </>
  );
};

export default Page;
