import { SectionTitle, Title } from "@/components/ui/SectionTitle";
import { bn } from "@/lib/enTobn.js";

const ProfileDetails = ({ lang, info }) => {
  return (
    <div className="space-y-6">
      <SectionTitle className="mb-0">
        <Title>{lang === "en" ? "Profile" : "Profile"}</Title>
      </SectionTitle>
      <div className="space-y-1">
        <span className="block text-xl font-medium text-title/85">
          {lang === "en" ? "Doctor’s Bio" : "Doctor’s Bio"}
        </span>
        <p className="text-muted-foreground">
          {lang === "en" ? info?.user?.description : info?.user?.description_bn}
        </p>
      </div>
      <div className="space-y-1">
        <span className="block text-xl font-medium text-title/85">
          {lang === "en" ? "Degrees" : "Degrees"}
        </span>
        <p className="text-muted-foreground">
          {lang === "en" ? info?.degrees : info?.degrees_bn}
        </p>
      </div>
      <div className="space-y-1">
        <span className="block text-xl font-medium text-title/85">Fees</span>
        <p className="font-medium text-primary">
          <span>Amount:</span>{" "}
          <span>
            ৳{lang === "en" ? info?.fees : bn.engToNumber(info?.fees)}
          </span>
        </p>
      </div>
      <div className="rounded-2xl border px-4 py-6">
        <div>
          <div className="grid grid-cols-1 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="grid grid-cols-3 bg-primary/5 text-title/85">
                  <th className="py-2 text-left font-medium first:pl-4 last:pr-4">
                    Week Days
                  </th>
                  <th className="py-2 text-center font-medium first:pl-4 last:pr-4">
                    Visiting Hour
                  </th>
                  <th className="py-2 text-right font-medium first:pl-4 last:pr-4">
                    Remarks (if any)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="my-3 grid grid-cols-3 gap-2 bg-muted/15 text-sm text-foreground">
                  <td className="flex items-center justify-start self-stretch px-2 py-2 text-left first:pl-4 last:pr-4">
                    Saturday
                  </td>
                  <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:pr-4">
                    {info?.saturday[0]?.name || "-"}
                  </td>
                  <td className="flex items-center justify-end self-stretch px-2 py-2 text-right first:pl-4 last:pr-4">
                    -
                  </td>
                </tr>
                <tr className="my-3 grid grid-cols-3 gap-2 bg-muted/15 text-sm text-foreground">
                  <td className="flex items-center justify-start self-stretch px-2 py-2 text-left first:pl-4 last:pr-4">
                    Sunday
                  </td>
                  <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:pr-4">
                    {info?.sunday[0]?.name || "-"}
                  </td>
                  <td className="flex items-center justify-end self-stretch px-2 py-2 text-right first:pl-4 last:pr-4">
                    -
                  </td>
                </tr>
                <tr className="my-3 grid grid-cols-3 gap-2 bg-muted/15 text-sm text-foreground">
                  <td className="flex items-center justify-start self-stretch px-2 py-2 text-left first:pl-4 last:pr-4">
                    Monday
                  </td>
                  <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:pr-4">
                    {info?.monday[0]?.name || "-"}
                  </td>
                  <td className="flex items-center justify-end self-stretch px-2 py-2 text-right first:pl-4 last:pr-4">
                    -
                  </td>
                </tr>
                <tr className="my-3 grid grid-cols-3 gap-2 bg-muted/15 text-sm text-foreground">
                  <td className="flex items-center justify-start self-stretch px-2 py-2 text-left first:pl-4 last:pr-4">
                    Tuesday
                  </td>
                  <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:pr-4">
                    {info?.tuesday[0]?.name || "-"}
                  </td>
                  <td className="flex items-center justify-end self-stretch px-2 py-2 text-right first:pl-4 last:pr-4">
                    -
                  </td>
                </tr>
                <tr className="my-3 grid grid-cols-3 gap-2 bg-muted/15 text-sm text-foreground">
                  <td className="flex items-center justify-start self-stretch px-2 py-2 text-left first:pl-4 last:pr-4">
                    Wednesday
                  </td>
                  <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:pr-4">
                    {info?.wednesday[0]?.name || "-"}
                  </td>
                  <td className="flex items-center justify-end self-stretch px-2 py-2 text-right first:pl-4 last:pr-4">
                    -
                  </td>
                </tr>
                <tr className="my-3 grid grid-cols-3 gap-2 bg-muted/15 text-sm text-foreground">
                  <td className="flex items-center justify-start self-stretch px-2 py-2 text-left first:pl-4 last:pr-4">
                    Thursday
                  </td>
                  <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:pr-4">
                    {info?.thursday[0]?.name || "-"}
                  </td>
                  <td className="flex items-center justify-end self-stretch px-2 py-2 text-right first:pl-4 last:pr-4">
                    -
                  </td>
                </tr>
                <tr className="my-3 grid grid-cols-3 gap-2 bg-muted/15 text-sm text-foreground">
                  <td className="flex items-center justify-start self-stretch px-2 py-2 text-left first:pl-4 last:pr-4">
                    Friday
                  </td>
                  <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:pr-4">
                    {info?.friday[0]?.name || "-"}
                  </td>
                  <td className="flex items-center justify-end self-stretch px-2 py-2 text-right first:pl-4 last:pr-4">
                    -
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
