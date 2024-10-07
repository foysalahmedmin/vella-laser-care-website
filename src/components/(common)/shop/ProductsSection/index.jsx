import { products } from "@/assets/data/products";
import ProductCard from "@/components/partials/Cards/ProductCard";
import { Button } from "@/components/ui/Button";
import { Dropdown } from "@/components/ui/Dropdown";
import { ChevronDown, List } from "lucide-react";
import { useState } from "react";
import Sidebar from "./Sidebar";

const ProductsSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex">
          <Sidebar className="w-72" />
          <div className="flex-1">
            <div className="flex h-top-header w-full items-center justify-between rounded-md px-4">
              <div>
                <Button
                  className="flex items-center gap-2 border border-border"
                  variant="outline"
                >
                  <List className="text-title" />
                  <span className="text-title">Showing all of 12 results</span>
                </Button>
              </div>
              <div className="relative flex">
                <Button
                  className="flex items-center gap-2 border border-border"
                  variant="outline"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="text-title">Sort By</span>
                  <ChevronDown className="text-title" />
                </Button>
                <Dropdown
                  className="left-auto right-0 z-[60] min-w-40 origin-top-right -translate-x-0"
                  isOpen={isOpen}
                  onClose={() => setIsOpen(false)}
                >
                  <ul className="divide-y">
                    <li className="flex cursor-pointer items-center justify-between px-4 py-2 hover:bg-primary/5">
                      <span>Price</span>
                    </li>
                  </ul>
                </Dropdown>
              </div>
            </div>
            <div className="rounded-md px-4 py-6">
              <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
                {products?.map((item, index) => (
                  <ProductCard key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
