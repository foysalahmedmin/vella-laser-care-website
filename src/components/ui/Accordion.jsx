import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useState,
} from "react";

export const AccordionContext = createContext(null);

export const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("useAccordion must be used within a <Accordion />");
  }
  return context;
};

const Accordion = forwardRef(
  (
    {
      children,
      isOpen: isOpenProp,
      setIsOpen: setIsOpenProp,
      className,
      summary,
      ...props
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = useState(isOpenProp);

    const onToggle = () => {
      setIsOpen((prev) => !prev);
      if (setIsOpenProp) {
        setIsOpenProp((prev) => !prev);
      }
    };

    useEffect(() => {
      if (typeof isOpenProp === "boolean") {
        setIsOpen(isOpenProp);
      }
    }, [isOpenProp]);

    return (
      <AccordionContext.Provider
        value={{
          isOpen,
          onToggle,
        }}
      >
        <div
          className={cn(
            "group/accordion accordion",
            { open: isOpen },
            className,
          )}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </AccordionContext.Provider>
    );
  },
);
Accordion.displayName = "Accordion";

const AccordionTrigger = forwardRef(
  ({ children, className, onClick: onClickProp, ...props }, ref) => {
    const { isOpen, onToggle } = useAccordion();
    return (
      <div>
        <div
          onClick={() => {
            onToggle();
            if (onClickProp) onClickProp();
          }}
          className={cn(
            "flex h-fit cursor-pointer items-center justify-between border-b border-current py-2 transition-all duration-300",
            className,
          )}
          ref={ref}
          {...props}
        >
          <div className="flex-1">{children}</div>
          <ChevronRight
            className={cn(
              "text-current transition-all duration-300 group-open/accordion:rotate-90",
              {
                "-rotate-90": isOpen,
                "rotate-90": !isOpen,
              },
            )}
          />
        </div>
      </div>
    );
  },
);
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("accordion-content py-2", className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionContent, AccordionTrigger };
