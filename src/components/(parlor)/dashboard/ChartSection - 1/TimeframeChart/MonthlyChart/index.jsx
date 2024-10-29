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

const data = [
  {
    name: "JAN",
    month: 1,
  },
  {
    name: "FEB",
    month: 2,
  },
  {
    name: "MAR",
    month: 3,
  },
  {
    name: "APR",
    month: 4,
  },
  {
    name: "MAY",
    month: 5,
  },
  {
    name: "JUN",
    month: 6,
  },
  {
    name: "JUL",
    month: 7,
  },
  {
    name: "AUG",
    month: 8,
  },
  {
    name: "SEP",
    month: 9,
  },
  {
    name: "OCT",
    month: 10,
  },
  {
    name: "NOV",
    month: 11,
  },
  {
    name: "DEC",
    month: 12,
  },
];

const MonthlyChart = () => {
  const { data: monthly } = useQuery({
    queryKey: ["appointment_monthly"],
    queryFn: () => fetchParlorAppointmentGraph("monthly"),
  });
  return (
    <div className="size-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={monthly?.map((item) => {
            return {
              name: data?.find((x) => x?.month === item?.name)?.name,
              total: item?.total,
            };
          })}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={10}
        >
          <XAxis
            dataKey="name"
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

export default MonthlyChart;
