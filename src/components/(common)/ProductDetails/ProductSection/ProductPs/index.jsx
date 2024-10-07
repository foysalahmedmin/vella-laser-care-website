import { Facebook } from "@/assets/svg/icons/Facebook";
import { Heart, HeartOutline } from "@/assets/svg/icons/Heart";
import { Instagram } from "@/assets/svg/icons/Instagram";
import { LinkedIn } from "@/assets/svg/icons/LinkedIn";
import { TikTok } from "@/assets/svg/icons/LinkedIn copy";
import { Button } from "@/components/ui/Button";
import {
  QuantityDecreaseTrigger,
  QuantityIncreaseTrigger,
  QuantityInput,
  QuantitySelector,
} from "@/components/ui/QuantitySelector";
import { StarRating } from "@/components/ui/StarRating";
import { cn, toFixedAndLocaleStringCurrency } from "@/lib/utils";
import { ShieldQuestion } from "lucide-react";

const ProductPs = ({ className, product }) => {
  const {
    name,
    description,
    tags,
    price,
    originalPrice,
    inStock,
    availableStock,
    rating,
    sku,
    origin,
    totalReviews,
    wishListed = false,
  } = product;
  return (
    <>
      <div
        className={cn(
          "max-w-xl flex-1 space-y-6 self-stretch md:space-y-8 lg:w-4/12 xl:w-5/12",
          className,
        )}
      >
        <div className="flex items-center justify-between gap-2">
          <div>
            {tags?.map((item, index) => (
              <span
                key={index}
                className="inline-block rounded bg-green-500 px-2 py-1 text-sm text-light"
              >
                {item}
              </span>
            ))}
          </div>
          <Button
            className="ml-auto rounded-full text-lg text-foreground"
            size="none"
            variant="none"
          >
            {wishListed ? (
              <Heart className="size-[1.5em]" />
            ) : (
              <HeartOutline className="size-[1.5em]" />
            )}
          </Button>
        </div>
        <div className="space-y-2 md:space-y-4">
          <div>
            <h3 className="font-roboto">{name}</h3>
            <p>{description}</p>
          </div>
          <strong className="mt-4 block space-x-2">
            <span>SKU:</span> <span>{sku}</span>
          </strong>
          <div className="flex divide-x-2">
            <div className="flex items-center gap-2 pr-4">
              <StarRating
                rating={rating}
                className="text-[1.5em] leading-none"
              />
              <span className="text-lg leading-none text-title">{rating}</span>
              <span className="text-lg leading-none">({totalReviews})</span>
              {Object.keys(origin)?.length > 0 && (
                <img
                  className="size-6 object-contain object-center"
                  src={origin?.flag}
                  alt={origin?.name}
                />
              )}
            </div>
            <div className="pl-4">
              {inStock ? (
                <span className="font-semibold text-green-500">In Stock</span>
              ) : (
                <span className="font-semibold text-red-500">
                  Not Available
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <strong className="text-xl font-semibold !leading-none text-title">
              {toFixedAndLocaleStringCurrency({
                value: price,
              })}
              BDT
            </strong>
            {originalPrice && (
              <del className="text-xl !leading-none text-muted-foreground line-through">
                {toFixedAndLocaleStringCurrency({
                  value: originalPrice,
                })}
                BDT
              </del>
            )}
            <span className="flex items-center gap-2 rounded-md bg-primary/5 px-2 py-1 text-sm text-primary">
              <span>Guaranteed lowest price</span> <ShieldQuestion size={16} />
            </span>
          </div>
        </div>
        <div className={cn("flex gap-4", className)}>
          <QuantitySelector
            defaultValue={1}
            minValue={1}
            maxValue={Number(availableStock)}
          >
            <QuantityDecreaseTrigger />
            <QuantityInput />
            <QuantityIncreaseTrigger />
          </QuantitySelector>
          <Button className="px-8 uppercase md:px-12">
            <span>Add To Cart</span>
          </Button>
        </div>
        <hr />
        <div className="space-y-2">
          <span className="block text-lg font-semibold text-title">
            Shipping to Bangladesh
          </span>
          <p>Free Shipping over 2000 BDT purchase (4-8 business days)</p>
          <a className="inline-block text-primary underline" href="">
            Return, Refund & Exchange policy
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block font-semibold text-title">SHARE:</span>
          <ul className="flex items-center gap-1 text-xl text-title">
            <Facebook />
            <Instagram />
            <TikTok />
            <LinkedIn />
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductPs;
