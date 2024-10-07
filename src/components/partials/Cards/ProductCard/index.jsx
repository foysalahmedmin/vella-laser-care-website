import { Cart } from "@/assets/svg/icons/Cart";
import { Star } from "@/assets/svg/icons/Stars";
import { Button } from "@/components/ui/Button";
import CartInfo from "../../CartInfo";

const ProductCard = ({ item, variant = "default" }) => {
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
    <>
      {variant === "default" && (
        <div className="rounded-xl bg-background">
          <div className="space-y-4">
            <div className="relative h-60 overflow-hidden rounded-md border bg-background">
              <img
                className="size-full object-contain object-center"
                src={image}
                alt={name}
              />
              <div className="absolute left-2 right-2 top-2 flex items-center justify-between gap-2">
                {tags.length > 0 && (
                  <div className="mt-0 flex items-center gap-2">
                    {tags?.map((item, index) => (
                      <span
                        key={index}
                        className="inline-block rounded bg-green-500 px-1 text-xs font-semibold text-light"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
                <Button
                  className="ml-auto rounded-full text-[0.65em]"
                  title="Wish List"
                  size="icon"
                >
                  <Cart className="size-[1.25em]" />
                </Button>
              </div>
            </div>
            <div>
              <div className="mb-2">
                <h5 className="uppercase">{name}</h5>
                <p className="text-sm font-semibold">{description}</p>
              </div>
              <div className="mb-1 flex items-center gap-1">
                <div className="flex items-center gap-1 text-sm">
                  <Star className="text-base text-yellow-500" />
                  <div>{rating}</div> <div>({totalReviews})</div>
                </div>
                {Object.keys(origin)?.length > 0 && (
                  <div>
                    <img
                      className="size-4 object-contain object-center"
                      src={origin?.flag}
                      alt={origin?.name}
                    />
                  </div>
                )}
              </div>
              <div className="flex items-center gap-1">
                <strong className="font-semibold">{price} BTD</strong>
                <del className="font-semibold opacity-50">
                  {originalPrice} BTD
                </del>
              </div>
            </div>
          </div>
        </div>
      )}
      {variant === "home" && (
        <div className="rounded-xl bg-background">
          <div className="relative space-y-4 bg-primary/5 px-6 py-6">
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
                  <del className="font-semibold opacity-50">
                    ${originalPrice}
                  </del>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex items-center gap-1">
                    <Star className="text-base" />
                    <div>{rating}</div> <div>({totalReviews})</div>
                  </div>
                  {Object.keys(origin)?.length > 0 && (
                    <div>
                      <img
                        className="size-4 object-contain object-center"
                        src={origin?.flag}
                        alt={origin?.name}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            {tags.length > 0 && (
              <div className="absolute right-6 top-2 mt-0 flex items-center gap-2">
                {tags?.map((item, index) => (
                  <span
                    key={index}
                    className="inline-block rounded bg-accent px-2 py-1 text-xs font-semibold text-accent-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
