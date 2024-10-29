import { cn } from "@/lib/utils";
import Statistics from "./Statistics";
import TimeFrameChart from "./TimeframeChart";

const ChartSection1 = ({ className }) => {
  return (
    <section className={cn("pb-16", className)}>
      <div className="container pb-16">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 self-stretch md:col-span-7 lg:col-span-8">
            <TimeFrameChart />
          </div>
          <div className="col-span-12 self-stretch md:col-span-5 lg:col-span-4">
            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChartSection1;
