import { Star } from "@/assets/svg/icons/Stars";
import CartInfo from "../../CartInfo";
import { Button } from "@/components/ui/Button.jsx";
import Cart from "@/components/partials/Header/Navigation/Cart/index.jsx";
import { urls } from "@/api/urls.js";
import { bn } from "@/lib/enTobn.js";

const ProductCard = ({ lang, item, variant = "default" }) => {
  const {
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
                  <Cart className="size-[1.25em]" />
                </Button>
              </div>
            </div>
            <div>
              <div className="mb-2">
                <h5 className="uppercase">{lang === "en" ? name : name_bn}</h5>
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
              <h3 className="uppercase">{lang === "en" ? name : name_bn}</h3>
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
    </>
  );
};

export default ProductCard;
