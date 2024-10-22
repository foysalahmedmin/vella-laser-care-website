import { fetchCustomerCounts } from "@/pages/(user)/UserDashboard/dashboardApis.js";
import { useQuery } from "@tanstack/react-query";
import { CalendarCheck2, Megaphone, PackagePlus } from "lucide-react";

const CountSection = () => {
  const { data } = useQuery({
    queryKey: ["my_counts"],
    queryFn: () => fetchCustomerCounts(),
  });
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="group cursor-pointer space-y-2 rounded-xl bg-card p-6 shadow-custom-1 transition-all duration-300 hover:bg-primary">
            <h4 className="group-hover:text-primary-foreground">
              Appointments
            </h4>
            <div className="flex items-end justify-between gap-2 text-title/85 group-hover:text-primary-foreground">
              <span className="inline-block font-playfair text-3xl font-black">
                {data?.appointments || 0}
              </span>
              <span className="grid size-10 place-items-center rounded-full bg-primary/10 text-primary group-hover:bg-light/15 group-hover:text-primary-foreground">
                <CalendarCheck2 className="size-6" />
              </span>
            </div>
          </div>
          <div className="group cursor-pointer space-y-2 rounded-xl bg-card p-6 shadow-custom-1 transition-all duration-300 hover:bg-primary">
            <h4 className="group-hover:text-primary-foreground">Orders</h4>
            <div className="flex items-end justify-between gap-2 text-title/85 group-hover:text-primary-foreground">
              <span className="inline-block font-playfair text-3xl font-black">
                {data?.orders || 0}
              </span>
              <span className="grid size-10 place-items-center rounded-full bg-primary/10 text-primary group-hover:bg-light/15 group-hover:text-primary-foreground">
                <PackagePlus className="size-6" />
              </span>
            </div>
          </div>
          <div className="group cursor-pointer space-y-2 rounded-xl bg-card p-6 shadow-custom-1 transition-all duration-300 hover:bg-primary">
            <h4 className="group-hover:text-primary-foreground">Bookings</h4>
            <div className="flex items-end justify-between gap-2 text-title/85 group-hover:text-primary-foreground">
              <span className="inline-block font-playfair text-3xl font-black">
                {data?.bookings || 0}
              </span>
              <span className="grid size-10 place-items-center rounded-full bg-primary/10 text-primary group-hover:bg-light/15 group-hover:text-primary-foreground">
                <Megaphone className="size-6" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountSection;
