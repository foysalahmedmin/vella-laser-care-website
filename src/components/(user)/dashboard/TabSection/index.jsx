import { Description, SectionTitle, Title } from "@/components/ui/SectionTitle";
import {
  Tabs,
  TabsContent,
  TabsItem,
  TabsList,
  TabsTrigger,
} from "@/components/ui/Tabs";
import DoctorAppointments from "./DoctorAppointments";
import MyOrders from "./MyOrders";
import ParlorAppointments from "./ParlorAppointments";
import Services from "./Services";

const TabSection = () => {
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
    {
      label: "Parlor Appointments",
      value: "parlor-appointments ",
      element: <ParlorAppointments />,
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
        <div className="rounded-2xl border bg-card p-8 shadow-custom-1 md:p-12">
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
    </section>
  );
};

export default TabSection;
