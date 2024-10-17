import { cn } from "@/lib/utils";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { useQuery } from "@tanstack/react-query";
import { fetchServiceEarnings } from "@/pages/(parlor)/apis.js";

// Custom Tooltip component
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white px-2 py-1 text-center text-sm">
        <p className="text-xs capitalize">{payload[0]?.name}</p>
        <p className="font-semibold text-[#FF8247]">{payload[0]?.value}</p>
      </div>
    );
  }
  return null;
};

const data = [
  { name: "group a", value: 400 },
  { name: "group b", value: 300 },
  { name: "group c", value: 300 },
  { name: "group d", value: 200 },
];

const COLORS = ["#FF8247", "#FF9860", "#FFAC7B", "#FFC4A1"];

const EarningByServices = ({ className }) => {
  const { data: services } = useQuery({
    queryKey: ["services"],
    queryFn: () => fetchServiceEarnings(),
  });
  return (
    <div className={cn("flex h-full flex-col space-y-4", className)}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <span className="block text-sm">Statistics</span>
          <h4>Earning by Services</h4>
        </div>
      </div>
      <hr />
      <div className="grid grow place-items-center py-4">
        <div className="aspect-square w-full">
          <div style={{ width: "100%", height: "100%" }}>
            <ResponsiveContainer>
              <PieChart>
                <Tooltip content={<CustomTooltip />} />
                <Pie dataKey="value" data={services} label>
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningByServices;
