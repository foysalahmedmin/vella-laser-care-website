"use client";

import useRippleEffect from "@/hooks/ui/useRippleEffect";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { forwardRef, useImperativeHandle, useRef } from "react";

const buttonVariants = cva("button", {
  variants: {
    variant: {
      default: "primary bg-accent text-accent-foreground hover:bg-accent/75",
      gradient:
        "bg-gradient-to-b from-primary to-secondary text-foreground hover:from-primary/75 hover:to-secondary/75 active:bg-gradient-to-t",
      outline:
        "border border-current bg-transparent text-foreground hover:border-accent/50 hover:bg-accent/15 hover:text-accent",
      ghost: "bg-transparent text-foreground hover:bg-accent/15",
      link: "bg-transparent text-accent underline-offset-2 hover:underline",
      none: "",
    },
    size: {
      default: "h-[2.5em] rounded-md px-[1em] text-base",
      sm: "h-8 rounded-md px-4 text-sm",
      base: "h-10 rounded-md px-4 text-base",
      lg: "h-12 rounded-lg px-6 text-base",
      icon: "size-[2.5em] rounded-md text-base",
      "icon-sm": "size-8 rounded-md text-sm",
      "icon-base": "size-10 rounded-md text-base",
      "icon-lg": "size-12 rounded-lg text-base",
      none: "",
    },
    loading: {
      left: "loading-left",
      right: "loading-right",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const Button = forwardRef(
  (
    {
      className,
      variant,
      size,
      loading,
      asChild = false,
      disabled = false,
      isLoading = false,
      ...props
    },
    ref,
  ) => {
    const buttonRef = useRef(ref?.current || null);

    useRippleEffect(buttonRef);
    useImperativeHandle(ref, () => buttonRef.current);

    const Comp = asChild ? "span" : "button";
    return (
      <Comp
        data-state={isLoading ? "loading" : null}
        disabled={isLoading || disabled}
        className={cn(
          buttonVariants({
            variant,
            size,
            loading,
            className,
          }),
        )}
        ref={buttonRef}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
