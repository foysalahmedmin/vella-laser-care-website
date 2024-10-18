import { ActiveLink } from "@/components/ui/ActiveLink";
import { pathProcessor } from "@/lib/utils";
import useUser from "@/redux/slices/user-slice/useUser.js";
import {
  Briefcase,
  ChartBar,
  ChevronRight,
  GraduationCap,
  HomeIcon,
  Info,
  LayoutDashboard,
  LucideMessageSquarePlus,
  Network,
  Store,
} from "lucide-react";

const commonRoutes = [
  {
    path: "/",
    label: "Home",
    icon: <HomeIcon className="size-4" />,
  },
  {
    path: "/shop",
    label: "Shop",
    icon: <Store className="size-4" />,
  },
  {
    path: "/services",
    label: "Services",
    icon: <Briefcase className="size-4" />,
  },
  {
    path: "/blogs",
    label: "Blogs",
    icon: <Info className="size-4" />,
  },
  {
    label: "Our Affiliates",
    icon: <Network className="size-4" />,
    children: [
      {
        path: "/parlors",
        label: "Affiliate Parlor",
      },
      {
        path: "/doctors",
        label: "Affiliate Doctors",
      },
    ],
  },
  {
    path: "/training",
    label: "Training",
    icon: <GraduationCap className="size-4" />,
  },
];
const userRoutes = [
  {
    path: "/user/dashboard",
    label: "Dashboard",
    icon: <LayoutDashboard className="size-4" />,
  },
  {
    path: "/",
    label: "Home",
    icon: <HomeIcon className="size-4" />,
  },
  {
    path: "/shop",
    label: "Shop",
    icon: <Store className="size-4" />,
  },
  {
    path: "/services",
    label: "Services",
    icon: <Briefcase className="size-4" />,
  },
  {
    label: "Our Affiliates",
    icon: <Network className="size-4" />,
    children: [
      {
        path: "/parlors",
        label: "Affiliate Parlor",
      },
      {
        path: "/doctors",
        label: "Affiliate Doctors",
      },
    ],
  },
];
const parlorRoutes = [
  {
    path: "/parlor/dashboard",
    label: "Dashboard",
    icon: <LayoutDashboard className="size-4" />,
  },
  {
    path: "/",
    label: "Home",
    icon: <HomeIcon className="size-4" />,
  },
  {
    path: "/shop",
    label: "Shop",
    icon: <Store className="size-4" />,
  },
  {
    path: "/services",
    label: "Services",
    icon: <Briefcase className="size-4" />,
  },
  {
    path: "/parlor/earnings",
    label: "Earnings",
    icon: <ChartBar className="size-4" />,
  },
  {
    path: "/parlor/history",
    label: "Booking History",
    icon: <LucideMessageSquarePlus className="size-4" />,
  },
  {
    path: "/parlor/withdraw_history",
    label: "Withdraw History",
    icon: <LucideMessageSquarePlus className="size-4" />,
  },
  {
    label: "Our Affiliates",
    icon: <Network className="size-4" />,
    children: [
      {
        path: "/parlors",
        label: "Affiliate Parlor",
      },
      {
        path: "/doctors",
        label: "Affiliate Doctors",
      },
    ],
  },
];

const NavMenu = () => {
  const { isAuthenticated, role } = useUser();

  const routes = isAuthenticated
    ? role && role === "parlor"
      ? parlorRoutes
      : userRoutes
    : commonRoutes;
  return (
    <>
      {routes?.map((route, i) => (
        <li className="flex items-center" key={i}>
          {route?.path && (
            <ActiveLink
              to={"/" + pathProcessor(route?.path)}
              className={
                "underline-animated inline-flex cursor-pointer gap-1 font-playfair font-medium capitalize after:mx-auto after:border-title"
              }
              activeClassName="after:border-primary after:w-full"
            >
              <span className="whitespace-nowrap text-[0.875em]">
                {route?.label}
              </span>
            </ActiveLink>
          )}
          {route?.children?.length > 0 && (
            <div className="group relative inline-flex items-center">
              <span
                className={
                  "underline-animated peer inline-flex cursor-pointer items-center gap-1 whitespace-nowrap font-playfair font-medium capitalize after:mx-auto after:border-title"
                }
              >
                <span className="whitespace-nowrap text-[0.875em]">
                  {route?.label}
                </span>
                <ChevronRight
                  className="size-4 lg:rotate-90"
                  strokeWidth={2.5}
                />
              </span>
              <ul className="invisible absolute -right-2 top-0 min-w-40 shrink-0 origin-left translate-x-full scale-0 space-y-2 rounded bg-card px-4 py-0 opacity-0 transition-all duration-300 group-hover:visible group-hover:scale-100 group-hover:opacity-100 lg:-bottom-2 lg:left-1/2 lg:top-auto lg:origin-top lg:-translate-x-1/2 lg:translate-y-full lg:py-2">
                {route?.children.map((child, i) => (
                  <li className="shrink-0" key={i}>
                    <ActiveLink
                      to={"/" + pathProcessor(child?.path)}
                      className={
                        "underline-animated cursor-pointer gap-1 py-1 font-playfair font-medium capitalize after:mx-auto after:border-title"
                      }
                      activeClassName="after:border-primary after:w-full"
                    >
                      <span className="whitespace-nowrap text-[0.75em]">
                        {child?.label}
                      </span>
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
