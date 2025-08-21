import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "./locale-switcher-select";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  // Languages in their native spelling
  const languages = [
    { value: "en", label: "English" },
    { value: "fr", label: "Français" },
    { value: "ge", label: "German" },
    { value: "es", label: "Español" },
    { value: "nl", label: "Nederlands" },
  ];

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      items={languages}
      label={t("label")}
    />
  );
}
