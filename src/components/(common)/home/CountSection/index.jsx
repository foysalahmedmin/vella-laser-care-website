import { Badge } from "@/assets/svg/icons/Badge";
import { Customer } from "@/assets/svg/icons/Customer";
import { Doctor } from "@/assets/svg/icons/Doctor";
import { Product } from "@/assets/svg/icons/Product";
import { bn } from "@/lib/enTobn.js";
import { cn } from "@/lib/utils";

const CountSection = ({ lang }) => {
  const data = [
    {
      label: "Expert Dermatologist",
      label_bn: "চর্মরোগ বিশেষজ্ঞ",
      value: "20",
      icon: Doctor,
    },
    {
      label: "Products",
      label_bn: "পণ্যসমূহ",
      value: "44",
      icon: Product,
    },
    {
      label: "Happy Customers",
      label_bn: "সন্তুষ্ট গ্রাহক",
      value: "300",
      icon: Customer,
    },
    {
      label: "Year’s of Experince",
      label_bn: "অভিজ্ঞত",
      value: "7",
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
                <item.icon className="text-7xl text-primary" />
                <div className="space-y-2 text-center">
                  <h1 className="font-playfair text-5xl font-black">
                    {lang === "en"
                      ? item.value
                      : bn.engToNumber(Number(item.value))}
                    +
                  </h1>
                  <strong className="text block font-playfair text-xl capitalize">
                    {lang === "en" ? item.label : item.label_bn}
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
