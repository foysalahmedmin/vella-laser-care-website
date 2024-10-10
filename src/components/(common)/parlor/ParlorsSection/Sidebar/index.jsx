import { cn } from "@/lib/utils";
import Cities from "./Cities";

const Sidebar = ({ className, lang }) => {
  return (
    <aside className={cn("", className)}>
      <div className="space-y-4">
        <Cities lang={lang} />
        {/*<hr className="mx-4" />*/}
        {/*<PriceRange lang={lang} />*/}
      </div>
    </aside>
  );
};

export default Sidebar;
