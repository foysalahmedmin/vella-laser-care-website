import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const Logo = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      className={cn(
        "flex h-[1.75em] items-end gap-[.25em] text-base",
        className,
      )}
      {...props}
      ref={ref}
    >
      {/* <img className="h-full object-contain" src={logo} alt="" /> */}
      <span className="text-[1.25em]">AA</span>
      <span className="text-[1.25em]">Drive</span>
    </div>
  );
});
Logo.displayName = "Logo";

export default Logo;
