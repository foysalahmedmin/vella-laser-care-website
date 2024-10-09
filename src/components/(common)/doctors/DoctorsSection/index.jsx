import { doctors } from "@/assets/data/doctors";
import { MagnifyOutline } from "@/assets/svg/icons/Magnify";
import DoctorCard from "@/components/partials/Cards/DoctorCard";
import { Button } from "@/components/ui/Button";

const DoctorsSection = ({ lang }) => {
  return (
    <section className="py-16 md:py-24">
      <div className="container space-y-8 md:space-y-12">
        <div className="rounded-xl bg-gradient-to-r from-primary to-primary/50 px-16 py-12">
          <div className="grid items-center justify-between gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h3 className="dark text-title">Find a Doctor</h3>
              <p className="dark text-foreground">
                Choose a department or type doctors name.
              </p>
            </div>
            <div className="lg:col-span-7">
              <form className="flex flex-wrap items-center gap-4">
                <label className="input flex-1 bg-card">
                  <select
                    name="type"
                    className="h-full flex-1 border-none bg-transparent text-sm outline-none"
                  >
                    <option value="">Select Type</option>
                  </select>
                </label>
                <label className="input flex-1 gap-4 bg-card">
                  <MagnifyOutline className="text-lg" />
                  <input
                    type="search"
                    name="email"
                    placeholder="Enter doctors name"
                    className="h-full flex-1 border-none bg-transparent text-sm outline-none"
                  />
                </label>
                <Button type="submit">
                  <span>Search</span> <MagnifyOutline className="text-lg" />
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {doctors?.map((item, index) => (
            <DoctorCard key={index} item={item} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
