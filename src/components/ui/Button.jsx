"use client";

import useRippleEffect from "@/hooks/ui/useRippleEffect";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { forwardRef, useImperativeHandle, useRef } from "react";

const buttonVariants = cva("button", {
  variants: {
    variant: {
      default: "variant-default",
      gradient: "variant-gradient",
      outline: "variant-outline",
      ghost: "variant-ghost",
      link: "variant-link",
      none: "",
    },
    size: {
      default: "size-default",
      sm: "size-sm",
      base: "size-base",
      lg: "size-lg",
      icon: "size-icon",
      "icon-sm": "size-icon-sm",
      "icon-base": "size-icon-base",
      "icon-lg": "size-icon-lg",
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
