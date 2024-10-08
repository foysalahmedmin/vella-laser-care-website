"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { X } from "lucide-react";
import {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useState,
} from "react";
import PortalRoot from "../portals/PortalRoot";

const drawerVariants = cva(
  "drawer-content border h-full overflow-y-auto bg-card z-[1000]",
  {
    variants: {
      size: {
        default: "w-[85vw] sm:w-[16em] md:w-[20em] lg:w-[26em]",
        sm: "w-[75vw] sm:w-[12rem] md:w-[16rem]",
        base: "w-[85vw] sm:w-[16rem] md:w-[20rem] lg:w-[26rem]",
        lg: "w-[90vw] sm:w-[16rem] md:w-[24rem] lg:w-[32rem]",
        xl: "w-[95vw] sm:w-[20rem] md:w-[32rem] lg:w-[40rem] xl:w-[48rem]",
        none: "",
      },
      side: {
        left: "mr-auto origin-left",
        right: "ml-auto origin-right",
      },
    },
    defaultVariants: {
      size: "default",
      side: "left",
    },
  },
);

// Drawer context
export const DrawerContext = createContext(null);

export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("useDrawer must be used within a <Drawer />");
  }
  return context;
};

const Drawer = forwardRef(
  (
    {
      className,
      isOpen: isOpenProp,
      setIsOpen: setIsOpenProp,
      children,
      ...props
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = useState(isOpenProp || false);

    const onOpen = () => {
      setIsOpen(true);
      if (setIsOpenProp) {
        setIsOpenProp(true);
      }
    };

    const onClose = () => {
      setIsOpen(false);
      if (setIsOpenProp) {
        setIsOpenProp(false);
      }
    };

    const onToggle = () => {
      setIsOpen((prev) => !prev);
      if (setIsOpenProp) {
        setIsOpenProp((prev) => !prev);
      }
    };

    const onOpenChange = (open) => {
      setIsOpen(open);
      if (setIsOpenProp) {
        setIsOpenProp(open);
      }
    };

    useEffect(() => {
      if (typeof isOpenProp === "boolean") {
        setIsOpen(isOpenProp);
      }
    }, [isOpenProp]);

    return (
      <DrawerContext.Provider
        value={{
          isOpen,
          onOpen,
          onClose,
          onToggle,
          onOpenChange,
        }}
      >
        <PortalRoot>
          <div
            ref={ref}
            className={cn("group/drawer drawer z-[10000]", className, {
              open: isOpen,
            })}
            {...props}
          >
            {children}
          </div>
        </PortalRoot>
      </DrawerContext.Provider>
    );
  },
);
Drawer.displayName = "Drawer";

// DrawerBackdrop Component
const DrawerBackdrop = forwardRef(({ className, ...props }, ref) => {
  const { onClose } = useDrawer();
  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget && onClose) {
          onClose();
        }
      }}
      className={cn(
        "drawer-backdrop z-[100] size-full origin-center bg-dark/50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
DrawerBackdrop.displayName = "DrawerBackdrop";

// DrawerContent Component
const DrawerContent = forwardRef(
  ({ className, variant, size, side, ...props }, ref) => {
    return (
      <div
        className={cn(drawerVariants({ size, side }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
DrawerContent.displayName = "DrawerContent";

// DrawerCloseTrigger Component
const DrawerCloseTrigger = forwardRef(
  (
    {
      onClick,
      variant = "outline",
      size = "icon",
      children = <X className="size-[1.5em]" />,
      ...props
    },
    ref,
  ) => {
    const { onClose } = useDrawer();
    return (
      <Button
        onClick={() => {
          if (onClose) {
            onClose();
          }
          if (onClick) {
            onClick();
          }
        }}
        variant={variant}
        size={size}
        ref={ref}
        {...props}
      >
        {children}
      </Button>
    );
  },
);
DrawerCloseTrigger.displayName = "DrawerCloseTrigger";

// DrawerOpenTrigger Component
const DrawerOpenTrigger = forwardRef(
  ({ onClick, children = "Open", ...props }, ref) => {
    const { onOpen } = useDrawer();
    return (
      <Button
        onClick={() => {
          if (onOpen) {
            onOpen();
          }
          if (onClick) {
            onClick();
          }
        }}
        ref={ref}
        {...props}
      >
        {children}
      </Button>
    );
  },
);
DrawerOpenTrigger.displayName = "DrawerOpenTrigger";

// DrawerToggler Component
const DrawerToggler = forwardRef(
  ({ onClick, children = "Toggle", ...props }, ref) => {
    const { onToggle } = useDrawer();
    return (
      <Button
        onClick={() => {
          if (onToggle) {
            onToggle();
          }
          if (onClick) {
            onClick();
          }
        }}
        ref={ref}
        {...props}
      >
        {children}
      </Button>
    );
  },
);
DrawerToggler.displayName = "DrawerToggler";

export {
  Drawer,
  DrawerBackdrop,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerOpenTrigger,
  DrawerToggler,
  drawerVariants,
};
