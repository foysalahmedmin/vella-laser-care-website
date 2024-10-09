import { products } from "@/assets/data/products";
import ProductCard from "@/components/partials/Cards/ProductCard";
import { cn } from "@/lib/utils";

const OrderReviewSection = ({ className }) => {
  return (
    <section className={cn("rounded-md bg-card p-4", className)}>
      <div className="space-y-6">
        <strong className="block font-medium uppercase">
          1. REVIEW YOUR ORDER (2 ITEMS)
        </strong>
        <div className="space-y-4">
          <div>
            {products.slice(2).map((item, index) => (
              <div
                className="border-b-2 py-6 first:pt-0 last:border-0 last:pb-0"
                key={index}
              >
                <ProductCard item={item} variant="cart" />
              </div>
            ))}
          </div>
          <hr />
          <div className="flex items-center justify-between gap-2 font-semibold">
            <span className="uppercase text-title">Subtotal</span>
            <span className="uppercase text-title">4600BDT</span>
          </div>
        </div>
        <div className="space-y-4">
          <span className="block font-medium text-title">Select delivery</span>
          <ul className="space-y-2">
            <li className="rounded-xl border bg-muted/50">
              <label className="flex cursor-pointer justify-between gap-2 p-4">
                <div className="min-w-20">
                  <span className="font-medium uppercase text-title">
                    4600BDT
                  </span>
                </div>
                <div className="flex-1 space-y-1 text-title">
                  <span className="block text-base">Regular</span>
                  <span className="block text-sm">(1–6 weeks delivery)</span>
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
          <p>
            You're <strong>300BDT</strong> away from free shipping!
          </p>
          <progress
            style={{ "--accent": "var(--muted)" }}
            value={25}
            max={100}
          />
        </div>
      </div>
    </section>
  );
};

export default OrderReviewSection;
