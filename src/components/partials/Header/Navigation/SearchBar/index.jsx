import { MagnifyOutline } from "@/assets/svg/icons/Magnify";
import { Button } from "@/components/ui/Button";
import { Dropdown } from "@/components/ui/Dropdown";
import { cn } from "@/lib/utils";
import { useState } from "react";

const SearchBar = ({ className, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={cn("relative inline-flex", className)} {...props}>
      <Button
        className=""
        variant="none"
        size="none"
        onClick={() => setIsOpen(true)}
      >
        <MagnifyOutline className="size-[1.25em]" />
      </Button>
      <Dropdown
        className="left-auto right-0 mx-container w-[calc(100%-var(--container-space)*2)] origin-top-right -translate-x-0 bg-background lg:min-w-80"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <label className="input h-8 w-full gap-2 bg-card px-0">
          <input
            className="peer size-full flex-1 bg-transparent px-4 text-xs outline-none lg:text-sm"
            type="search"
            placeholder="What are you looking for?"
          />
          <Button
            className="rounded-l-none border-y-0 border-l border-r-0 border-border text-foreground hover:border-border hover:text-primary peer-focus-within:border-foreground"
            variant="outline"
            size="icon"
          >
            <MagnifyOutline className="size-[1.25rem]" />
          </Button>
        </label>
      </Dropdown>
    </div>
  );
};

export default SearchBar;
