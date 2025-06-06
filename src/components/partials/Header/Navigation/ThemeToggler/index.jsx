import { Toggler } from "@/components/ui/Toggle";
import { Moon, Sun } from "lucide-react";

const ThemeToggler = () => {
  return (
    <Toggler
      className="hover:text-primary"
      on={{
        children: <Sun className="size-[1.25em]" />,
      }}
      off={{
        children: <Moon className="size-[1.25em]" />,
      }}
    />
  );
};

export default ThemeToggler;
