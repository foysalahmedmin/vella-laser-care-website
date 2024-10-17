import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

// Custom Tooltip component
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded bg-dark px-2 py-1 text-center text-sm text-white shadow-md">
        <p className="text-xs">{payload[0]?.name}</p>
        <p className="font-semibold">{payload[0]?.value}</p>
      </div>
    );
  }
  return null;
};

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#FF8247", "#FF9860", "#FFAC7B", "#FFC4A1"];

const EarningByServices = () => {
  return (
    <div>
      <div className="space-y-2 rounded-2xl bg-card p-6 shadow-custom-1">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <span className="block text-sm">Statistics</span>
            <h4>Earning by Services</h4>
          </div>
        </div>
        <hr />
        <div className="py-4">
          <div className="h-56">
            <div style={{ width: "100%", height: "100%" }}>
              <ResponsiveContainer>
                <PieChart>
                  {/* Add Tooltip with Custom Content */}
                  <Tooltip content={<CustomTooltip />} />
                  <Pie dataKey="value" data={data} label>
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
    </div>
  );
};

export default EarningByServices;
