"use client";

import { CheckIcon, GlobeIcon } from "lucide-react"; // shadcn uses lucide icons
import { useTransition } from "react";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  defaultValue: string;
  items: Array<{ value: string; label: string }>;
  label: string;
};

export default function LocaleSwitcherSelect({
  defaultValue,
  items,
  label,
}: Props) {
  const [isPending, startTransition] = useTransition();

  function onChange(value: string) {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <Select defaultValue={defaultValue} onValueChange={onChange}>
      <SelectTrigger
        aria-label={label}
        className={isPending ? "pointer-events-none opacity-60" : undefined}
      >
        <GlobeIcon className="mr-2 h-5 w-5 text-slate-600" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent position="popper" className="min-w-[8rem]">
        <SelectGroup>
          {items.map((item) => (
            <SelectItem
              key={item.value}
              value={item.value}
              className="flex items-center"
            >
              <span className="mr-2 flex h-5 w-5 items-center justify-center">
                {item.value === defaultValue && (
                  <CheckIcon className="h-5 w-5 text-slate-600" />
                )}
              </span>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
