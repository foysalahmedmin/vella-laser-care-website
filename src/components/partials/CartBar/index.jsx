import { CartOutline } from "@/assets/svg/icons/Cart";
import { Button } from "@/components/ui/Button";
import {
  Drawer,
  DrawerBackdrop,
  DrawerCloseTrigger,
  DrawerContent,
} from "@/components/ui/Drawer";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "../Cards/ProductCard";
import { useSelector } from "react-redux";

const CartBar = ({ isOpen, setIsOpen, size = "base", side = "right" }) => {
  const { products } = useSelector((state) => state.cart);
  return (
    <>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <DrawerBackdrop />
        <DrawerContent size={size} side={side}>
          <div className="space-y-6 py-6">
            <div className="space-y-4 px-6">
              <div className="flex items-center justify-between">
                <DrawerCloseTrigger className="rounded-full border-current text-xs text-accent" />
                <div className="relative inline-flex items-center">
                  <Button className="text-accent" variant="none" size="none">
                    <CartOutline className="size-6" />
                  </Button>
                  <span className="absolute right-1 top-1 inline-flex aspect-square min-h-4 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-accent text-[0.5rem] font-bold leading-none text-accent-foreground">
                    {products?.length || 0}
                  </span>
                </div>
              </div>
              <div className="text-center">
                <p>You're almost ready to order</p>
                <progress value={50} max={100} className="primary w-full" />
              </div>
            </div>
            <div className="space-y-4 px-6">
              <div>
                {products?.map((item, index) => (
                  <div
                    className="border-b-2 border-b-primary/25 py-6 first:pt-0 last:border-0 last:pb-0"
                    key={index}
                  >
                    <ProductCard item={item} index={index} variant="cart" />
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4 bg-primary/5 px-6 py-6 text-title">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-block">Subtotal:</span>
                  <span className="inline-block uppercase">
                    {products
                      ?.map((x) => x?.price * x?.quantity)
                      ?.reduce((partialSum, a) => partialSum + a, 0)}
                    BDT
                  </span>
                </div>
                {/*<div className="flex items-center justify-between">*/}
                {/*  <span className="inline-block">Delivery fee:</span>*/}
                {/*  <span className="inline-block uppercase">100BDT</span>*/}
                {/*</div>*/}
                <hr className="border-primary/25" />
                <div className="flex items-center justify-between">
                  <span className="inline-block font-semibold">Total:</span>
                  <span className="inline-block font-semibold uppercase">
                    {products
                      ?.map((x) => x?.price * x?.quantity)
                      ?.reduce((partialSum, a) => partialSum + a, 0)}
                    BDT
                  </span>
                </div>
              </div>
              <div>
                <Link to="/checkout">
                  <Button
                    onClick={() => setIsOpen(false)}
                    asChild={true}
                    className="w-full text-sm uppercase"
                  >
                    <span>PROCEED TO CHECKOUT</span>
                    <ArrowUpRight className="size-4" />
                  </Button>
                </Link>
              </div>
            </div>
            {/*<div className="space-y-4 px-6">*/}
            {/*  <span className="block font-bold">You might also like</span>*/}
            {/*  <div>*/}
            {/*    {products?.map((item, index) => (*/}
            {/*      <div*/}
            {/*        className="border-b-2 border-b-primary/25 py-6 first:pt-0 last:border-0 last:pb-0"*/}
            {/*        key={index}*/}
            {/*      >*/}
            {/*        <ProductCard item={item} variant="cart-suggest" />*/}
            {/*      </div>*/}
            {/*    ))}*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CartBar;
