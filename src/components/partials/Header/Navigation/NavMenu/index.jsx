import { ActiveLink } from "@/components/ui/ActiveLink";
import { pathProcessor } from "@/lib/utils";
import { ChevronRight, HomeIcon, Info, ReceiptText, Store } from "lucide-react";

const routes = [
  {
    path: "/",
    label: "Home",
    icon: <HomeIcon size={16} />,
  },
  {
    path: "/shop",
    label: "Shop",
    icon: <Store size={16} />,
  },
  {
    path: "/blog",
    label: "Blog",
    icon: <Info size={16} />,
  },
  {
    label: "Our Affiliates",
    icon: <ReceiptText size={16} />,
    children: [
      {
        path: "/affiliate-parlor",
        label: "Affiliate Parlor",
      },
      {
        path: "/affiliate-doctors",
        label: "Affiliate Doctors",
      },
    ],
  },
  {
    path: "/training",
    label: "Training",
    icon: <ReceiptText size={16} />,
  },
];

const NavMenu = () => {
  return (
    <>
      {routes.map((route, i) => (
        <li key={i}>
          {route?.path && (
            <ActiveLink
              to={"/" + pathProcessor(route?.path)}
              className={
                "underline-animated cursor-pointer gap-1 py-1 font-playfair font-semibold capitalize text-title after:mx-auto after:border-title"
              }
              activeClassName="after:border-primary after:w-full"
            >
              <span className="text-sm">{route?.label}</span>
            </ActiveLink>
          )}
          {route?.children?.length > 0 && (
            <div className="group relative inline-flex">
              <span
                className={
                  "underline-animated peer inline-flex cursor-pointer items-end gap-1 whitespace-nowrap py-1 font-playfair font-semibold capitalize text-title after:mx-auto after:border-title"
                }
              >
                <span className="text-sm">{route?.label}</span>{" "}
                <ChevronRight className="lg:rotate-90" size={16} />
              </span>
              <ul className="invisible absolute -right-2 top-0 min-w-40 shrink-0 origin-left translate-x-full scale-0 space-y-2 rounded bg-card px-4 py-0 opacity-0 transition-all duration-300 group-hover:visible group-hover:scale-100 group-hover:opacity-100 lg:-bottom-2 lg:left-1/2 lg:top-auto lg:origin-top lg:-translate-x-1/2 lg:translate-y-full lg:py-2">
                {route?.children.map((child, i) => (
                  <li className="shrink-0" key={i}>
                    <ActiveLink
                      to={"/" + pathProcessor(child?.path)}
                      className={
                        "underline-animated cursor-pointer gap-1 py-1 font-playfair font-semibold capitalize text-title after:mx-auto after:border-title"
                      }
                      activeClassName="after:border-primary after:w-full"
                    >
                      <span className="text-sm">{child?.label}</span>
                    </ActiveLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </>
  );
};

export default NavMenu;
