import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = forwardRef(
  (
    { children, to, className, activeClassName, pendingClassName, ...props },
    ref,
  ) => {
    return (
      <NavLink
        to={to}
        className={({ isActive, isPending }) =>
          cn("", className, {
            [cn("text-primary", activeClassName)]: isActive,
            [cn("cursor-wait opacity-50", pendingClassName)]: isPending,
          })
        }
        {...props}
        ref={ref}
      >
        {children}
      </NavLink>
    );
  },
);
ActiveLink.displayName = "ActiveLink";

export { ActiveLink };

