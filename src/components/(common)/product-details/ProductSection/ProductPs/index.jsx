import { urls } from "@/api/urls.js";
import { Heart, HeartOutline } from "@/assets/svg/icons/Heart";
import { Facebook } from "@/assets/svg/icons/socials/Facebook";
import { Instagram } from "@/assets/svg/icons/socials/Instagram";
import { LinkedIn } from "@/assets/svg/icons/socials/LinkedIn";
import { TikTok } from "@/assets/svg/icons/socials/TikTok";
import { Button } from "@/components/ui/Button";
import {
  QuantityDecreaseTrigger,
  QuantityIncreaseTrigger,
  QuantityInput,
  QuantitySelector,
} from "@/components/ui/QuantitySelector";
import { StarRating } from "@/components/ui/StarRating";
import { bn } from "@/lib/enTobn.js";
import { cn, toFixedAndLocaleStringCurrency } from "@/lib/utils";
import { SetCartProduct } from "@/redux/slices/cartSlice.js";
import { ShieldQuestion } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";

const ProductPs = ({ className, info, lang }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  let wishListed = false;
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
            <span className="inline-block rounded bg-green-500 px-2 py-1 text-sm text-light">
              {info?.discount_amount}
              {info?.discount_type === "percentage" ? "%" : "৳"} OFF
            </span>
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
            <h3 className="font-roboto">
              {lang === "en" ? info?.name : info?.name_bn}
            </h3>
            <p>
              {lang === "en"
                ? info?.short_description
                : info?.short_description_bn}
            </p>
          </div>
          <strong className="mt-4 block space-x-2">
            <span>SKU:</span>{" "}
            <span>{lang === "en" ? info?.sku : bn.engToNumber(info?.sku)}</span>
          </strong>
          <div className="flex divide-x-2">
            <div className="flex items-center gap-2 pr-4">
              <StarRating
                rating={Math.round(Number(info?.rating)) || 5}
                className="text-[1.5em] leading-none"
              />
              <span className="text-lg leading-none text-title">
                {info?.rating}
              </span>
              <span className="text-lg leading-none">
                (
                {lang === "en"
                  ? info?.total_review
                  : bn.engToNumber(info?.total_review)}
                )
              </span>
              <img
                className="size-6 object-contain object-center"
                src={`${urls?.country_origin}/${info?.country_origin}`}
                alt={info?.name}
              />
            </div>
            <div className="pl-4">
              <span className="font-semibold text-green-500">In Stock</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <strong className="text-xl font-semibold !leading-none text-title">
              {toFixedAndLocaleStringCurrency({
                value:
                  lang === "en"
                    ? info?.selling_price - (info?.discount_amount || 0)
                    : bn.engToNumber(
                        info?.selling_price - (info?.discount_amount || 0),
                      ),
              })}
              BDT
            </strong>
            {info?.selling_price && (
              <del className="text-xl !leading-none text-muted-foreground line-through">
                {toFixedAndLocaleStringCurrency({
                  value:
                    lang === "en"
                      ? info?.selling_price
                      : bn.engToNumber(info?.selling_price),
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
            value={quantity}
            quantity={quantity}
            setQuantity={setQuantity}
            minValue={1}
            maxValue={10}
          >
            <QuantityDecreaseTrigger />
            <QuantityInput />
            <QuantityIncreaseTrigger />
          </QuantitySelector>
          <Button
            onClick={() => {
              dispatch(
                SetCartProduct({
                  _id: info?._id,
                  name: info?.name,
                  price: info?.selling_price - (info?.discount_amount || 0),
                  name_bn: info?.name_bn,
                  thumbnail: info?.media?.thumbnail,
                  short_description: info?.short_description,
                  short_description_bn: info?.short_description_bn,
                  rating: info?.rating,
                  discount_amount: info?.discount_amount,
                  quantity: quantity,
                }),
              );
            }}
            className="px-8 uppercase md:px-12"
          >
            <span>Add To Cart</span>
          </Button>
        </div>
        <hr />
        <div className="space-y-2">
          <span className="block text-lg font-semibold text-title">
            Shipping to Bangladesh
          </span>
          <p>Delivery amount depends on your city. (4-8 business days)</p>
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
