import { Toggler } from "@/components/ui/Toggle";
import { Moon, Sun } from "lucide-react";

const ThemeToggler = () => {
  return (
    <Toggler
      className="hover:text-primary"
      on={{
        children: <Sun className="size-6" />,
      }}
      off={{
        children: <Moon className="size-6" />,
      }}
    />
  );
};

export default ThemeToggler;
