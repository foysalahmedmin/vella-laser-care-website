import { Star } from "@/assets/svg/icons/Stars";
import CartInfo from "../../CartInfo";

const ProductCard = ({ item }) => {
  const {
    name,
    description,
    price,
    originalPrice,
    image,
    rating,
    totalReviews,
    origin,
    tags,
  } = item;
  return (
    <div className="rounded-xl bg-background">
      <div className="space-y-4 bg-primary/5 px-6 py-6">
        <div>
          <h3 className="uppercase">{name}</h3>
          <p className="font-semibold">{description}</p>
        </div>
        <div className="h-60 overflow-hidden rounded bg-background">
          <img
            className="size-full object-contain object-center"
            src={image}
            alt={name}
          />
        </div>
        <div>
          <CartInfo className="relative -mt-10" />
        </div>
        <div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1">
              <strong className="font-semibold">${price}</strong>
              <del className="font-semibold opacity-50">${originalPrice}</del>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-1">
                <Star className="text-base" />
                <div>{rating}</div> <div>({totalReviews})</div>
              </div>
              <div>
                <img
                  className="size-4 object-contain object-center"
                  src={origin?.flag}
                  alt={origin?.name}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
