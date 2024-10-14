import ServiceBookModal from "@/components/partials/Modals/ServiceBookModal";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, ChevronDown, Download, Edit, Trash } from "lucide-react";
import { useState } from "react";

const CustomerRequestSection = () => {
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="rounded-2xl border bg-card p-8 shadow-custom-1 md:p-12">
          <div className="space-y-8">
            <div className="flex items-center justify-between gap-4">
              <span className="inline-block font-medium leading-none text-title/85">
                Showing results 1-50 of 110
              </span>
              <div>
                <Button className="uppercase">Book An request</Button>
                <ServiceBookModal
                  isOpen={isServiceModalOpen}
                  setIsOpen={setIsServiceModalOpen}
                />
              </div>
            </div>
            <div>
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
                        Payment
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
                        <div>
                          <span>12-12-2024</span> <br />
                          <span> 11:00 am- 12:00 pm</span>
                        </div>
                      </td>
                      <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:justify-start first:pl-4 last:justify-end last:pr-4">
                        <div>
                          <div>
                            <div className="flex items-center justify-center gap-1 font-medium">
                              <span className="inline-block size-2 rounded-full bg-green-500" />
                              <span>Online</span>
                            </div>
                            <a
                              href="#"
                              className="inline-flex items-center gap-1 text-primary underline"
                            >
                              <span>Join Online</span>
                              <ArrowUpRight className="size-4" />
                            </a>
                          </div>
                          <div>
                            <div className="flex items-center justify-center gap-1 font-medium">
                              <span className="inline-block size-2 rounded-full bg-yellow-600" />
                              <span>Offline</span>
                            </div>
                            <p>Visit office</p>
                          </div>
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
                        <span className="text-destructive">Pending</span>
                      </td>
                      <td className="flex items-center justify-center self-stretch px-2 py-2 text-center first:justify-start first:pl-4 last:justify-end last:pr-4">
                        <span className="text-green-500">Paid</span>
                        <span className="text-destructive">Unpaid</span>
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

export default CustomerRequestSection;
