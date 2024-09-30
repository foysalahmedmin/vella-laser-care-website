import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const Logo = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      className={cn(
        "flex h-[2.75em] items-end gap-[.25em] text-base",
        className,
      )}
      {...props}
      ref={ref}
    >
      <img
        className="h-full object-contain"
        src="/images/partials/logo.png"
        alt=""
      />
    </div>
  );
});
Logo.displayName = "Logo";

export default Logo;
