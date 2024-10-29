import { remToPx } from "@/lib/utils";
import { forwardRef } from "react";
import { Cell, Pie, PieChart as RechartsPieChart, Tooltip } from "recharts";

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

const CustomLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  value,
}) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <foreignObject
      x={x - 30}
      y={y - 20}
      width={remToPx(3.75)}
      height={remToPx(2.5)}
    >
      <div
        xmlns="http://www.w3.org/1999/xhtml"
        style={{ textAlign: "center", color: "white" }}
      >
        <div style={{ fontSize: remToPx(0.75) + "px" }}>
          <span>{(percent * 100).toFixed(0)}%</span>
        </div>

        <div style={{ fontSize: remToPx(0.625) + "px" }}>
          <span>VALUE: </span>
          <span style={{ fontWeight: "bold" }}>{value}</span>
        </div>
      </div>
    </foreignObject>
  );
};

const COLORS = ["#FF8247", "#FF9860", "#FFAC7B", "#FFC4A1"];

const PieChart = forwardRef(({ data = [], ...props }, ref) => {
  return (
    <RechartsPieChart ref={ref} {...props}>
      <Tooltip content={<CustomTooltip />} />
      <Pie dataKey="value" data={data} labelLine={false} label={CustomLabel}>
        {data?.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </RechartsPieChart>
  );
});

PieChart.displayName = "PieChart";

export { PieChart };
