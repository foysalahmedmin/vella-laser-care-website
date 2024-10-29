import BookingHistoryTabSection from "@/components/(parlor)/booking-history/BookingHistoryTabSection";
import BannerSection from "@/components/partials/Sections/BannerSection";

const BookingHistoryPage = () => {
  return (
    <main>
      <BannerSection
        title="Booking History"
        breadcrumbItems={[
          {
            label: "Home",
            link: "/",
          },
          {
            label: "Booking History",
            link: "/parlor/history",
          },
        ]}
      />
      <BookingHistoryTabSection />
    </main>
  );
};

export default BookingHistoryPage;
