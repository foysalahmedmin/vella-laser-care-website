import ProductCard from "@/components/partials/Cards/ProductCard";
import { cn } from "@/lib/utils";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { fetchFilteredShipping } from "@/pages/(common)/ShopPage/shopApis.js";

const OrderReviewSection = ({ className }) => {
  const { products, city } = useSelector((state) => state.cart);
  const { data: shipping } = useQuery({
    queryKey: ["filtered_shipping", city],
    queryFn: () => fetchFilteredShipping(city),
    enabled: !!city,
  });
  return (
    <section className={cn("space-y-8", className)}>
      <div className="rounded-md bg-card p-4">
        <div className="space-y-6">
          <strong className="block font-medium uppercase">
            1. REVIEW YOUR ORDER ({products?.length || 0} ITEMS)
          </strong>
          <div className="space-y-4">
            <div>
              {products?.map((item, index) => (
                <div
                  className="border-b-2 py-6 first:pt-0 last:border-0 last:pb-0"
                  key={index}
                >
                  <ProductCard item={item} index={index} variant="cart" />
                </div>
              ))}
            </div>
            <hr />
            <div className="flex items-center justify-between gap-2 font-semibold">
              <span className="uppercase text-title">Subtotal</span>
              <span className="uppercase text-title">
                {products
                  ?.map((x) => x?.price * x?.quantity)
                  ?.reduce((partialSum, a) => partialSum + a, 0)}
                BDT
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <span className="block font-medium text-title">
              Select delivery
            </span>
            <ul className="space-y-2">
              <li className="rounded-xl border bg-muted/50">
                <label className="flex cursor-pointer justify-between gap-2 p-4">
                  <div className="min-w-20">
                    <span className="font-medium uppercase text-title">
                      {shipping?.charge || 0}
                      BDT
                    </span>
                  </div>
                  <div className="flex-1 space-y-1 text-title">
                    <span className="block text-base">Regular</span>
                    <span className="block text-sm">
                      ({shipping?.days || 0} days delivery)
                    </span>
                  </div>
                  <div className="grid place-items-center">
                    <input
                      className="radio my-auto inline-block bg-card text-xl"
                      type="radio"
                      name="delivery"
                    />
                  </div>
                </label>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <p>You're almost close to placing your order!</p>
            <progress
              // style={{ "--accent": "var(--muted)" }}
              className="primary w-full"
              value={75}
              max={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderReviewSection;
