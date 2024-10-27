import { locales } from "@/constants/locales";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const LocaleSwitch = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    const lng = i18n.language === "en" ? "bn" : "en";
    i18n.changeLanguage(lng);
  };

  return (
    <label className="relative inline-flex cursor-pointer items-center gap-1">
      <input
        onChange={toggleLanguage}
        checked={i18n?.language === "bn"}
        type="checkbox"
        className="switch shrink-0 text-lg"
      />
      <img
        className="inline-block size-4 shrink-0 rounded-full object-cover object-center"
        src={
          locales.find((locale) => locale?.value === i18n?.language)?.flag ||
          "en"
        }
      />
    </label>
  );
};

export default LocaleSwitch;
