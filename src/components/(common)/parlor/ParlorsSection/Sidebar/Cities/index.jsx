import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import CityItem from "./CityItem";

const Cities = ({ className, lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const data = [
    {
      _id: "1",
      name: "City Parlor 1",
      name_bn: "শহর পার্লার ১",
      total: 100,
    },
    {
      _id: "2",
      name: "City Parlor 2",
      name_bn: "শহর পার্লার ২",
      total: 150,
    },
    {
      _id: "3",
      name: "City Parlor 3",
      name_bn: "শহর পার্লার ৩",
      total: 200,
    },
  ];
  return (
    <div
      className={cn("accordion", className, {
        open: isOpen,
      })}
    >
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center justify-between px-4">
          <strong className="font-roboto uppercase">
            {lang === "en" ? "CITY" : "CITY"}
          </strong>
          <ChevronRight
            className={cn(
              "size-4 shrink-0 rotate-90 transition-all duration-300",
              {
                "-rotate-90": isOpen,
              },
            )}
          />
        </div>
      </div>
      <div className="accordion-content">
        <ul className="pt-4">
          {data?.map((item, i) => (
            <CityItem lang={lang} key={i} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cities;
