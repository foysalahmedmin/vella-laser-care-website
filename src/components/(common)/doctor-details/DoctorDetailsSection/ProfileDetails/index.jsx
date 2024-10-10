import { SectionTitle, Title } from "@/components/ui/SectionTitle";

const ProfileDetails = () => {
  return (
    <div className="space-y-6">
      <SectionTitle className="mb-0">
        <Title>Monitoring Plan</Title>
      </SectionTitle>
      <div className="space-y-1">
        <span className="block text-xl font-medium text-title/85">
          Doctor’s Bio
        </span>
        <p className="text-muted-foreground">
          An alter-visit summary that provides a patent A'•tn relevant ano
          actionable •ntcrmauon anc instructions containing the patient name.
          provider's office contact information, date and location of visit, an
          updated medication list. updated vitals, reason(s) for visit
        </p>
      </div>
      <div className="space-y-1">
        <span className="block text-xl font-medium text-title/85">Fees</span>
        <p className="font-medium text-primary">
          <span>Amount:</span> <span>$300</span>
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
                    Blod Pessure
                  </td>
                  <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:pr-4">
                    Thrice Time @ 8:00 am, 3:00 pm, 8:00 pm
                  </td>
                  <td className="flex items-center justify-end self-stretch px-2 py-2 text-right first:pl-4 last:pr-4">
                    The only way to know if you have high blood pressure.
                  </td>
                </tr>
                <tr className="my-3 grid grid-cols-3 gap-2 bg-muted/15 text-sm text-foreground">
                  <td className="flex items-center justify-start self-stretch px-2 py-2 text-left first:pl-4 last:pr-4">
                    Exercise
                  </td>
                  <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:pr-4">
                    Thrice Time @ 8:00 am, 3:00 pm,
                  </td>
                  <td className="flex items-center justify-end self-stretch px-2 py-2 text-right first:pl-4 last:pr-4">
                    Your doctor will probably order an have neurological
                    changes,
                  </td>
                </tr>
                <tr className="my-3 grid grid-cols-3 gap-2 bg-muted/15 text-sm text-foreground">
                  <td className="flex items-center justify-start self-stretch px-2 py-2 text-left first:pl-4 last:pr-4">
                    Food
                  </td>
                  <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:pl-4 last:pr-4">
                    Thrice Time @ 8:00 am, 3:00 pm, 8:00 pm
                  </td>
                  <td className="flex items-center justify-end self-stretch px-2 py-2 text-right first:pl-4 last:pr-4">
                    Your doctor will probably order an have neurological
                    changes,
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
