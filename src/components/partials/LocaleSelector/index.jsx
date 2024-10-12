import { Button } from "@/components/ui/Button";
import { Dropdown } from "@/components/ui/Dropdown";
import { locales } from "@/constants/locales";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const LocaleSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-flex">
      <Button
        onClick={() => setIsOpen(true)}
        className="size-6 rounded-full"
        size="icon-sm"
        variant="none"
      >
        <img
          className="inline-block size-full rounded-full object-cover object-center"
          src={
            locales.find((locale) => locale?.value === i18n?.language)?.flag ||
            "en"
          }
        />
      </Button>
      <Dropdown
        className="left-auto right-0 z-[60] min-w-40 origin-top-right -translate-x-0"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <ul className="divide-y">
          {locales.map((locale) => (
            <li
              className="flex cursor-pointer items-center justify-between px-4 py-2 hover:bg-primary/5"
              key={locale.value}
              onClick={() => changeLanguage(locale?.value)}
            >
              <img
                className="inline-block size-4 rounded-full object-cover object-center"
                src={locale.flag}
              />
              <span className="text-sm leading-none">{locale.label}</span>
            </li>
          ))}
        </ul>
      </Dropdown>
    </div>
  );
};

export default LocaleSelector;
