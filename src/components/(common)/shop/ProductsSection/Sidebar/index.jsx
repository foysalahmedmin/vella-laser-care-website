import { cn } from "@/lib/utils";
import Categories from "./Categories";
import PriceRange from "./PriceRange";
import SkinConcern from "./SkinConcern";
import SkinType from "./SkinType";

const Sidebar = ({ className, lang }) => {
  return (
    <aside className={cn("", className)}>
      <div className="space-y-4">
        <Categories lang={lang} />
        <hr className="mx-4" />
        <PriceRange lang={lang} />
        <hr className="mx-4" />
        <SkinType lang={lang} />
        <hr className="mx-4" />
        <SkinConcern lang={lang} />
      </div>
    </aside>
  );
};

export default Sidebar;
