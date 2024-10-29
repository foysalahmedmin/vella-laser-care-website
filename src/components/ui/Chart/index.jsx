import { forwardRef } from "react";
import { ResponsiveContainer } from "recharts";

const Chart = forwardRef(({ children, ...props }, ref) => {
  return (
    <ResponsiveContainer ref={ref} {...props}>
      {children}
    </ResponsiveContainer>
  );
});

Chart.displayName = "Chart";

export { Chart };
