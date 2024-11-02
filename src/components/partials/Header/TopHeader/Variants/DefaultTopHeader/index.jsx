import { EmailOutline } from "@/assets/svg/icons/Email";
import { Facebook } from "@/assets/svg/icons/socials/Facebook";
import { Instagram } from "@/assets/svg/icons/socials/Instagram";
import { Twitter } from "@/assets/svg/icons/socials/Twitter";
import { YouTube } from "@/assets/svg/icons/socials/YouTube";
import LocaleSwitch from "@/components/partials/LocaleSwitch";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const DefaultTopHeader = ({ user, className }) => {
  return (
    <header className={cn("h-top-header bg-primary/15", className)}>
      <div className="container size-full">
        <div className="flex size-full items-center justify-between md:grid md:grid-cols-3">
          <div className="flex items-center gap-1">
            <EmailOutline className="text-[1.5em] leading-none text-primary" />
            <span className="inline-block text-[1em] font-medium leading-none text-muted-foreground">
              office@vellalasercare.com
            </span>
          </div>
          <div className="hidden text-center md:block">
            <span className="inline-block text-[1.125em] leading-none">
              <span className="font-semibold text-primary">10%</span> discount{" "}
              <span className="font-semibold text-primary">
                on selected products!
              </span>
            </span>
          </div>
          <div className="flex items-center justify-end gap-[1em] text-right">
            <div className="inline-flex items-center divide-x divide-primary/25 md:divide-x-2">
              <Link
                to=""
                className="px-[0.5em] leading-none text-primary first:pl-0 last:pr-0 lg:px-[1em]"
              >
                <YouTube className="text-[1.25em]" />
              </Link>
              <Link
                to=""
                className="px-[0.5em] leading-none text-primary first:pl-0 last:pr-0 lg:px-[1em]"
              >
                <Instagram className="text-[1.25em]" />
              </Link>
              <Link
                to=""
                className="px-[0.5em] leading-none text-primary first:pl-0 last:pr-0 lg:px-[1em]"
              >
                <Twitter className="text-[1.25em]" />
              </Link>
              <Link
                to=""
                className="px-[0.5em] leading-none text-primary first:pl-0 last:pr-0 lg:px-[1em]"
              >
                <Facebook className="text-[1.25em]" />
              </Link>
            </div>
            <LocaleSwitch className="text-[1.5em]" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DefaultTopHeader;
