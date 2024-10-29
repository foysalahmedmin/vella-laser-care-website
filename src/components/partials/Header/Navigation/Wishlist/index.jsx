import { HeartOutline } from "@/assets/svg/icons/Heart";
import { Button } from "@/components/ui/Button";

const Wishlist = () => {
  return (
    <div className="relative inline-flex items-center">
      <Button variant="none" size="none">
        <HeartOutline className="size-[1.25em]" />
      </Button>
      <span className="badge primary absolute right-1 top-1 -translate-y-1/2 translate-x-1/2">
        0
      </span>
    </div>
  );
};

export default Wishlist;
