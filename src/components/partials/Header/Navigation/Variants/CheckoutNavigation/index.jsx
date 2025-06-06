import Logo from "@/components/partials/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import useUser from "@/redux/slices/user-slice/useUser.js";
import { ArrowUpRight, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import UserAndAuthNav from "../../UserAndAuthNav";

const CheckoutNavigation = ({ className }) => {
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
          <div className="grid h-full grid-cols-3 items-center justify-between gap-[0.5em] lg:gap-[1em]">
            <div className="mr-auto">
              <Link
                className="flex items-center justify-start gap-[0.25em] text-title/85 hover:text-primary"
                to={"/shop"}
              >
                <ChevronLeft className="size-[1em]" strokeWidth={3} />
                <span className="font-medium leading-none">
                  Continue shopping
                </span>
              </Link>
            </div>
            <div className="mx-auto">
              <div className="flex items-center justify-center gap-[0.5em] text-title">
                <Logo /> <span className="font-medium">Secure Checkout</span>
              </div>
            </div>
            <div className="ml-auto">
              {isAuthenticated ? (
                <UserAndAuthNav />
              ) : (
                <div className="flex items-center justify-end gap-[0.5em] text-title/85">
                  <span className="font-medium">Already have an account? </span>
                  <Link to="/authentication/sign-in">
                    <Button asChild={true} size="sm">
                      <span>Login</span> <ArrowUpRight className="size-[1em]" />
                    </Button>
                  </Link>
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
