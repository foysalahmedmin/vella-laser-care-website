import Notification from "@/components/partials/Header/Navigation/Notification/index.jsx";
import Logo from "@/components/partials/Logo";
import {
  Toggle,
  ToggleOffComp,
  ToggleOnComp,
  ToggleTrigger,
} from "@/components/ui/Toggle";
import { cn } from "@/lib/utils";
import useUser from "@/redux/slices/user-slice/useUser.js";
import { AlignRight, X } from "lucide-react";
import { useState } from "react";
import Cart from "../../Cart";
import NavMenu from "../../NavMenu";
import UserAndAuthNav from "../../UserAndAuthNav";
import Wishlist from "../../Wishlist";

const HomeNavigation = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useUser();
  return (
    <nav
      className={cn(
        "sticky top-0 z-50 h-header w-full bg-background",
        className,
      )}
    >
      <div className="size-full bg-primary/5">
        <div className="container h-full">
          <div className="flex h-full items-center justify-between gap-[1em] lg:grid lg:grid-cols-12 lg:gap-[1.5em]">
            <div className="text-base lg:col-span-3">
              <Logo />
            </div>
            <>
              {/* Desktop Navigation Menu */}
              <ul className="mx-auto hidden items-center justify-center gap-[1em] lg:col-span-6 lg:flex lg:text-[0.875em] xl:text-[1em]">
                <NavMenu />
              </ul>

              {/* Mobile Navigation Menu */}
              <div
                className={cn(
                  "fixed inset-0 z-50 h-screen w-screen origin-top bg-card px-container py-4 transition-all duration-300 lg:hidden",
                  {
                    "visible scale-y-100 opacity-100": isOpen,
                    "invisible scale-y-0 opacity-0": !isOpen,
                  },
                )}
              >
                <div className="flex items-center justify-end">
                  <Toggle isOn={isOpen} setIsOn={setIsOpen}>
                    <ToggleTrigger>
                      <ToggleOnComp>
                        <X className="size-[1.25em]" />
                      </ToggleOnComp>
                      <ToggleOffComp>
                        <AlignRight className="size-[1.25em]" />
                      </ToggleOffComp>
                    </ToggleTrigger>
                  </Toggle>
                </div>
                <ul className="flex size-full flex-col items-center justify-center gap-[1em]">
                  <NavMenu />
                </ul>
              </div>
            </>
            <div className="flex items-center justify-end gap-[1em] lg:col-span-3">
              <div className="flex items-center justify-end gap-[0.5em]">
                {/*<SearchBar className="static w-full lg:relative lg:w-auto" />*/}
                <Wishlist />
                <Cart />
                {isAuthenticated && <Notification />}
              </div>
              <div>
                <UserAndAuthNav />
              </div>
              <div className="lg:hidden">
                <Toggle isOn={isOpen} setIsOn={setIsOpen}>
                  <ToggleTrigger>
                    <ToggleOnComp>
                      <X className="size-[1.25em]" />
                    </ToggleOnComp>
                    <ToggleOffComp>
                      <AlignRight className="size-[1.25em]" />
                    </ToggleOffComp>
                  </ToggleTrigger>
                </Toggle>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavigation;
