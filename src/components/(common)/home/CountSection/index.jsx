import { Badge } from "@/assets/svg/icons/Badge";
import { Customer } from "@/assets/svg/icons/Customer";
import { Doctor } from "@/assets/svg/icons/Doctor";
import { Product } from "@/assets/svg/icons/Product";
import { cn } from "@/lib/utils";

const CountSection = () => {
  const data = [
    {
      label: "Expert Dermatologist",
      value: "20+",
      icon: Doctor,
    },
    {
      label: "Products",
      value: "44",
      icon: Product,
    },
    {
      label: "Happy Customers",
      value: "300+",
      icon: Customer,
    },
    {
      label: "Year’s of Experince",
      value: "7+",
      icon: Badge,
    },
  ];
  return (
    <section className="pb-16 md:pb-24">
      <div className="container">
        <div className="rounded-xl bg-primary/5 px-12 py-12">
          <div className="grid w-full grid-cols-1 divide-y md:inline-grid md:grid-cols-2 md:divide-y-0 xl:grid-cols-4">
            {data.map((item, i) => (
              <div
                key={i}
                className={cn(
                  "flex w-full flex-col items-center justify-start gap-2 px-4 py-4 xl:justify-center",
                )}
              >
                <item.icon className="text-primary" />
                <div className="space-y-2 text-center">
                  <h1 className="font-playfair text-5xl font-black">
                    {item.value}
                  </h1>
                  <strong className="text block font-playfair text-xl capitalize">
                    {item.label}
                  </strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountSection;
