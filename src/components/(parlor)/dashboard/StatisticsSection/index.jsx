import { cn } from "@/lib/utils";
import EarningByServices from "./EarningByServices";

const StatisticsSection = ({ className }) => {
  return (
    <section
      className={cn(
        "h-full rounded-2xl bg-card p-6 shadow-custom-1",
        className,
      )}
    >
      <EarningByServices />
    </section>
  );
};

export default StatisticsSection;
