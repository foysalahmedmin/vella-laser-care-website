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
import { fetchParlorAppointmentGraph } from "../../../../../../pages/(parlor)/apis.js";

const YearlyChart = () => {
  const { data: yearly } = useQuery({
    queryKey: ["appointment_yearly"],
    queryFn: () => fetchParlorAppointmentGraph("yearly"),
  });
  console.log("appointment_yearly", yearly);
  return (
    <div className="size-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={yearly}
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
          <Tooltip itemStyle={{ textTransform: "capitalize" }} />
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

export default YearlyChart;
