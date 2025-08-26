"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Drop } from "@/VectorImage/Image";
import { useTranslations } from "next-intl";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const RightDropDown = () => {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState<string>("");

  const handleSelect = (month: string) => {
    setSelectedMonth(month);
    setIsOpen(false);
  };

  // Helper to get translated month for display
  const getTranslatedMonth = (month: string) => {
    return t(`rightDropDown.${month.toLowerCase()}`);
  };

  return (
    <div className="relative w-full">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-between items-center self-stretch border pl-8 pr-4 py-6 rounded-xl border-solid border-[rgba(223,233,238,0.80)] transition-all duration-200"
        whileTap={{ scale: 0.98 }}
      >
        <p className="text-[#71A5BA] font-openSans_Medium text-base leading-[100%]">
          {selectedMonth
            ? getTranslatedMonth(selectedMonth)
            : t("rightDropDown.selectMonth")}
        </p>
        <Drop />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-2 bg-white border border-[#DFE9EE] rounded-lg shadow-lg overflow-hidden"
          >
            <div className="max-h-60 overflow-y-auto">
              {months.map((month, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleSelect(month)}
                  className={`w-full text-left px-4 py-3 hover:bg-[#f8fafc] transition-colors duration-150
                    ${
                      selectedMonth === month
                        ? "bg-[#f1f5f9] text-[#364655]"
                        : "text-[#364655]"
                    }
                    ${
                      index !== months.length - 1
                        ? "border-b border-[#DFE9EE]"
                        : ""
                    }`}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  {getTranslatedMonth(month)}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RightDropDown;
