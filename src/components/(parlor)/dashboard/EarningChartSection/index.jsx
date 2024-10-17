import {
  Tabs,
  TabsContent,
  TabsItem,
  TabsList,
  TabsTrigger,
} from "@/components/ui/Tabs";
import AnnualChart from "./AnnualChart";
import QuarterChart from "./QuarterChart";
import SemesterChart from "./SemesterChart";

const EarningChartSection = () => {
  const tabs = [
    {
      label: "Daily",
      value: "daily",
      element: <QuarterChart />,
    },
    {
      label: "Monthly",
      value: "monthly",
      element: <SemesterChart />,
    },
    {
      label: "Yearly",
      value: "yearly",
      element: <AnnualChart />,
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="rounded-2xl bg-card p-6 shadow-custom-1">
          <Tabs className="space-y-4" value={0}>
            <div className="flex items-center justify-between">
              <h4>Earning</h4>
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
            <div>
              <TabsContent>
                {tabs.map((item, index) => (
                  <TabsItem key={index} value={index}>
                    {item.element}
                  </TabsItem>
                ))}
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default EarningChartSection;
