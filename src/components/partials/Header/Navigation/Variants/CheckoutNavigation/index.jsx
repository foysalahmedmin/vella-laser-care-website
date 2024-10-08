"use client";

import Logo from "@/components/partials/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ArrowUpRight, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import UserAndAuthNav from "../../UserAndAuthNav";

const CheckoutNavigation = ({ user }) => {
  return (
    <nav
      className={cn("sticky top-0 z-50 h-header w-full border-y bg-background")}
    >
      <div className="size-full bg-card">
        <div className="container h-full">
          <div className="grid h-full grid-cols-3 items-center justify-between gap-2 lg:gap-4">
            <div className="mr-auto">
              <Link
                className="flex items-center justify-start gap-1 hover:text-primary"
                to={"/shop"}
              >
                <ChevronLeft className="size-4" />
                <span className="font-semibold">Continue shopping</span>
              </Link>
            </div>
            <div className="mx-auto">
              <div className="flex items-center justify-center gap-2 text-title">
                <Logo /> <span className="font-semibold">Secure Checkout</span>
              </div>
            </div>
            <div className="ml-auto">
              {Object.keys(user)?.length > 0 ? (
                <UserAndAuthNav user={user} />
              ) : (
                <div className="flex items-center justify-end gap-2 text-title">
                  <span>Already have an account? </span>
                  <Button asChild={true} size="sm">
                    <span>Login</span> <ArrowUpRight className="size-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CheckoutNavigation;
