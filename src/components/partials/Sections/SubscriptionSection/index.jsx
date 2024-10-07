import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const SubscriptionSection = ({ className }) => {
  return (
    <section className={cn("", className)}>
      <div className="container">
        <div className="rounded-xl bg-gradient-to-r from-primary to-primary/50 px-16 py-12">
          <div className="grid items-center justify-between gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <h3 className="dark text-title">
                Stay up to date with the best of Vella Cosmetic Products
              </h3>
              <p className="dark text-foreground">
                Subscribe for the latest skincare trends, exciting new products
                and exclusive <br /> promotions from Vella Cosmetic
              </p>
            </div>
            <div className="lg:col-span-5">
              <form action="" className="input w-full border-r-0 bg-card px-0">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="flex-1 border-none bg-transparent px-4 text-sm outline-none"
                />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
