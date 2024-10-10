import ProfileBar from "./ProfileBar";
import ProfileDetails from "./ProfileDetails";

const DoctorDetailsSection = ({ lang }) => {
  return (
    <section className="py-16">
      <div className="container space-x-8 md:space-x-12">
        <div className="grid gap-8 md:grid-cols-12 md:gap-12">
          <aside className="md:col-span-6 lg:col-span-5 xl:col-span-4">
            <ProfileBar lang={lang} />
          </aside>
          <div className="md:col-span-6 lg:col-span-7 xl:col-span-8">
            <ProfileDetails lang={lang} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetailsSection;
