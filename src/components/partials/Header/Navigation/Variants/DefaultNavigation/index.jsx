"use client";

import Logo from "@/components/partials/Logo";
import {
  Toggle,
  ToggleOffComp,
  ToggleOnComp,
  ToggleTrigger,
} from "@/components/ui/Toggle";
import { cn } from "@/lib/utils";
import { AlignRight, X } from "lucide-react";
import { useState } from "react";
import Cart from "../../Cart";
import NavMenu from "../../NavMenu";
import SearchBar from "../../SearchBar";
import UserAndAuthNav from "../../UserAndAuthNav";
import Wishlist from "../../Wishlist";
import Notification from "@/components/partials/Header/Navigation/Notification/index.jsx";

const DefaultNavigation = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      className={cn("sticky top-0 z-50 h-header w-full border-y bg-background")}
    >
      <div className="size-full bg-card">
        <div className="container h-full">
          <div className="flex h-full items-center justify-between gap-2 lg:gap-4">
            <div>
              <Logo />
            </div>
            <>
              {/* Desktop Navigation Menu */}
              <ul className="mr-auto hidden items-center justify-center gap-4 lg:flex">
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
            <div className="flex items-center justify-end gap-4">
              <div className="flex items-center justify-end gap-2 lg:gap-4">
                <SearchBar className="static w-full lg:relative lg:w-auto" />
                <Wishlist />
                <Cart />
                <Notification />
                <UserAndAuthNav user={user} />
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

export default DefaultNavigation;
