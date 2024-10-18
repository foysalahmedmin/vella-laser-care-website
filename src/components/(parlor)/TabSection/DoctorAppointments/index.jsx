import { Button } from "@/components/ui/Button";
import { errorMessage } from "@/helpers/error.js";
import {
  fetchParlorAppointments,
  fetchPrescriptionPdf,
  mutateAppointmentStatus,
} from "@/pages/(user)/UserDashboard/dashboardApis.js";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ArrowUpRight, Download, Trash } from "lucide-react";
import moment from "moment";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const DoctorAppointments = () => {
  const navigate = useNavigate();
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadIndex, setDownloadIndex] = useState(null);
  const [pendingIndex, setPendingIndex] = useState(null);
  const { data: appointments, refetch } = useQuery({
    queryKey: ["parlor_appointments"],
    queryFn: () => fetchParlorAppointments(1, 20),
  });
  const { isPending, mutateAsync } = useMutation({
    mutationFn: mutateAppointmentStatus,
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
              <tr className="grid grid-cols-8 bg-primary/5 text-title/85">
                <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:justify-start first:pl-4 last:justify-end last:pr-4">
                  Appointment Date
                </th>
                <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:justify-start first:pl-4 last:justify-end last:pr-4">
                  Appointment type
                </th>
                <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:justify-start first:pl-4 last:justify-end last:pr-4">
                  Doctor’s name
                </th>
                <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:justify-start first:pl-4 last:justify-end last:pr-4">
                  Prescription
                </th>
                <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:justify-start first:pl-4 last:justify-end last:pr-4">
                  Status
                </th>
                <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:justify-start first:pl-4 last:justify-end last:pr-4">
                  Message
                </th>
                <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:justify-start first:pl-4 last:justify-end last:pr-4">
                  Payment
                </th>
                <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:justify-start first:pl-4 last:justify-end last:pr-4">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {appointments?.data?.length > 0 ? (
                appointments?.data?.map((x, index) => (
                  <tr
                    key={index}
                    className="mt-3 grid grid-cols-8 bg-muted/15 text-sm text-title/85"
                  >
                    <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:justify-start first:pl-4 last:justify-end last:pr-4">
                      {moment(new Date(x?.date)).format("DD, MMM YYYY")} <br />
                      {x?.slot?.name}
                    </td>
                    <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:justify-start first:pl-4 last:justify-end last:pr-4">
                      <div>
                        {x?.appointment_type === "online" ? (
                          <div>
                            <div className="flex items-center justify-center gap-1 font-medium">
                              <span className="inline-block size-2 rounded-full bg-green-500" />
                              <span>Online</span>
                            </div>
                            <div
                              onClick={() => navigate(`/meet/${x?._id}`)}
                              className="inline-flex cursor-pointer items-center gap-1 text-primary underline"
                            >
                              <span>Join Online</span>
                              <ArrowUpRight className="size-4" />
                            </div>
                          </div>
                        ) : (
                          <div>
                            <div className="flex items-center justify-center gap-1 font-medium">
                              <span className="inline-block size-2 rounded-full bg-yellow-600" />
                              <span>Offline</span>
                            </div>
                            <p>Visit office</p>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:justify-start first:pl-4 last:justify-end last:pr-4">
                      {x?.doctor?.name}
                    </td>
                    <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:justify-start first:pl-4 last:justify-end last:pr-4">
                      <Button
                        isLoading={isDownloading && index === downloadIndex}
                        disabled={isDownloading && index === downloadIndex}
                        onClick={async () => {
                          if (x?.prescription?._id) {
                            setIsDownloading(true);
                            setDownloadIndex(index);
                            const response = await fetchPrescriptionPdf(
                              x?.prescription?._id,
                            );
                            const blob = new Blob([response], {
                              type: "application/pdf",
                            });
                            const link = document.createElement("a");
                            link.href = window.URL.createObjectURL(blob);
                            link.download = "prescription.pdf";
                            link.click();
                            setIsDownloading(false);
                            setDownloadIndex(null);
                          } else {
                            toast.warn("No prescription found");
                          }
                        }}
                        className="h-6 text-sm"
                      >
                        <span>Download</span>
                        <Download className="size-4" />
                      </Button>
                    </td>
                    <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:justify-start first:pl-4 last:justify-end last:pr-4">
                      <span className="text-green-500">
                        {x?.status?.toUpperCase()}
                      </span>
                    </td>
                    <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:justify-start first:pl-4 last:justify-end last:pr-4">
                      {x?.message}
                    </td>
                    <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:justify-start first:pl-4 last:justify-end last:pr-4">
                      {x?.isPaid ? "Paid" : "Due"}
                    </td>
                    <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:justify-start first:pl-4 last:justify-end last:pr-4">
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
                ))
              ) : (
                <tr className="mt-3 bg-muted/15 text-title/85">
                  <td
                    colSpan={7}
                    className="self-stretch px-4 py-4 text-center"
                  >
                    No Appointments Found!
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

export default DoctorAppointments;
