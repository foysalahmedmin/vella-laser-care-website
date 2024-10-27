import { EmailOutline } from "@/assets/svg/icons/Email";
import { Facebook } from "@/assets/svg/icons/socials/Facebook";
import { Instagram } from "@/assets/svg/icons/socials/Instagram";
import { Twitter } from "@/assets/svg/icons/socials/Twitter";
import { YouTube } from "@/assets/svg/icons/socials/YouTube";
import LocaleSwitch from "@/components/partials/LocaleSwitch";
import { Link } from "react-router-dom";

const DefaultTopHeader = () => {
  return (
    <header className="h-top-header bg-primary/15">
      <div className="container size-full">
        <div className="flex size-full items-center justify-between md:grid md:grid-cols-3">
          <div className="flex items-center gap-1">
            <EmailOutline className="text-xl text-primary md:text-2xl" />
            <span className="inline-block text-sm font-semibold text-muted-foreground md:text-base">
              office@vellalasercare.com
            </span>
          </div>
          <div className="hidden text-center md:block">
            <span className="inline-block text-lg">
              Shop <span className="font-semibold text-primary">$50</span> for{" "}
              <span className="font-semibold text-primary">free shipping!</span>
            </span>
          </div>
          <div className="flex items-center justify-end gap-4 text-right">
            <div className="inline-flex items-center divide-x-2 divide-primary/50">
              <Link to="" className="px-2 text-xl text-primary lg:px-4">
                <YouTube />
              </Link>
              <Link to="" className="px-2 text-xl text-primary lg:px-4">
                <Instagram />
              </Link>
              <Link to="" className="px-2 text-xl text-primary lg:px-4">
                <Twitter />
              </Link>
              <Link to="" className="px-2 text-xl text-primary lg:px-4">
                <Facebook />
              </Link>
            </div>
            {/* <LocaleSelector /> */}
            <LocaleSwitch />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DefaultTopHeader;
