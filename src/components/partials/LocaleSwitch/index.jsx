import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const LocaleSwitch = ({ className }) => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const lng = i18n.language === "en" ? "bn" : "en";
    i18n.changeLanguage(lng);
  };

  return (
    <div
      onClick={toggleLanguage}
      className={cn(
        "relative inline-flex h-[1em] w-[2.5em] cursor-pointer select-none overflow-hidden rounded-[2em] bg-background font-semibold shadow-inner",
        className,
      )}
    >
      <div className="absolute bottom-0 left-[0.15em] right-[0.15em] top-0 flex items-center justify-evenly rounded-[2em] transition-all duration-500">
        <span
          className={cn(
            "pt-[0.125em] text-[0.5em] leading-none text-muted-foreground opacity-0 transition-all duration-300",
            {
              "opacity-100": i18n?.language === "bn",
            },
          )}
        >
          BN
        </span>
        <span
          className={cn(
            "pt-[0.125em] text-[0.5em] leading-none text-muted-foreground opacity-0 transition-all duration-300",
            {
              "opacity-100": i18n?.language === "en",
            },
          )}
        >
          EN
        </span>
      </div>
      <div
        className={cn(
          "absolute left-[0.15em] right-[0.15em] top-1/2 z-10 mx-auto inline-block size-[0.75em] -translate-y-1/2 rounded-full bg-card transition-all duration-500",
          {
            "-translate-x-full": i18n?.language === "en",
          },
          {
            "translate-x-full": i18n?.language === "bn",
          },
        )}
      >
        <img
          className={cn(
            "absolute inset-0 inline-block size-full rotate-180 rounded-full object-cover object-center opacity-0 transition-all duration-300",
            {
              "rotate-0 opacity-100": i18n?.language === "en",
            },
          )}
          src="/images/flags/usa.svg"
        />
        <img
          className={cn(
            "absolute inset-0 inline-block size-full rotate-180 rounded-full object-cover object-center opacity-0 transition-all duration-300",
            {
              "rotate-0 opacity-100": i18n?.language === "bn",
            },
          )}
          src="/images/flags/bd.svg"
        />
      </div>
    </div>
  );
};

export default LocaleSwitch;
