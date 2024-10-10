import { urls } from "@/api/urls.js";
import { Star } from "@/assets/svg/icons/Stars";
import { Button } from "@/components/ui/Button.jsx";
import {
  QuantityDecreaseTrigger,
  QuantityIncreaseTrigger,
  QuantityInput,
  QuantitySelector,
} from "@/components/ui/QuantitySelector";
import { bn } from "@/lib/enTobn.js";
import { cn } from "@/lib/utils";
import { LucideShoppingCart, Plus, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CartInfo from "../../CartInfo";
import { useState } from "react";
import CartBar from "@/components/partials/CartBar/index.jsx";
import { useDispatch } from "react-redux";
import {
  SetCartProduct,
  SetCartProductRemove,
} from "@/redux/slices/cartSlice.js";

const ProductCard = ({ lang, item, variant = "default", className, index }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const {
    _id,
    name,
    name_bn,
    short_description,
    short_description_bn,
    selling_price,
    discount_amount,
    discount,
    discount_type,
    media,
    rating,
    total_review,
    country_origin,
    image,
    price,
    thumbnail,
    quantity,
  } = item;
  return (
    <>
      {variant === "default" && (
        <div className="rounded-xl bg-background">
          <div className="space-y-4">
            <div className="relative h-60 overflow-hidden rounded-md border bg-background">
              <img
                className="size-full object-contain object-center"
                src={`${urls?.thumbnail}/${media}`}
                alt={name}
              />
              <div className="absolute left-2 right-2 top-2 flex items-center justify-between gap-2">
                <div className="mt-0 flex items-center gap-2">
                  <span className="inline-block rounded bg-green-500 px-1 text-xs font-semibold text-light">
                    {discount > 0 && `-${discount}`}
                    {discount > 0 && discount_type === "percentage" && "%"}
                  </span>
                </div>
                <Button
                  className="ml-auto rounded-full text-[0.65em]"
                  title="Wish List"
                  size="icon"
                >
                  <LucideShoppingCart
                    onClick={() => {
                      dispatch(
                        SetCartProduct({
                          _id: _id,
                          name: name,
                          price: selling_price - (discount_amount || 0),
                          name_bn: name_bn,
                          thumbnail: media,
                          short_description: short_description,
                          short_description_bn: short_description_bn,
                          discount_amount,
                          rating: rating,
                          quantity: 1,
                        }),
                      );
                      setIsOpen(true);
                    }}
                    className="size-[1.5em]"
                  />
                </Button>
              </div>
            </div>
            <div>
              <div className="mb-2">
                <h5
                  onClick={() => navigate(`/product/${_id}`)}
                  className="cursor-pointer uppercase"
                >
                  {lang === "en" ? name : name_bn}
                </h5>
                <p className="text-sm font-semibold">
                  {lang === "en" ? short_description : short_description_bn}
                </p>
              </div>
              <div className="mb-1 flex items-center gap-1">
                <div className="flex items-center gap-1 text-sm">
                  <Star className="text-base text-yellow-500" />
                  <div>{lang === "en" ? rating : bn.engToNumber(rating)}</div>
                  <div>
                    (
                    {lang === "en"
                      ? total_review
                      : bn.engToNumber(total_review)}
                    )
                  </div>
                </div>
                <div>
                  <img
                    className="size-4 object-contain object-center"
                    src={`${urls?.thumbnail}/${media}`}
                    alt={name}
                  />
                </div>
              </div>
              <div className="flex items-center gap-1">
                <strong className="font-semibold">
                  {lang === "en"
                    ? selling_price - (discount_amount || 0)
                    : bn.engToNumber(
                        selling_price - (discount_amount || 0),
                      )}{" "}
                  BDT
                </strong>
                <del className="font-semibold opacity-50">
                  {lang === "en"
                    ? selling_price
                    : bn.engToNumber(selling_price)}{" "}
                  BDT
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
              <h3
                onClick={() => navigate(`/product/${_id}`)}
                className="cursor-pointer uppercase"
              >
                {lang === "en" ? name : name_bn}
              </h3>
              <p className="font-semibold">
                {lang === "en" ? short_description : short_description_bn}
              </p>
            </div>
            <div className="h-60 overflow-hidden rounded bg-background">
              <img
                className="size-full object-contain object-center"
                src={`${urls?.thumbnail}/${media}`}
                alt={name}
              />
            </div>
            <div>
              <CartInfo className="relative -mt-10" />
            </div>
            <div>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1">
                  <strong className="font-semibold">
                    ৳
                    {lang === "en"
                      ? selling_price - (discount_amount || 0)
                      : bn.engToNumber(selling_price - (discount_amount || 0))}
                  </strong>
                  <del className="font-semibold opacity-50">
                    ৳
                    {lang === "en"
                      ? selling_price
                      : bn.engToNumber(selling_price)}
                  </del>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex items-center gap-1">
                    <Star className="text-base" />
                    <div>{lang === "en" ? rating : bn.engToNumber(rating)}</div>
                    <div>
                      (
                      {lang === "en"
                        ? total_review
                        : bn.engToNumber(total_review)}
                      )
                    </div>
                  </div>
                  <div>
                    <img
                      className="size-4 object-contain object-center"
                      src={`${urls?.country_origin}/${country_origin}`}
                      alt={country_origin}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute right-6 top-2 mt-0 flex items-center gap-2">
              <span className="inline-block rounded bg-accent px-2 py-1 text-xs font-semibold text-accent-foreground">
                {discount > 0 && lang === "en"
                  ? discount
                  : bn.engToNumber(discount)}
                {discount > 0 && discount_type === "percentage" && "%"}
              </span>
            </div>
          </div>
        </div>
      )}
      {variant === "cart" && (
        <div className={cn("relative flex items-center gap-2", className)}>
          <div className="size-24 shrink-0">
            <img
              className="size-full object-contain object-center"
              src={`${urls?.thumbnail}/${thumbnail}`}
              alt={name}
            />
          </div>
          <div className="flex flex-1 flex-col self-stretch">
            <div>
              <div className="font-semibold uppercase text-title">{name}</div>
              <div className="flex items-center gap-2">
                <div className="text-sm">
                  <span>Rating: </span> <span>{rating}</span>
                </div>
              </div>
            </div>
            <div className="mt-auto flex items-end justify-between">
              <div className="text-base">
                <QuantitySelector
                  defaultValue={quantity}
                  quantity={quantity}
                  isDispatch={true}
                  index={index}
                  minValue={1}
                  maxValue={10}
                >
                  <QuantityDecreaseTrigger className="size-[1.75em] hover:border-accent hover:bg-accent hover:text-accent-foreground" />
                  <QuantityInput className="h-[1.75em] w-[3em]" />
                  <QuantityIncreaseTrigger className="size-[1.75em] hover:border-accent hover:bg-accent hover:text-accent-foreground" />
                </QuantitySelector>
              </div>
              <span className="inline-block uppercase">{price}BDT</span>
            </div>
          </div>
          <div className="absolute right-0 top-0">
            <Button
              className="rounded-full text-[0.5rem]"
              variant="outline"
              size="icon"
              onClick={() => dispatch(SetCartProductRemove({ _id: _id }))}
            >
              <X className="size-[1.5em]" />
            </Button>
          </div>
        </div>
      )}
      {variant === "cart-suggest" && (
        <div className={cn("relative flex items-center gap-2", className)}>
          <div className="size-24 shrink-0">
            <img
              className="size-full object-contain object-center"
              src={`${urls?.thumbnail}/${media}`}
              alt={name}
            />
          </div>
          <div className="flex flex-1 flex-col self-stretch">
            <div>
              <div className="font-semibold uppercase text-title">{name}</div>
              <div className="flex items-center gap-2">
                <div>
                  <span>Size: </span> <span>10ea</span>
                </div>
                <div>
                  <span>Pack: </span> <span>1 Pack</span>
                </div>
              </div>
            </div>
            <div className="mt-auto flex items-end justify-between">
              <span className="inline-block font-semibold uppercase text-title">
                {selling_price}BDT
              </span>
            </div>
          </div>
          <div className="absolute right-0 top-0">
            <Button
              className="rounded-full text-[0.5rem]"
              variant="outline"
              size="icon"
            >
              <Plus className="size-[1.5em]" />
            </Button>
          </div>
        </div>
      )}
      <div>{isOpen && <CartBar isOpen={isOpen} setIsOpen={setIsOpen} />}</div>
    </>
  );
};

export default ProductCard;
