import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import { fetchAppointmentEarnings } from "../../../../../pages/(parlor)/apis.js";

const DoctorAppointments = () => {
  const { data: appointments } = useQuery({
    queryKey: ["appointment_earnings"],
    queryFn: () => fetchAppointmentEarnings(1, 20),
  });

  return (
    <>
      <div className="pt-10">
        <div className="grid grid-cols-1 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="grid grid-cols-5 bg-primary/5 text-title/85">
                <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:justify-start first:pl-4 last:justify-end last:pr-4">
                  Appointment Date
                </th>
                <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:justify-start first:pl-4 last:justify-end last:pr-4">
                  Doctor’s name
                </th>
                <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:justify-start first:pl-4 last:justify-end last:pr-4">
                  Customer
                </th>
                <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:justify-start first:pl-4 last:justify-end last:pr-4">
                  Status
                </th>
                <th className="flex items-center justify-center self-stretch px-2 py-2 text-center first:justify-start first:pl-4 last:justify-end last:pr-4">
                  Income
                </th>
              </tr>
            </thead>
            <tbody>
              {appointments?.data?.length > 0 ? (
                appointments?.data?.map((x, index) => (
                  <tr
                    key={index}
                    className="mt-3 grid grid-cols-5 bg-muted/15 text-sm text-title/85"
                  >
                    <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:justify-start first:pl-4 last:justify-end last:pr-4">
                      {moment(new Date(x?.date)).format("DD, MMM YYYY")}
                    </td>
                    <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:justify-start first:pl-4 last:justify-end last:pr-4">
                      {x?.doctor?.name}
                    </td>
                    <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:justify-start first:pl-4 last:justify-end last:pr-4">
                      {x?.name}
                    </td>
                    <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:justify-start first:pl-4 last:justify-end last:pr-4">
                      <span className="text-green-500">
                        {x?.status?.toUpperCase()}
                      </span>
                    </td>
                    <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:justify-start first:pl-4 last:justify-end last:pr-4">
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
