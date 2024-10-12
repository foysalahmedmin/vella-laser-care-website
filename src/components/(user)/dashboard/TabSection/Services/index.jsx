import { Button } from "@/components/ui/Button";
import { Edit, Trash } from "lucide-react";

const Services = () => {
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
                  Service ID
                </th>
                <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                  Description
                </th>
                <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                  Service type
                </th>
                <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                  Price
                </th>
                <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                  Action
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
                  Your doctor will probably order an have neurological changes,
                </td>
                <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                  <a className="font-medium text-title/85 underline" href="">
                    Skin care
                  </a>
                </td>
                <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                  1256 BDT
                </td>
                <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                  <div className="inline-flex items-center justify-end gap-2">
                    <Button
                      size="icon"
                      className="size-6 bg-tertiary text-tertiary-foreground hover:bg-tertiary/75"
                    >
                      <Edit className="size-4" />
                    </Button>
                    <Button
                      size="icon"
                      className="size-6 bg-destructive text-destructive-foreground hover:bg-destructive/75"
                    >
                      <Trash className="size-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Services;
