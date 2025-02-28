import { fetchParlorCounts } from "@/pages/(parlor)/apis.js";
import useUser from "@/redux/slices/user-slice/useUser.js";
import { useQuery } from "@tanstack/react-query";
import {
  CalendarCheck2,
  CalendarCog,
  PackageCheck,
  Wallet,
} from "lucide-react";

const CountSection = () => {
  const { role } = useUser();
  const { data } = useQuery({
    queryKey: ["dashboard_count", role],
    queryFn: () => fetchParlorCounts(),
  });
  return (
    <section className="py-16 md:pt-0">
      <div className="container">
        <div className="relative z-10 grid gap-6 md:-mt-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="group cursor-pointer space-y-2 rounded-xl bg-card p-6 shadow-custom-1 transition-all duration-300 hover:bg-primary">
            <h4 className="group-hover:text-primary-foreground">
              Service Bookings
            </h4>
            <div className="flex items-end justify-between gap-2 text-title/85 group-hover:text-primary-foreground">
              <span className="inline-block font-playfair text-3xl font-black">
                {data?.booking?.completed > 10
                  ? data?.booking?.completed
                  : `0${data?.booking?.completed}`}
                /
                {data?.booking?.total > 10
                  ? data?.booking?.total
                  : `0${data?.booking?.total}`}
              </span>
              <span className="grid size-10 place-items-center rounded-full bg-primary/10 text-primary group-hover:bg-light/15 group-hover:text-primary-foreground">
                <CalendarCheck2 className="size-6" />
              </span>
            </div>
          </div>
          <div className="group cursor-pointer space-y-2 rounded-xl bg-card p-6 shadow-custom-1 transition-all duration-300 hover:bg-primary">
            <h4 className="group-hover:text-primary-foreground">
              Product Order
            </h4>
            <div className="flex items-end justify-between gap-2 text-title/85 group-hover:text-primary-foreground">
              <span className="inline-block font-playfair text-3xl font-black">
                {data?.order?.completed > 10
                  ? data?.order?.completed
                  : `0${data?.order?.completed}`}
                /
                {data?.order?.total > 10
                  ? data?.order?.total
                  : `0${data?.order?.total}`}
              </span>
              <span className="grid size-10 place-items-center rounded-full bg-primary/10 text-primary group-hover:bg-light/15 group-hover:text-primary-foreground">
                <CalendarCog className="size-6" />
              </span>
            </div>
          </div>
          <div className="group cursor-pointer space-y-2 rounded-xl bg-card p-6 shadow-custom-1 transition-all duration-300 hover:bg-primary">
            <h4 className="group-hover:text-primary-foreground">
              Doctor Appointment
            </h4>
            <div className="flex items-end justify-between gap-2 text-title/85 group-hover:text-primary-foreground">
              <span className="inline-block font-playfair text-3xl font-black">
                {data?.appointment?.completed > 10
                  ? data?.appointment?.completed
                  : `0${data?.appointment?.completed}`}
                /
                {data?.appointment?.total > 10
                  ? data?.appointment?.total
                  : `0${data?.appointment?.total}`}
              </span>
              <span className="grid size-10 place-items-center rounded-full bg-primary/10 text-primary group-hover:bg-light/15 group-hover:text-primary-foreground">
                <PackageCheck className="size-6" />
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
                <Wallet className="size-6" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountSection;
