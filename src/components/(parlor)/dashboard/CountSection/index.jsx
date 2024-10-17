import { MoneyBag } from "@/assets/svg/icons/DashboardBanner";
import { Box, CalendarCheck2, CalendarCog } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchParlorCounts } from "@/pages/(parlor)/apis.js";

const CountSection = () => {
  const { data } = useQuery({
    queryKey: ["dashboard_count"],
    queryFn: () => fetchParlorCounts(),
  });
  return (
    <section className="py-16 md:pt-0">
      <div className="container">
        <div className="relative z-10 grid gap-6 md:-mt-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="group cursor-pointer space-y-2 rounded-xl bg-card p-6 shadow-custom-1 transition-all duration-300 hover:bg-primary">
            <h4 className="group-hover:text-primary-foreground">Bookings</h4>
            <div className="flex items-end justify-between gap-2 text-title/85 group-hover:text-primary-foreground">
              <span className="inline-block font-playfair text-3xl font-black">
                {data?.bookings > 10 ? data?.bookings : `0${data?.bookings}`}
              </span>
              <span className="grid size-10 place-items-center rounded-full bg-primary/10 text-primary group-hover:bg-light/15 group-hover:text-primary-foreground">
                <CalendarCheck2 className="size-6" />
              </span>
            </div>
          </div>
          <div className="group cursor-pointer space-y-2 rounded-xl bg-card p-6 shadow-custom-1 transition-all duration-300 hover:bg-primary">
            <h4 className="group-hover:text-primary-foreground">Pending</h4>
            <div className="flex items-end justify-between gap-2 text-title/85 group-hover:text-primary-foreground">
              <span className="inline-block font-playfair text-3xl font-black">
                {data?.pending_bookings > 10
                  ? data?.pending_bookings
                  : `0${data?.pending_bookings}`}
              </span>
              <span className="grid size-10 place-items-center rounded-full bg-primary/10 text-primary group-hover:bg-light/15 group-hover:text-primary-foreground">
                <CalendarCog className="size-6" />
              </span>
            </div>
          </div>
          <div className="group cursor-pointer space-y-2 rounded-xl bg-card p-6 shadow-custom-1 transition-all duration-300 hover:bg-primary">
            <h4 className="group-hover:text-primary-foreground">
              Service Completed
            </h4>
            <div className="flex items-end justify-between gap-2 text-title/85 group-hover:text-primary-foreground">
              <span className="inline-block font-playfair text-3xl font-black">
                {data?.completed_bookings > 10
                  ? data?.completed_bookings
                  : `0${data?.completed_bookings}`}
              </span>
              <span className="grid size-10 place-items-center rounded-full bg-primary/10 text-primary group-hover:bg-light/15 group-hover:text-primary-foreground">
                <Box className="size-6" />
              </span>
            </div>
          </div>
          <div className="group cursor-pointer space-y-2 rounded-xl bg-card p-6 shadow-custom-1 transition-all duration-300 hover:bg-primary">
            <h4 className="group-hover:text-primary-foreground">Balance</h4>
            <div className="flex items-end justify-between gap-2 text-title/85 group-hover:text-primary-foreground">
              <span className="inline-block font-playfair text-3xl font-black">
                ৳{data?.balance}
              </span>
              <span className="grid size-10 place-items-center rounded-full bg-primary/10 text-primary group-hover:bg-light/15 group-hover:text-primary-foreground">
                <MoneyBag className="size-6" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountSection;
