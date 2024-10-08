"use client";

import { CartOutline } from "@/assets/svg/icons/Cart";
import CartBar from "@/components/partials/CartBar";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

const Cart = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="relative inline-flex items-center">
        <Button onClick={() => setIsOpen(true)} variant="none" size="none">
          <CartOutline className="size-6" />
        </Button>
        <span className="absolute right-1 top-1 inline-flex aspect-square min-h-4 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-primary text-[0.5rem] font-bold leading-none text-primary-foreground">
          0
        </span>
      </div>
      <CartBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Cart;
