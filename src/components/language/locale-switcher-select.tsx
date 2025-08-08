"use client";

import { CheckIcon, GlobeIcon } from "lucide-react";
import { useTransition, useState } from "react";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

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
  const [open, setOpen] = useState(false);

  const currentItem = items.find((item) => item.value === defaultValue);

  function onChange(value: string) {
    const locale = value as Locale;
    setOpen(false);
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            aria-label={label}
            disabled={isPending}
            className={`
            !aspect-square
            h-fit
            px-3 
            text-sm
            font-normal
            flex-col
            items-center
            justify-center
            rounded-full
            shadow-md
            ${isPending ? "opacity-60" : ""}
          `}
          >
            <GlobeIcon className="h-4 w-4 text-muted-foreground" />
            <span className="truncate uppercase text-xs text-black font-semibold">
              {currentItem?.value || "Select language"}
            </span>
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-80 p-1" align="start" sideOffset={4}>
          <div className="max-h-80 overflow-y-auto">
            <div className="grid gap-0.5">
              {items.map((item) => (
                <button
                  key={item.value}
                  onClick={() => onChange(item.value)}
                  className={`
                  flex 
                  items-center 
                  justify-between 
                  w-full 
                  px-3 
                  py-2.5 
                  text-left 
                  text-sm 
                  rounded-md 
                  transition-colors 
                  font-medium
                  ${
                    item.value === defaultValue
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-accent/50"
                  }
                `}
                >
                  <span className="truncate pr-2">{item.label}</span>
                  {item.value === defaultValue && (
                    <CheckIcon className="h-4 w-4 flex-shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
