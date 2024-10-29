import { Button } from "@/components/ui/Button";
import { Download } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import {
  fetchParlorOrders,
  fetchSalesInvoice,
} from "@/pages/(user)/UserDashboard/dashboardApis.js";
import moment from "moment";
import { useState } from "react";

const MyOrders = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadIndex, setDownloadIndex] = useState(null);
  const { data: orders } = useQuery({
    queryKey: ["parlor_orders"],
    queryFn: () => fetchParlorOrders(1, 20),
  });
  return (
    <>
      <div className="pt-10">
        <div className="grid grid-cols-1 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="grid bg-primary/5 text-title/85 [grid-template-columns:2.5rem_repeat(5,minmax(0,1fr))]">
                <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                  <input type="checkbox" className="checkbox text-lg" />
                </th>
                <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                  Order Number
                </th>
                <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                  Order Date
                </th>
                <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                  Status
                </th>
                <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                  Total
                </th>
                <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                  Invoice
                </th>
              </tr>
            </thead>
            <tbody>
              {orders?.data?.length > 0 ? (
                orders?.data?.map((x, i) => (
                  <tr
                    key={i}
                    className="mt-3 grid bg-muted/15 text-title/85 [grid-template-columns:2.5rem_repeat(5,minmax(0,1fr))]"
                  >
                    <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                      <input type="checkbox" className="checkbox text-lg" />
                    </td>
                    <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                      {x?.order_id}
                    </td>
                    <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                      {moment(new Date(x?.createdAt)).format("DD, MMM YYYY")}
                    </td>
                    <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                      <span className="text-green-500">
                        {x?.status?.toUpperCase()}
                      </span>
                    </td>
                    <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                      {x?.total} BDT
                    </td>
                    <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                      <Button
                        isLoading={isDownloading && i === downloadIndex}
                        disabled={isDownloading && i === downloadIndex}
                        onClick={async () => {
                          setDownloadIndex(i);
                          setIsDownloading(true);
                          const response = await fetchSalesInvoice(x?._id);
                          const blob = new Blob([response], {
                            type: "application/pdf",
                          });
                          const link = document.createElement("a");
                          link.href = window.URL.createObjectURL(blob);
                          link.download = `${x?.order_id}.pdf`;
                          link.click();
                          setDownloadIndex(null);
                          setIsDownloading(false);
                        }}
                        className="h-6 text-sm"
                      >
                        <span>Download</span>
                        <Download className="size-4" />
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="mt-3 bg-muted/15 text-title/85">
                  <td
                    colSpan={7}
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
