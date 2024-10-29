import WithdrawModal from "@/components/partials/Modals/WithdrawModal";
import { Button } from "@/components/ui/Button";
import { Description, SectionTitle, Title } from "@/components/ui/SectionTitle";
import {
  Tabs,
  TabsContent,
  TabsItem,
  TabsList,
  TabsTrigger,
} from "@/components/ui/Tabs";
import { useState } from "react";
import DoctorAppointments from "./DoctorAppointments";
import MyOrders from "./MyOrders";
import Services from "./Services";

const EarningsTabSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const tabs = [
    {
      label: "My Orders",
      value: "my-orders",
      element: <MyOrders />,
    },
    {
      label: "Doctor's Appointments",
      value: "Doctor's-appointments",
      element: <DoctorAppointments />,
    },
    {
      label: "Services",
      value: "services ",
      element: <Services />,
    },
  ];
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <SectionTitle variant="center">
          <Title>Book Appointments & Shop Online</Title>
          <Description>
            Seamlessly schedule appointments and order products from your
            favorite doctors, salons, and shops—all in one place!
          </Description>
        </SectionTitle>
        <div className="space-y-8 rounded-2xl border bg-card p-8 shadow-custom-1 md:p-12">
          <div className="flex items-center justify-between gap-4">
            <span className="inline-block font-medium leading-none text-title/85">
              Showing results 1-50 of 110
            </span>
            <div>
              <Button
                onClick={() => setIsOpen(true)}
                className="text-sm uppercase"
              >
                withdraw balance
              </Button>
            </div>
          </div>
          <Tabs value={tabs[0]?.value}>
            <TabsList className="justify-start gap-6 border-b">
              {tabs.map((item, index) => (
                <TabsTrigger
                  className="font-semibold shadow-none"
                  key={index}
                  value={item?.value}
                >
                  {item.label}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent>
              {tabs.map((item, index) => (
                <TabsItem key={index} value={item.value}>
                  {item.element}
                </TabsItem>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <WithdrawModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
};

export default EarningsTabSection;
