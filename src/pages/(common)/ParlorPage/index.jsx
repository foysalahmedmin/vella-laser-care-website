import ParlorsSection from "@/components/(common)/parlor/ParlorsSection";
import BannerSection from "@/components/partials/Sections/BannerSection";
import SubscriptionSection from "@/components/partials/Sections/SubscriptionSection";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { fetchFilteredParlors } from "@/pages/(common)/ParlorPage/parlorApis.js";
import { useSelector } from "react-redux";

const ParlorPage = () => {
  const { i18n } = useTranslation();
  const { city } = useSelector((state) => state.parlor_filter);
  const { data } = useQuery({
    queryKey: ["filtered_parlors", city],
    queryFn: () => fetchFilteredParlors(1, 50, "", city),
  });
  console.log(data);
  return (
    <main>
      <BannerSection
        title="Parlor"
        breadcrumbItems={[
          { label: "Home", path: "/" },
          { label: "Parlor", path: "/parlors" },
        ]}
      />
      <ParlorsSection
        total={data?.total}
        info={data?.data}
        lang={i18n.language}
      />
      <SubscriptionSection lang={i18n.language} className="pb-16" />
    </main>
  );
};

export default ParlorPage;
