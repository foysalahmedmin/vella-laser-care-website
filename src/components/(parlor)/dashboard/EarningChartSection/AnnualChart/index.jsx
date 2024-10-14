import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "JAN",
    Amount: 900,
  },
  {
    name: "FEB",
    Amount: 1000,
  },
  {
    name: "APR",
    Amount: 4000,
  },
  {
    name: "MAY",
    Amount: 1500,
  },
  {
    name: "JUN",
    Amount: 500,
  },
  {
    name: "JUL",
    Amount: 1000,
  },
  {
    name: "AUG",
    Amount: 1300,
  },
  {
    name: "SEP",
    Amount: 2100,
  },
  {
    name: "OCT",
    Amount: 3000,
  },
  {
    name: "NOV",
    Amount: 2300,
  },
  {
    name: "DEC",
    Amount: 5500,
  },
];

const AnnualChart = () => {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
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
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar
            dataKey="Amount"
            fill="#DF313B"
            background={{ fill: "#FDE5E7" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnnualChart;
