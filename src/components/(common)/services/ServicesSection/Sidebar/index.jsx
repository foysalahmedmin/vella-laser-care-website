import { cn } from "@/lib/utils";
import Categories from "./Categories";

const Sidebar = ({ className, lang }) => {
  return (
    <aside className={cn("", className)}>
      <div className="space-y-4">
        <Categories lang={lang} />
      </div>
    </aside>
  );
};

export default Sidebar;
