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

const DefaultNavigation = ({ user, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useUser();
  return (
    <nav
      className={cn(
        "sticky top-0 z-50 h-header w-full bg-background",
        className,
      )}
    >
      <div className="size-full bg-card">
        <div className="container h-full">
          <div className="flex h-full items-center justify-between gap-[0.5em] lg:gap-[1em]">
            <div className="text-base">
              <Logo />
            </div>
            <>
              <ul className="mr-auto hidden items-center justify-center gap-[1em] lg:flex">
                <NavMenu />
              </ul>
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
                        <X className="size-[1.5rem]" />
                      </ToggleOnComp>
                      <ToggleOffComp>
                        <AlignRight className="size-[1.5rem]" />
                      </ToggleOffComp>
                    </ToggleTrigger>
                  </Toggle>
                </div>
                <ul className="flex size-full flex-col items-center justify-center gap-4">
                  <NavMenu />
                </ul>
              </div>
            </>
            <div className="flex items-center justify-end gap-4">
              <div className="flex items-center justify-end gap-2 lg:gap-4">
                <Wishlist />
                <Cart />
                {isAuthenticated && <Notification />}
                <UserAndAuthNav user={user} />
              </div>
              <div className="lg:hidden">
                <Toggle isOn={isOpen} setIsOn={setIsOpen}>
                  <ToggleTrigger>
                    <ToggleOnComp>
                      <X className="size-[1.5rem]" />
                    </ToggleOnComp>
                    <ToggleOffComp>
                      <AlignRight className="size-[1.5rem]" />
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

export default DefaultNavigation;
