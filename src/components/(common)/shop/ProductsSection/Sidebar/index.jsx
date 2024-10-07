import { cn } from "@/lib/utils";
import Categories from "./Categories";
import PriceRange from "./PriceRange";
import SkinConcern from "./SkinConcern";
import SkinType from "./SkinType";

const Sidebar = ({ className }) => {
  return (
    <aside className={cn("", className)}>
      <div className="space-y-4">
        <Categories />
        <hr className="mx-4" />
        <PriceRange />
        <hr className="mx-4" />
        <SkinType />
        <hr className="mx-4" />
        <SkinConcern />
      </div>
    </aside>
  );
};

export default Sidebar;
