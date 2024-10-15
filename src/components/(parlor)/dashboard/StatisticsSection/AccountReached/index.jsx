import { MoveDown, MoveUp } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
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

const AccountReached = () => {
  return (
    <div>
      <div className="space-y-2 rounded-2xl bg-card p-6 shadow-custom-1">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <span className="block text-sm">Statistics</span>
            <h4>Account reached</h4>
          </div>
        </div>
        <hr />
        <div>
          <div className="flex items-end justify-center gap-1 py-4">
            <strong className="text-3xl">11,756</strong>
            <span className="flex items-center">
              <MoveUp className="size-3 text-green-500" />
              <MoveDown className="size-3 text-red-500" />
              <span>23%</span>
            </span>
          </div>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="Amount"
                  stroke="#DF313B"
                  fill="#FDE5E7"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountReached;
