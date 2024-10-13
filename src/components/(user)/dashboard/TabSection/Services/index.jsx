import { Button } from "@/components/ui/Button";
import { Trash } from "lucide-react";
import {
  fetchCustomerBookings,
  mutateBookingStatus,
} from "@/pages/(user)/UserDashboard/dashboardApis.js";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import moment from "moment/moment.js";
import { errorMessage } from "@/helpers/error.js";
import { toast } from "react-toastify";

const Services = () => {
  const [pendingIndex, setPendingIndex] = useState(null);
  const { data: services, refetch } = useQuery({
    queryKey: ["bookings"],
    queryFn: () => fetchCustomerBookings(1, 20),
  });
  const { isPending, mutateAsync } = useMutation({
    mutationFn: mutateBookingStatus,
    onSuccess: async () => {
      await refetch();
    },
  });
  const handleStatus = async (id) => {
    try {
      const status = await mutateAsync({ id, status: "cancelled" });
      toast.success(status?.message);
    } catch (error) {
      toast.error(errorMessage(error));
    }
  };
  return (
    <>
      <div className="pt-10">
        <div className="grid grid-cols-1 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="grid grid-cols-7 bg-primary/5 text-title/85">
                <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                  Service Date
                </th>
                <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                  Service
                </th>
                <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                  Slot
                </th>
                <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                  Booking type
                </th>
                <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                  Service type
                </th>
                <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                  Status
                </th>
                <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {services?.data?.map((x, index) => (
                <tr
                  key={index}
                  className="mt-3 grid grid-cols-7 bg-muted/15 text-sm text-title/85"
                >
                  <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                    {moment(new Date(x?.date)).format("DD, MMM YYYY")} <br />
                    {x?.slot?.name}
                  </td>
                  <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                    {x?.service?.name}
                  </td>
                  <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                    {x?.slot?.name}
                  </td>
                  <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                    <div>
                      {x?.payment_method === "online" ? (
                        <div className="inline-flex items-center gap-1">
                          <span className="inline-block size-2 rounded-full bg-green-500" />
                          <span>Online</span>
                          <p>Join Online</p>
                        </div>
                      ) : (
                        <div className="inline-flex items-center gap-1">
                          <span className="inline-block size-2 rounded-full bg-yellow-600" />
                          <span>Offline</span>
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                    <a className="font-medium text-title/85 underline" href="">
                      {x?.service_type}
                    </a>
                  </td>
                  <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                    <span className="text-green-500">
                      {x?.status?.toUpperCase()}
                    </span>
                  </td>
                  <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:justify-end last:pr-4 [&:nth-child(2)]:justify-start [&:nth-child(2)]:pl-4">
                    <div className="inline-flex items-center justify-end gap-2">
                      {/*<Button*/}
                      {/*  size="icon"*/}
                      {/*  className="size-6 bg-tertiary text-tertiary-foreground hover:bg-tertiary/75"*/}
                      {/*>*/}
                      {/*  <Edit className="size-4" />*/}
                      {/*</Button>*/}
                      <Button
                        isLoading={isPending && index === pendingIndex}
                        disabled={isPending && index === pendingIndex}
                        onClick={async () => {
                          setPendingIndex(index);
                          await handleStatus(x?._id);
                          setPendingIndex(null);
                        }}
                        size="icon"
                        className="size-6 bg-destructive text-destructive-foreground hover:bg-destructive/75"
                      >
                        <Trash className="size-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Services;
