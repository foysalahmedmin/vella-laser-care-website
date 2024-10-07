import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { forwardRef } from "react";

const Accordion = forwardRef(
  ({ children, className, summary, ...props }, ref) => {
    return (
      <details
        className={cn("group/accordion accordion", className)}
        ref={ref}
        {...props}
      >
        {children}
      </details>
    );
  },
);
Accordion.displayName = "Accordion";

const AccordionTrigger = forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <summary ref={ref} {...props}>
        <div
          className={cn(
            "flex items-center justify-between rounded-lg bg-card transition-all duration-300",
            className,
          )}
        >
          <div className="flex-1">{children}</div>
          <ChevronRight className="transition-all duration-300 group-open/accordion:rotate-90" />
        </div>
      </summary>
    );
  },
);
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("accordion-content", className)} {...props}>
        {children}
      </div>
    );
  },
);

AccordionContent.displayName = "AccordionContent";

export { Accordion };
