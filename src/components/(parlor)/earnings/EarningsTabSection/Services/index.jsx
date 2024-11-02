import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import TableSkeleton from "@/components/skeletons/TableSkeleton/index.jsx";
import { fetchBookingEarnings } from "../../../../../pages/(parlor)/apis.js";

const Services = () => {
  const { isLoading, data: bookings } = useQuery({
    queryKey: ["booking_earnings"],
    queryFn: () => fetchBookingEarnings(1, 20),
  });
  if (isLoading) return <TableSkeleton />;
  return (
    <>
      <div className="pt-10">
        <div className="grid grid-cols-1 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="grid grid-cols-5 bg-primary/5 text-title/85">
                <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                  Date
                </th>
                <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                  Service
                </th>
                <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                  Customer
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
              {bookings?.data?.length > 0 ? (
                bookings?.data?.map((x, index) => (
                  <tr
                    key={index}
                    className="mt-3 grid grid-cols-5 bg-muted/15 text-sm text-title/85"
                  >
                    <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                      {moment(new Date(x?.date)).format("DD, MMM YYYY")}
                    </td>
                    <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                      {x?.service?.name}
                    </td>
                    <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                      {x?.name}
                    </td>
                    <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                      <span className="text-green-500">
                        {x?.status?.toUpperCase()}
                      </span>
                    </td>
                    <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                      {x?.total}BDT
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="mt-3 bg-muted/15 text-title/85">
                  <td
                    colSpan={7}
                    className="self-stretch px-4 py-4 text-center"
                  >
                    No Booking Found!
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

export default Services;
