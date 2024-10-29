import { Chart } from "@/components/ui/Chart";
import { PieChart } from "@/components/ui/Chart/PieChart";
import { cn } from "@/lib/utils";
import { fetchServiceEarnings } from "@/pages/(parlor)/apis";
import { useQuery } from "@tanstack/react-query";

const Statistics = ({ className }) => {
  const { data: services } = useQuery({
    queryKey: ["services"],
    queryFn: () => fetchServiceEarnings(),
  });
  return (
    <section
      className={cn(
        "h-full rounded-2xl bg-card p-6 shadow-custom-1",
        className,
      )}
    >
      <div className="flex h-full flex-col space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <span className="block text-sm">Statistics</span>
            <h4>Earning by Service</h4>
          </div>
        </div>
        <hr />
        <div className="mx-6 grid grow place-items-center py-4">
          <div className="aspect-square w-full">
            <div style={{ width: "100%", height: "100%" }}>
              <Chart>
                <PieChart data={services} />
              </Chart>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
