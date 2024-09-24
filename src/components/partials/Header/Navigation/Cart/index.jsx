"use client";

import { ActiveLink } from "@/components/ui/ActiveLink";
import { ShoppingBag } from "lucide-react";

const Cart = ({ user }) => {
  return (
    <>
      <ActiveLink to={"/cart"} className="hover:text-primary">
        <ShoppingBag />
      </ActiveLink>
    </>
  );
};

export default Cart;
