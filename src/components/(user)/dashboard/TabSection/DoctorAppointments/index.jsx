import { Button } from "@/components/ui/Button";
import { Download, Edit, Trash } from "lucide-react";

const DoctorAppointments = () => {
  return (
    <>
      <div className="pt-10">
        <div className="grid grid-cols-1 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="grid grid-cols-8 bg-primary/5 text-title/85">
                <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:justify-start first:pl-4 last:justify-end last:pr-4">
                  Appointment No.
                </th>
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
                  Remarks
                </th>
                <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:justify-start first:pl-4 last:justify-end last:pr-4">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="mt-3 grid grid-cols-8 bg-muted/15 text-sm text-title/85">
                <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:justify-start first:pl-4 last:justify-end last:pr-4">
                  ACA9877656
                </td>
                <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:justify-start first:pl-4 last:justify-end last:pr-4">
                  12-12-2024 <br />
                  11:00 am- 12:00 pm
                </td>
                <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:justify-start first:pl-4 last:justify-end last:pr-4">
                  <div>
                    <div className="inline-flex items-center gap-1">
                      <span className="inline-block size-2 rounded-full bg-green-500" />
                      <span>Online</span>
                    </div>
                    <div className="inline-flex items-center gap-1">
                      <span className="inline-block size-2 rounded-full bg-yellow-600" />
                      <span>Offline</span>
                    </div>
                    <p>Amberkhana, Sylhet</p>
                  </div>
                </td>
                <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:justify-start first:pl-4 last:justify-end last:pr-4">
                  Dr. Tapan Kumar
                </td>
                <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:justify-start first:pl-4 last:justify-end last:pr-4">
                  <Button className="h-6 text-sm">
                    <span>Download</span>
                    <Download className="size-4" />
                  </Button>
                </td>
                <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:justify-start first:pl-4 last:justify-end last:pr-4">
                  <span className="text-green-500">Completed</span>
                  <span className="text-orange-500">Pending</span>
                </td>
                <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:justify-start first:pl-4 last:justify-end last:pr-4">
                  Com 1
                </td>
                <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:justify-start first:pl-4 last:justify-end last:pr-4">
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

export default DoctorAppointments;
