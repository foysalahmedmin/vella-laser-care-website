import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import { fetchOrderEarnings } from "@/pages/(parlor)/apis.js";

const MyOrders = () => {
  const { data: orders } = useQuery({
    queryKey: ["order_earnings"],
    queryFn: () => fetchOrderEarnings(1, 20),
  });
  return (
    <>
      <div className="pt-10">
        <div className="grid grid-cols-1 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="grid grid-cols-5 bg-primary/5 text-title/85">
                <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                  Order ID
                </th>
                <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                  Order Date
                </th>
                <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                  Products
                </th>
                <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                  Status
                </th>
                <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                  Income
                </th>
              </tr>
            </thead>
            <tbody>
              {orders?.data?.length > 0 ? (
                orders?.data?.map((x, i) => (
                  <tr
                    key={i}
                    className="mt-3 grid grid-cols-5 bg-muted/15 text-sm text-title/85"
                  >
                    <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                      {x?.order_id}
                    </td>
                    <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                      {moment(new Date(x?.date)).format("DD, MMM YYYY")}
                    </td>
                    <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                      {x?.products?.map((product) => product?.name).join(", ")}
                    </td>
                    <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                      <span className="text-green-500">
                        {x?.status?.toUpperCase()}
                      </span>
                    </td>
                    <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                      {x?.total_commission_amount}BDT
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="mt-3 bg-muted/15 text-title/85">
                  <td
                    colSpan={5}
                    className="self-stretch px-4 py-4 text-center"
                  >
                    No Orders Found!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyOrders;
