import { fetchParlorOrderGraph } from "@/pages/(parlor)/apis.js";
import { useQuery } from "@tanstack/react-query";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const DailyChart = () => {
  const { data: daily } = useQuery({
    queryKey: ["order_daily"],
    queryFn: () => fetchParlorOrderGraph("daily"),
  });
  return (
    <div className="size-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={daily}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={10}
        >
          <XAxis
            dataKey="_id"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <CartesianGrid strokeDasharray="3 3" />
          <Bar
            dataKey="total"
            fill="#DF313B"
            background={{ fill: "#FDE5E7" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyChart;
