import { EmailOutline } from "@/assets/svg/icons/Email";
import { Facebook } from "@/assets/svg/icons/Facebook";
import { Instagram } from "@/assets/svg/icons/Instagram";
import { Twitter } from "@/assets/svg/icons/Twitter";
import { YouTube } from "@/assets/svg/icons/YouTube";
import { Link } from "react-router-dom";
import LocaleSelector from "../../LocaleSelector";

const TopHeader = () => {
  return (
    <div className="h-top-header bg-primary/15">
      <div className="container grid h-full grid-cols-3 items-center justify-between">
        <div className="flex items-center gap-1">
          <EmailOutline className="text-2xl text-primary" />
          <span className="inline-block font-semibold text-muted-foreground">
            office@vellalasercare.com
          </span>
        </div>
        <div className="text-center">
          <span className="inline-block text-lg">
            Shop <span className="font-semibold text-primary">$50</span> for{" "}
            <span className="font-semibold text-primary">free shipping!</span>
          </span>
        </div>
        <div className="flex items-center justify-end gap-4 text-right">
          <div className="inline-flex items-center divide-x-2 divide-primary/50">
            <Link to="" className="px-4 text-xl text-primary">
              <YouTube />
            </Link>
            <Link to="" className="px-4 text-xl text-primary">
              <Instagram />
            </Link>
            <Link to="" className="px-4 text-xl text-primary">
              <Twitter />
            </Link>
            <Link to="" className="px-4 text-xl text-primary">
              <Facebook />
            </Link>
          </div>
          <LocaleSelector />
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
