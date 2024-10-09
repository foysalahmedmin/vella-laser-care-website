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

const ModalVariants = cva(
  "modal-content border h-full overflow-y-auto bg-card z-[1000]",
  {
    variants: {
      size: {
        default: "w-full md:w-[32em] lg:w-[40em] text-base",
        sm: "w-full md:w-[32rem]",
        base: "w-full md:w-[32rem] lg:w-[40rem]",
        lg: "w-full lg:w-[40rem] xl:w-[48rem]",
        xl: "w-full xl:w-[48rem] 2xl:w-[52rem]",
        none: "",
      },
      side: {
        center: "mx-auto origin-center",
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

// Modal context
export const ModalContext = createContext(null);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a <Modal />");
  }
  return context;
};

const Modal = forwardRef(
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
      <ModalContext.Provider
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
            className={cn("group/modal modal z-[10000]", className, {
              open: isOpen,
            })}
            {...props}
          >
            {children}
          </div>
        </PortalRoot>
      </ModalContext.Provider>
    );
  },
);
Modal.displayName = "Modal";

// ModalBackdrop Component
const ModalBackdrop = forwardRef(({ className, ...props }, ref) => {
  const { onClose } = useModal();
  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget && onClose) {
          onClose();
        }
      }}
      className={cn(
        "modal-backdrop z-[100] size-full origin-center bg-dark/50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
ModalBackdrop.displayName = "ModalBackdrop";

// ModalContent Component
const ModalContent = forwardRef(
  ({ className, variant, size, side, ...props }, ref) => {
    return (
      <div
        className={cn(ModalVariants({ size, side }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
ModalContent.displayName = "ModalContent";

// ModalCloseTrigger Component
const ModalCloseTrigger = forwardRef(
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
    const { onClose } = useModal();
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
ModalCloseTrigger.displayName = "ModalCloseTrigger";

// ModalOpenTrigger Component
const ModalOpenTrigger = forwardRef(
  ({ onClick, children = "Open", ...props }, ref) => {
    const { onOpen } = useModal();
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
ModalOpenTrigger.displayName = "ModalOpenTrigger";

// ModalToggler Component
const ModalToggler = forwardRef(
  ({ onClick, children = "Toggle", ...props }, ref) => {
    const { onToggle } = useModal();
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
ModalToggler.displayName = "ModalToggler";

export {
  Modal,
  ModalBackdrop,
  ModalCloseTrigger,
  ModalContent,
  ModalOpenTrigger,
  ModalToggler,
  ModalVariants,
};
