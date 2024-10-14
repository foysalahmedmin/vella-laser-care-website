import { FileCsv } from "@/assets/svg/icons/File";
import { Button } from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";

const OrderSection = () => {
  return (
    <section className="pb-16 md:pb-24">
      <div className="container">
        <div className="rounded-2xl border bg-card p-8 shadow-custom-1 md:p-12">
          <div className="space-y-8">
            <div className="flex items-center justify-between gap-4">
              <span className="inline-block font-medium leading-none text-title/85">
                Showing results 1-50 of 110
              </span>
              <div>
                <Button className="text-sm underline" variant="link">
                  <span className="inline-block rounded bg-destructive p-1 text-destructive-foreground">
                    <FileCsv />
                  </span>{" "}
                  <span>Download CSV file</span>
                </Button>
              </div>
            </div>
            <div>
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
                        Delivery
                      </th>
                      <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                        Total Earning
                      </th>
                      <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                        From
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="mt-3 grid bg-muted/15 text-title/85 [grid-template-columns:2.5rem_repeat(5,minmax(0,1fr))]">
                      <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                        <input type="checkbox" className="checkbox text-lg" />
                      </td>
                      <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                        ACA9877656
                      </td>
                      <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                        12-12-2024
                      </td>
                      <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                        Nikunjo-2, Dhaka
                      </td>
                      <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                        1256 BDT
                      </td>
                      <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                        Rahat
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="text-center">
              <Button variant="outline">
                <span>Show More</span> <ChevronDown className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
