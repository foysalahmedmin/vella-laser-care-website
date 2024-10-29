import { CartOutline } from "@/assets/svg/icons/Cart";
import CartBar from "@/components/partials/CartBar";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { useSelector } from "react-redux";

const Cart = ({ user }) => {
  const { products } = useSelector((state) => state.cart);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="relative inline-flex items-center">
        <Button onClick={() => setIsOpen(true)} variant="none" size="none">
          <CartOutline className="size-[1.25em]" />
        </Button>
        <span className="badge primary absolute right-1 top-1 -translate-y-1/2 translate-x-1/2">
          {products?.length || 0}
        </span>
      </div>
      <CartBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Cart;
