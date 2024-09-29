import { Cart } from "@/assets/svg/icons/Cart";
import { Eye } from "@/assets/svg/icons/Eye";
import { Heart, HeartOutline } from "@/assets/svg/icons/Heart";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const CartInfo = ({ className }) => {
  const wishListed = false;
  return (
    <div
      className={cn(
        "flex w-full items-center justify-center gap-2 text-[1em]",
        className,
      )}
    >
      <div>
        <Button
          className="rounded-full border-2 border-border bg-card text-[0.75em] text-title shadow hover:bg-primary hover:text-primary-foreground"
          title="Wish List"
          size="icon-base"
        >
          <Cart className="size-[1.5em]" />
        </Button>
      </div>
      <div>
        <Button
          className="rounded-full border-2 border-border bg-card text-[0.75em] text-title shadow hover:bg-primary hover:text-primary-foreground"
          title="Quick View"
          size="icon-base"
        >
          <Eye className="size-[1.5em]" />
        </Button>
      </div>
      <div>
        <Button
          className="rounded-full border-2 border-border bg-card text-[0.75em] text-title shadow hover:bg-primary hover:text-primary-foreground"
          title="Share"
          size="icon-base"
        >
          {wishListed ? (
            <Heart className="size-[1.5em] text-primary-foreground" />
          ) : (
            <HeartOutline className="size-[1.5em]" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default CartInfo;
