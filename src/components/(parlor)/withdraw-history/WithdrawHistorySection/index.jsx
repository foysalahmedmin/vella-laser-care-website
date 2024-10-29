import { fetchMyWithdraws } from "@/pages/(parlor)/EarningsPage/api.js";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";

const WithdrawHistorySection = () => {
  const { data } = useQuery({
    queryKey: ["my_withdrawals"],
    queryFn: () => fetchMyWithdraws(1, 20),
  });
  return (
    <section className="pb-16 md:pb-24">
      <div className="container">
        <div className="rounded-2xl border bg-card p-8 shadow-custom-1 md:p-12">
          <div className="space-y-8">
            <div className="flex items-center justify-between gap-4">
              <span className="inline-block font-medium leading-none text-title/85">
                Showing results 1-50 of 110
              </span>
            </div>
            <div>
              <div className="grid grid-cols-1 overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="grid grid-cols-6 bg-primary/5 text-title/85">
                      <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                        Date
                      </th>
                      <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                        Account Name
                      </th>
                      <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                        Account Number
                      </th>
                      <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                        Bank Name
                      </th>
                      <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                        Income
                      </th>
                      <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.data?.length > 0 ? (
                      data?.data?.map((x, index) => (
                        <tr
                          key={index}
                          className="mt-3 grid grid-cols-6 bg-muted/15 text-sm text-title/85"
                        >
                          <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                            {moment(new Date(x?.createdAt)).format(
                              "DD, MMM YYYY",
                            )}
                          </td>
                          <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                            {x?.account_name}
                          </td>
                          <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                            {x?.account_number}
                          </td>
                          <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                            {x?.bank_name}
                          </td>
                          <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                            <div className="inline-flex items-center justify-end gap-2">
                              {x?.amount}BDT
                            </div>
                          </td>
                          <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                            <span className="text-green-500">
                              {x?.status?.toUpperCase()}
                            </span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr className="mt-3 bg-muted/15 text-title/85">
                        <td
                          colSpan={7}
                          className="self-stretch px-4 py-4 text-center"
                        >
                          No Data Found!
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WithdrawHistorySection;
