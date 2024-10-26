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

const HomeNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useUser();
  return (
    <nav className={cn("sticky top-0 z-50 h-header w-full bg-background")}>
      <div className="size-full bg-primary/5">
        <div className="container h-full">
          <div className="flex h-full items-center justify-between gap-2 lg:grid lg:grid-cols-12 lg:gap-4">
            <div className="lg:col-span-3">
              <Logo />
            </div>
            <>
              {/* Desktop Navigation Menu */}
              <ul className="mx-auto hidden items-center justify-center gap-[1em] lg:col-span-6 lg:flex lg:text-xs xl:text-base">
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
                        <X />
                      </ToggleOnComp>
                      <ToggleOffComp>
                        <AlignRight />
                      </ToggleOffComp>
                    </ToggleTrigger>
                  </Toggle>
                </div>
                <ul className="flex size-full flex-col items-center justify-center gap-4">
                  <NavMenu />
                </ul>
              </div>
            </>
            <div className="flex items-center justify-end gap-4 lg:col-span-3">
              <div className="flex items-center justify-end gap-2 lg:gap-4">
                {/*<SearchBar className="static w-full lg:relative lg:w-auto" />*/}
                <Wishlist />
                <Cart />
                {isAuthenticated && <Notification />}
                <UserAndAuthNav />
              </div>
              <div className="lg:hidden">
                <Toggle isOn={isOpen} setIsOn={setIsOpen}>
                  <ToggleTrigger>
                    <ToggleOnComp>
                      <X />
                    </ToggleOnComp>
                    <ToggleOffComp>
                      <AlignRight />
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
