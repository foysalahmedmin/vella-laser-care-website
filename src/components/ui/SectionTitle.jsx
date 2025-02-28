import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";

const sectionTitleVariants = cva("group mb-10 space-y-2 max-w-[48rem]", {
  variants: {
    variant: {
      center:
        "center mx-auto pb-2 px-4 text-center after:border-b-2 after:border-primary after:mx-auto",
      left: "left text-left after:mr-auto",
      right: "right text-right after:ml-auto",
      none: "",
    },
  },
  defaultVariants: {
    variant: "left",
  },
});

const SectionTitle = forwardRef(({ className, variant, ...props }, ref) => {
  return (
    <div
      className={cn(
        sectionTitleVariants({
          variant,
          className,
        }),
      )}
      ref={ref}
      {...props}
    />
  );
});
SectionTitle.displayName = "SectionTitle";

const Title = forwardRef(({ className, ...props }, ref) => {
  return (
    <h1
      className={cn("text-4xl font-bold capitalize", className)}
      {...props}
      ref={ref}
    />
  );
});
Title.displayName = "Title";

const Subtitle = forwardRef(({ className, ...props }, ref) => {
  return (
    <span
      className={cn(
        "inline-block border-primary py-1 text-sm font-bold capitalize text-primary",
        className,
      )}
      {...props}
      ref={ref}
    />
  );
});
Subtitle.displayName = "Subtitle";

const Description = forwardRef(({ className, ...props }, ref) => {
  return (
    <p
      className={cn("mt-4 text-sm font-semibold", className)}
      {...props}
      ref={ref}
    />
  );
});
Description.displayName = "Description";

export { Description, SectionTitle, Subtitle, Title };
