import {
  Tabs,
  TabsContent,
  TabsItem,
  TabsList,
  TabsTrigger,
} from "@/components/ui/Tabs";
import { cn } from "@/lib/utils";
import DailyChart from "./DailyChart";
import MonthlyChart from "./MonthlyChart";
import YearlyChart from "./YearlyChart";

const TimeFrameChart = ({ className }) => {
  const tabs = [
    {
      label: "Daily",
      value: "daily",
      element: <DailyChart />,
    },
    {
      label: "Monthly",
      value: "monthly",
      element: <MonthlyChart />,
    },
    {
      label: "Yearly",
      value: "yearly",
      element: <YearlyChart />,
    },
  ];
  return (
    <section
      className={cn(
        "h-full rounded-2xl bg-card p-6 shadow-custom-1",
        className,
      )}
    >
      <Tabs className="flex h-full flex-col space-y-4" value={0}>
        <div className="flex items-center justify-between">
          <h4>Service Earning</h4>
          <TabsList className="justify-end rounded-xl bg-primary/5 p-1">
            {tabs.map((item, index) => (
              <TabsTrigger
                className="rounded-xl px-4 py-2 after:hidden"
                activeClassName="bg-primary text-primary-foreground"
                key={index}
                value={index}
              >
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        <hr />
        <div className="grow">
          <TabsContent className="size-full">
            {tabs.map((item, index) => (
              <TabsItem className="size-full" key={index} value={index}>
                <div className="size-full">{item.element}</div>
              </TabsItem>
            ))}
          </TabsContent>
        </div>
      </Tabs>
    </section>
  );
};

export default TimeFrameChart;
